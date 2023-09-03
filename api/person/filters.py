from django_filters import rest_framework as filters

from .models import Person, Address, Cellphone


class PersonFilter(filters.FilterSet):
    first_name = filters.CharFilter(lookup_expr="icontains")
    last_name = filters.CharFilter(lookup_expr="icontains")
    email = filters.CharFilter(lookup_expr="icontains")
    cpf = filters.CharFilter(lookup_expr="icontains")
    age = filters.NumberFilter()
    sex = filters.ChoiceFilter(choices=Person.SEX_CHOICES)

    class Meta:
        model = Person
        fields = ["first_name", "last_name", "email", "cpf", "age", "sex"]


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
        fields = []


class CellphoneFilter(filters.FilterSet):
    ddd = filters.CharFilter(lookup_expr='icontains')
    telefone = filters.CharFilter(lookup_expr='icontains')
    type = filters.ChoiceFilter(choices=Cellphone.TYPE_CHOICES)

    class Meta:
        model = Cellphone
        fields = []
