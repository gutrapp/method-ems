from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from .models import Person
from .filters import PersonFilter
from .serializers import PersonSerializer


class PersonViews(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    filterset_class = PersonFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = ['age']
