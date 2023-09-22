from rest_framework.routers import SimpleRouter
from django.urls import path

from .views import ResultViews, GetUserResults, CreateResult


router = SimpleRouter(trailing_slash=False)

router.register(r"result", ResultViews, basename="result")

urlpatterns = [
    path("result_specific/user", GetUserResults.as_view()),
    path("result_specific/<str:cpf>/<int:id>/create", CreateResult.as_view()),
]
