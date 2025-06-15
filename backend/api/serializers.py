from rest_framework import serializers
from .models import PostModel, CommentModel, QuestionsModel, TestModel
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username")


class CommentSerializer(serializers.ModelSerializer):
    posted_by = UserSerializer(read_only=True)

    class Meta:
        model = CommentModel
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    posted_by = UserSerializer(read_only=True)

    class Meta:
        model = PostModel
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionsModel
        fields = "__all__"


class TestSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = TestModel
        fields = ["id", "name", "questions"]
