from django_filters import rest_framework as filters

from .models import Result


class ResultFilter(filters.FilterSet):
    testTaken = filters.BooleanFilter()
    test = filters.ChoiceFilter(choices=Result.TESTS)
    key = filters.CharFilter()
    seen = filters.BooleanFilter()

    class Meta:
        model = Result
        fields = ['testTaken', 'test', 'key', 'seen']