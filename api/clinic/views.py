from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend

from .models import Clinic
from .filters import ClinicFilter
from .serializers import ClinicSerializer


class ClinicViews(viewsets.ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer
    filterset_class = ClinicFilter
    filter_backends = [DjangoFilterBackend]
