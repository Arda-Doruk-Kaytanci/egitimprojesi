from django.db import models
from django.contrib.auth.models import User

subjects = [
    ("turkce", "Türkçe"),
    ("temel_matematik", "Temel Matematik"),
    ("fizik", "Fizik"),
    ("kimya", "Kimya"),
    ("biyoloji", "Biyoloji"),
    ("tarih", "Tarih"),
    ("cografya", "Coğrafya"),
    ("felsefe", "Felsefe"),
    ("din", "Din Kültürü ve Ahlak Bilgisi"),
    ("matematik", "Matematik"),
    ("edebiyat", "Türk Dili ve Edebiyatı"),
    ("tarih1", "Tarih-1"),
    ("tarih2", "Tarih-2"),
    ("cografya1", "Coğrafya-1"),
    ("cografya2", "Coğrafya-2"),
    ("psikoloji", "Psikoloji"),
    ("sosyoloji", "Sosyoloji"),
    ("mantik", "Mantık"),
    ("ingilizce", "İngilizce"),
    ("almanca", "Almanca"),
    ("fransizca", "Fransızca"),
]


class PostModel(models.Model):
    posted_by = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.PROTECT,
    )
    CATEGORIES = [
        ("EDU", "educational"),
        ("HELP", "help"),
        ("GENERAL", "general"),
    ]
    post_name = models.CharField(max_length=100)
    tag = models.CharField(
        max_length=30,
        null=True,
        blank=True,
    )
    category = models.CharField(
        choices=CATEGORIES,
        max_length=50,
        null=True,
        blank=True,
    )
    attachments = models.FileField(
        upload_to="attachments/",
        null=True,
        blank=True,
        max_length=255,
    )
    image = models.ImageField(
        upload_to="posts/images/",
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.post_name


class CommentModel(models.Model):
    posted_by = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete=models.PROTECT,
    )
    comment = models.CharField(max_length=1000)
    post = models.ForeignKey(
        PostModel,
        related_name="comments",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.comment


class QuestionsModel(models.Model):
    name = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    question = models.CharField(
        max_length=1000,
        null=True,
        blank=True,
    )
    subject = models.CharField(
        choices=subjects,
        null=True,
        blank=True,
        max_length=100,
    )
    tag = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    image = models.ImageField(
        upload_to="posts/images/",
        null=True,
        blank=True,
    )
    option_a = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    option_b = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    option_c = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    option_d = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    option_e = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )

    ANSWER_CHOICES = [
        ("A", "A"),
        ("B", "B"),
        ("C", "C"),
        ("D", "D"),
        ("E", "E"),
    ]
    correct_answer = models.CharField(
        choices=ANSWER_CHOICES,
        max_length=2,
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name or ""


class NotesModel(models.Model):
    name = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    brief_exp = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    subject = models.CharField(
        choices=subjects,
        null=True,
        blank=True,
        max_length=100,
    )
    content = models.CharField(
        max_length=1000,
        null=True,
        blank=True,
    )
    tag = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    image = models.ImageField(
        upload_to="posts/images/",
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.name or ""


class TestModel(models.Model):
    name = models.CharField(max_length=100)
    questions = models.ManyToManyField(
        "QuestionsModel",
        related_name="tests",
    )
    subject = models.CharField(
        choices=subjects,
        null=True,
        blank=True,
        max_length=100,
    )

    def __str__(self):
        return self.name
