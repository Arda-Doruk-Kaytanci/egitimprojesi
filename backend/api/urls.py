from django.urls import path
from .views import (
    PostListView,
    PostCreateView,
    CommentCreateView,
    CommentListView,
    LogInView,
    RegisterView,
    MyPostsView,
    LogoutView,
    CreateTestView,
    TestListView,
    NoteListView,
    ProfileView,
)

urlpatterns = [
    path("register", RegisterView.as_view(), name="register"),
    path("login", LogInView.as_view(), name="login"),
    path("create-post", PostCreateView.as_view(), name="create post"),
    path("create-comment", CommentCreateView.as_view(), name="create comment"),
    path("comments", PostListView.as_view(), name="comment"),
    path("my-posts", MyPostsView.as_view(), name="myposts"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("tests/create", CreateTestView.as_view(), name="create test"),
    path("tests/get", TestListView.as_view(), name="get test"),
    path("notes/get", NoteListView.as_view(), name="get notes"),
    path("profile", ProfileView.as_view(), name="profile"),
]
