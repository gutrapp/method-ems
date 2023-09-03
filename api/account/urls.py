from django.urls import path
from .views import Logout, Login, GetCSRFToken, UseSession


urlpatterns = [
    path("auth/logout", Logout.as_view()),
    path("auth/csrf", GetCSRFToken.as_view()),
    path("auth/login", Login.as_view()),
    path("auth/session", UseSession.as_view()),
]
