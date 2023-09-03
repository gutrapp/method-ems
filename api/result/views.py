from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend

from .models import Result
from .filters import ResultFilter
from .serializers import ResultSerializer


class ResultViews(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    filterset_class = ResultFilter
    filter_backends = [DjangoFilterBackend]
