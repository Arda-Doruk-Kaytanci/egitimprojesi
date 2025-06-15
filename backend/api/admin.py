from django.contrib import admin
from django.utils.html import format_html, format_html_join, mark_safe
from django.urls import reverse
from .models import PostModel, CommentModel, QuestionsModel, TestModel


@admin.register(PostModel)
class PostAdmin(admin.ModelAdmin):
    list_display = ("post_name", "posted_by", "num_comments", "image_thumb")
    readonly_fields = ("comment_list", "image_preview")

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "posted_by",
                    "post_name",
                    "attachments",
                    "image",
                    "category",
                    "tag",
                ),
            },
        ),
        (
            "Comments",
            {
                "classes": ("collapse",),
                "fields": ("comment_list",),
            },
        ),
    )

    def image_thumb(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="height:50px; object-fit:contain;"/>',
                obj.image.url,
            )
        return "—"

    image_thumb.short_description = "Thumb"

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" style="max-height:200px; object-fit:contain;"/>',
                obj.image.url,
            )
        return "— no image —"

    image_preview.short_description = "Image Preview"

    def num_comments(self, obj):
        return obj.comments.count()

    num_comments.short_description = "Comment Count"

    def comment_list(self, obj):
        qs = obj.comments.all()
        if not qs:
            return "— no comments —"

        link_data = []
        for c in qs:
            url = reverse(
                "admin:%s_%s_change" % (c._meta.app_label, c._meta.model_name),
                args=(c.pk,),
            )
            link_data.append((url, c.comment))

        return format_html_join(mark_safe("<br/>"), '<a href="{}">{}</a>', link_data)

    comment_list.short_description = "Comments"


@admin.register(CommentModel)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("posted_by", "post", "comment")
    list_filter = ("post", "posted_by")
    search_fields = ("comment",)


@admin.register(QuestionsModel)
class QuestionsAdmin(admin.ModelAdmin):
    list_display = [
        field.name
        for field in QuestionsModel._meta.get_fields()
        if getattr(field, "concrete", False) and not field.many_to_many
    ]


@admin.register(TestModel)
class TestModelAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]
    filter_horizontal = ["questions"]
