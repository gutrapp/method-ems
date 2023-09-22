from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.views import APIView

from .models import Clinic, Address, Cellphone
from .filters import ClinicFilter, AddressFilter, CellphoneFilter
from .serializers import ClinicSerializer, AddressSerializer, CellphoneSerializer
from result.serializers import ResultSerializer
from person.serializers import PersonSerializer
from tests.serializers import MbtiSerializer


class GetClinicResults(APIView):
    def get(self, request, id, format=None):
        try:
            results = Clinic.objects.get(id=id).result_set.all()
            serializer = ResultSerializer(results, many=True)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetClinicPeople(APIView):
    def get(self, request, id, format=None):
        try:
            people = set()
            results = Clinic.objects.get(id=id).result_set.all()

            for result in results:
                people.add(result.person)

            return Response(
                data=PersonSerializer(people, many=True).data, status=status.HTTP_200_OK
            )
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class GetClinicMbtiTests(APIView):
    def get(self, request, id, format=None):
        try:
            mbtis = []
            results = Clinic.objects.get(id=id).result_set.all()

            for result in results:
                if result.test == "MB" and result.testTaken:
                    mbtis.append(result.mbti)

            return Response(
                data=MbtiSerializer(mbtis, many=True).data, status=status.HTTP_200_OK
            )
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ClinicViews(viewsets.ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer
    filterset_class = ClinicFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class AddressViews(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    filterset_class = AddressFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class CellphoneViews(viewsets.ModelViewSet):
    queryset = Cellphone.objects.all()
    serializer_class = CellphoneSerializer
    filterset_class = CellphoneFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]
