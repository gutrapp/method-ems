from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from .models import Clinic, Address, Cellphone
from .filters import ClinicFilter, AddressFilter, CellphoneFilter
from .serializers import ClinicSerializer, AddressSerializer, CellphoneSerializer


class ClinicViews(viewsets.ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer
    filterset_class = ClinicFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']


class AddressViews(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    filterset_class = AddressFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']


class CellphoneViews(viewsets.ModelViewSet):
    queryset = Cellphone.objects.all()
    serializer_class = CellphoneSerializer
    filterset_class = CellphoneFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']