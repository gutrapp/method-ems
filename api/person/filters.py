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
