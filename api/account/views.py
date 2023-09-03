from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.views import APIView

from .models import Admin
from .serializers import AdminSerializer


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)

    def get():
        """Sets CSRF cookie"""

        return Response(status=status.HTTP_200_OK)


@method_decorator(csrf_protect, name="dispatch")
class Login(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        """Login"""

        email = self.request.data["email"]
        password = self.request.data["password"]

        try:
            user = authenticate(self.request, email=email, password=password)
            if user is not None:
                login(self.request, user)
                return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


@method_decorator(csrf_protect, name="dispatch")
class Logout(APIView):
    def delete(self, request, format=None):
        """Logout"""

        try:
            logout(self.request)
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@method_decorator(csrf_protect, name="dispatch")
class UseSession(APIView):
    def get(self, request, format=None):
        """Fetches the data on the current user logged in"""

        try:
            if not Admin.is_authenticated:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            serializer = AdminSerializer(data=request.user)
            return Response({"admin": serializer.data}, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
