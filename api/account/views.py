from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.views import APIView

from .models import User
from .serializers import AdminSerializer
from clinic.serializers import ClinicSerializer
from person.serializers import PersonSerializer


class GetAdminClinic(APIView):
    def get(self, request, format=None):
        try:
            admin = request.user.admin
            if admin.group == "C":
                serializer = ClinicSerializer(admin.clinic.all(), many=True)
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


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

                if user.type == "A":
                    return Response(
                        data=AdminSerializer(user.admin).data, status=status.HTTP_200_OK
                    )
                else:
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
            if request.user.type == "A":
                serializer = AdminSerializer(request.user.admin)
            elif request.user.type == "P":
                serializer = PersonSerializer(request.user.person)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
