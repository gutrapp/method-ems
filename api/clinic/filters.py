from django_filters import rest_framework as filters

from .models import Clinic, Address, Cellphone


class ClinicFilter(filters.FilterSet):
    nome = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Clinic
        fields = ['nome']


class AddressFilter(filters.FilterSet):
    cep = filters.CharFilter(lookup_expr='icontains')
    number = filters.NumberFilter()
    street = filters.CharFilter(lookup_expr='icontains')
    neighboorhood = filters.CharFilter(lookup_expr='icontains')
    city = filters.CharFilter(lookup_expr='icontains')
    state = filters.ChoiceFilter(choices=Address.STATE_CHOICES)
    region = filters.ChoiceFilter(choices=Address.REGION_CHOICES)

    class Meta:
        model = Address
        fields = [    
            "cep",
            "number",
            "street",
            "neighboorhood",
            "city",
            "state",
            "region"
        ]

class CellphoneFilter(filters.FilterSet):
    ddd = filters.CharFilter(lookup_expr='icontains')
    telefone = filters.CharFilter(lookup_expr='icontains')
    type = filters.ChoiceFilter(choices=Cellphone.TYPE_CHOICES)

    class Meta:
        model = Cellphone
        fields = [    
            "ddd",
            "telefone",
            "type"
        ]