from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.views import APIView

from account.models import User
from clinic.models import Address, Cellphone
from account.serializers import UserSerializer
from clinic.serializers import AddressSerializer, CellphoneSerializer
from .models import Person
from .filters import PersonFilter
from .serializers import PersonSerializer


class PersonViews(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    filterset_class = PersonFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'   
    ordering = ['id']


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
        except:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    

@method_decorator(csrf_protect, name="dispatch")
class Register(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        """Register"""
        try:
            password = request.data["user"]["password"]
            user = UserSerializer(data=request.data["user"])
            cellphone = CellphoneSerializer(data=request.data["cellphone"])
            address = AddressSerializer(data=request.data["address"])
            person = PersonSerializer(data=request.data["person"])

            if user.is_valid() and cellphone.is_valid() and address.is_valid() and person.is_valid():
                user = User(
                    first_name=user.data["first_name"],
                    last_name=user.data["last_name"],
                    email=user.data["email"],
                    type="P"
                )
                user.set_password(password)
                user.save()

                address = address.save()
                cellphone = cellphone.save()

                person = Person(
                            cpf=person.data["cpf"],
                            age=person.data["age"],
                            sex=person.data["sex"], 
                            user=user
                        )
                person.save()
                person.address.add(address)
                person.cellphone.add(cellphone)

                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            print(e)
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
            serializer = PersonSerializer(data=request.user.person)
            return Response({"person": serializer.data}, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)