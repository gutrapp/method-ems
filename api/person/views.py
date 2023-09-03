from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend

from .models import Person, Address, Cellphone 
from .filters import PersonFilter, AddressFilter, CellphoneFilter
from .serializers import PersonSerializer, AddressSerializer, CellphoneSerializer


class PersonViews(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    filterset_class = PersonFilter
    filter_backends = [DjangoFilterBackend]


class AddressViews(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    filterset_class = AddressFilter
    filter_backends = [DjangoFilterBackend]


class CellphoneViews(viewsets.ModelViewSet):
    queryset = Cellphone.objects.all()
    serializer_class = CellphoneSerializer
    filterset_class = CellphoneFilter
    filter_backends = [DjangoFilterBackend]