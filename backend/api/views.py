from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
import random
from .models import PostModel, CommentModel, QuestionsModel, TestModel
from .serializers import (
    PostSerializer,
    CommentSerializer,
    QuestionSerializer,
    TestSerializer,
)


class LogInView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response(
                {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "message": "Login successful",
                },
                status=status.HTTP_200_OK,
            )

        return Response(
            {"error": "Invalid username or password"},
            status=status.HTTP_401_UNAUTHORIZED,
        )


class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        refresh = request.data.get("refresh")
        access = request.data.get("access")
        if not refresh:
            return Response(
                {"detail": "Refresh token is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        try:
            token = RefreshToken(refresh)
            token.blacklist()
            token = AccessToken(refresh)
            token.blacklist()
        except Exception:
            return Response(
                {"detail": "Invalid or expired refresh token."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        return Response(status=status.HTTP_205_RESET_CONTENT)


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        if not username or not email or not password:
            return Response(
                {"error": "All fields are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(username=username).exists():
            return Response(
                {"error": "Username already taken."}, status=status.HTTP_409_CONFLICT
            )
        if User.objects.filter(email=email).exists():
            return Response(
                {"error": "Email already registered."}, status=status.HTTP_409_CONFLICT
            )

        user = User.objects.create_user(
            username=username, email=email, password=password
        )

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "message": "User registered successfully.",
                "user": {"username": user.username, "email": user.email},
                "tokens": {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                },
            },
            status=status.HTTP_201_CREATED,
        )


class PostListView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        post_tag = self.request.query_params.get("tag")
        if post_tag == "All":
            return PostModel.objects.all()
        return PostModel.objects.filter(tag=post_tag)


class MyPostsView(generics.ListAPIView):
    serializer_class = PostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return PostModel.objects.filter(posted_by=self.request.user)


class PostCreateView(generics.CreateAPIView):
    queryset = PostModel.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class CommentCreateView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(posted_by=self.request.user)


class CommentListView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        post_id = self.request.query_params.get("post_id")
        if not post_id:
            return CommentModel.objects.none()
        return CommentModel.objects.filter(post__id=post_id)


class PostFromSomeoneView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        posted_by_id = self.request.query_params.get("posted_by_id")
        if not posted_by_id:
            return PostModel.objects.none()
        return PostModel.objects.filter(posted_by=posted_by_id)


class GenerateTestView(generics.ListAPIView):
    serializer_class = QuestionSerializer

    def get_queryset(self):
        try:
            how_many = int(self.request.query_params.get("how_many", 0))
        except ValueError:
            return QuestionsModel.objects.none()

        subject = self.request.query_params.get("subject")
        questions = QuestionsModel.objects.filter(subject=subject)
        count = questions.count()

        if how_many > count:
            return QuestionsModel.objects.none()

        random_ids = random.sample(
            list(questions.values_list("id", flat=True)), how_many
        )
        return QuestionsModel.objects.filter(id__in=random_ids)


class CreateTestView(generics.CreateAPIView):
    queryset = TestModel.objects.all()
    serializer_class = TestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        return serializer.save()


class TestListView(generics.ListAPIView):
    serializer_class = TestSerializer
    permission_classes = [AllowAny]
    queryset = TestModel.objects.all()

    def get_queryset(self):
        subject = self.request.query_params.get("subject")
        if subject:
            return TestModel.objects.filter(subject=subject)
        return TestModel.objects.all()


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response(
            {
                "username": user.username,
                "email": user.email,
                "date_joined": user.date_joined,
            }
        )
