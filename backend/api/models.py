from django.db import models
from django.contrib.auth.models import User


class PostModel(models.Model):
    posted_by = models.ForeignKey(
        User, blank=False, null=True, on_delete=models.PROTECT
    )
    categories = {"EDU": "educational", "HELP": "help", "GENERAL": "general"}
    post_name = models.CharField(max_length=100)
    tag = models.CharField(max_length=30, null=True, blank=False)
    category = models.CharField(
        choices=categories, max_length=50, null=True, blank=False
    )
    attachments = models.FileField(
        upload_to="attachments/",
        blank=True,
        null=True,
        max_length=255,
    )
    image = models.ImageField(
        upload_to="posts/images/",
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.post_name


class CommentModel(models.Model):
    posted_by = models.ForeignKey(
        User, on_delete=models.PROTECT, blank=False, null=True
    )
    comment = models.CharField(max_length=1000)
    post = models.ForeignKey(
        PostModel, related_name="comments", on_delete=models.PROTECT
    )

    def __str__(self):
        return self.comment


class QuestionsModel(models.Model):
    subjects = {"MATH": "math", "GEOGRAPHY": "geography", "LITERATURE": "literature"}
    name = models.CharField(max_length=100, null=True, blank=False)
    question = models.CharField(max_length=1000, null=True, blank=False)
    subject = models.CharField(choices=subjects, blank=False, null=True)
    tag = models.CharField(max_length=100, blank=False, null=True)
    image = models.ImageField(
        upload_to="posts/images/",
        blank=True,
        null=True,
    )
    option_a = models.CharField(max_length=100, null=True, blank=False)
    option_b = models.CharField(max_length=100, null=True, blank=False)
    option_c = models.CharField(max_length=100, null=True, blank=False)
    option_d = models.CharField(max_length=100, null=True, blank=False)
    option_e = models.CharField(max_length=100, null=True, blank=False)

    def __str__(self):
        return self.name


class NotesModel(models.Model):
    subjects = {"MATH": "math", "GEOGRAPHY": "geography", "LITERATURE": "literature"}
    name = models.CharField(max_length=100, null=True, blank=False)
    subject = models.CharField(choices=subjects, blank=False, null=True)
    content = models.CharField(max_length=1000, blank=False, null=True)
    tag = models.CharField(max_length=100, blank=False, null=True)
    image = models.ImageField(
        upload_to="posts/images/",
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.name
