from django_filters import rest_framework as filters

from .models import Admin


class AdminFilter(filters.FilterSet):
    first_name = filters.CharFilter(lookup_expr="icontains")
    last_name = filters.CharFilter(lookup_expr="icontains")
    email = filters.CharFilter(lookup_expr="icontains")
    type = filters.ChoiceFilter(choices=Admin.TYPE_CHOICES)
    role = filters.ChoiceFilter(choices=Admin.ROLE_CHOICES)

    class Meta:
        model = Admin
        fields = [
            "first_name",
            "last_name",
            "email",
            "type",
            "role",
        ]
