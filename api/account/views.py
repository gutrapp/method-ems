from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.views import APIView

from .models import User
from .serializers import AdminSerializer, UserSerializer


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        """Sets CSRF cookie"""

        return Response(status=status.HTTP_200_OK)


@method_decorator(csrf_protect, name="dispatch")
class Login(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        """Login"""

        email = request.data["email"]
        password = request.data["password"]

        try:
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@method_decorator(csrf_protect, name="dispatch")
class Logout(APIView):
    def delete(self, request, format=None):
        """Logout"""

        try:
            logout(request)
            return Response(status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@method_decorator(csrf_protect, name="dispatch")
class UseSession(APIView):
    def get(self, request, format=None):
        """Fetches the data on the current user logged in"""

        try:
            if not User.is_authenticated:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
            serializer = AdminSerializer(data=request.user.admin)
            return Response({"admin": serializer.data}, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
