from django_filters import rest_framework as filters

from .models import Clinic


class ClinicFilter(filters.FilterSet):
    nome = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Clinic
        fields = ['nome']