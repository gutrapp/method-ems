from rest_framework import viewsets
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter

from .models import Life, Mbti, SelfKnowledge, LoveLanguage 
from .filters import LifeFilter, MbtiFilter, LoveLanguageFilter, SelfKnowledgeFilter
from .serializers import LifeSerializer, MbtiSerializer, LoveLanguageSerializer, SelfKnowledgeSerializer


class LifeViews(viewsets.ModelViewSet):
    queryset = Life.objects.all()
    serializer_class = LifeSerializer
    filterset_class = LifeFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']



class MbtiViews(viewsets.ModelViewSet):
    queryset = Mbti.objects.all()
    serializer_class = MbtiSerializer
    filterset_class = MbtiFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']



class LoveLanguageViews(viewsets.ModelViewSet):
    queryset = LoveLanguage.objects.all()
    serializer_class = LoveLanguageSerializer
    filterset_class = LoveLanguageFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']



class SelfKnowledgeViews(viewsets.ModelViewSet):
    queryset = SelfKnowledge.objects.all()
    serializer_class = SelfKnowledgeSerializer
    filterset_class = SelfKnowledgeFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = '__all__'
    ordering = ['id']
