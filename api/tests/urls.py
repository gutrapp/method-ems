from rest_framework.routers import SimpleRouter
from django.urls import path

from .views import (
    MbtiViews,
    LifeViews,
    LoveLanguageViews,
    SelfKnowledgeViews,
    CreateMbtiResult,
)


router = SimpleRouter(trailing_slash=False)

router.register(r"mbti", MbtiViews, basename="mbti")
router.register(r"life", LifeViews, basename="life")
router.register(r"lovelanguage", LoveLanguageViews, basename="lovelanguage")
router.register(r"selfknowledge", SelfKnowledgeViews, basename="selfknowledge")

urlpatterns = [path("mbti_specific/create/<int:id>", CreateMbtiResult.as_view())]
