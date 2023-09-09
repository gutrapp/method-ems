from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import PersonViews, Logout, Register, Login, UseSession


router = SimpleRouter(trailing_slash=False)

router.register(r'person', PersonViews, basename='person')

urlpatterns = [
    path("auth/logout/person", Logout.as_view()),
    path("auth/register/person", Register.as_view()),
    path("auth/login/person", Login.as_view()),
    path("auth/session/person", UseSession.as_view()),
]