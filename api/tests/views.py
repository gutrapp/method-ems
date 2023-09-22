from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import Life, Mbti, SelfKnowledge, LoveLanguage
from .filters import LifeFilter, MbtiFilter, LoveLanguageFilter, SelfKnowledgeFilter
from .serializers import (
    LifeSerializer,
    MbtiSerializer,
    LoveLanguageSerializer,
    SelfKnowledgeSerializer,
)
from result.models import Result


class LifeViews(viewsets.ModelViewSet):
    queryset = Life.objects.all()
    serializer_class = LifeSerializer
    filterset_class = LifeFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class MbtiViews(viewsets.ModelViewSet):
    queryset = Mbti.objects.all()
    serializer_class = MbtiSerializer
    filterset_class = MbtiFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class LoveLanguageViews(viewsets.ModelViewSet):
    queryset = LoveLanguage.objects.all()
    serializer_class = LoveLanguageSerializer
    filterset_class = LoveLanguageFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class SelfKnowledgeViews(viewsets.ModelViewSet):
    queryset = SelfKnowledge.objects.all()
    serializer_class = SelfKnowledgeSerializer
    filterset_class = SelfKnowledgeFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class CreateMbtiResult(APIView):
    def post(self, request, id, format=None):
        try:
            serializer = MbtiSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()

                result = Result.objects.get(id=id)
                result.testTaken = True
                result.save()
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
