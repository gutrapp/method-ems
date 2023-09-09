from rest_framework import viewsets
from rest_framework.views import APIView
from django_filters.rest_framework.backends import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework import status
from rest_framework.response import Response

from .models import Result
from .filters import ResultFilter
from .serializers import ResultSerializer
from tests.serializers import LifeSerializer, LoveLanguageSerializer, SelfKnowledgeSerializer, MbtiSerializer


class ResultViews(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    filterset_class = ResultFilter
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    ordering_fields = "__all__"
    ordering = ["id"]


class GetUserResults(APIView):
    def get(self, request, format=None):
        tests = []

        try:
            user = request.user
            if user is not None:
                results = user.person.result_set.all()

                for result in results:
                    if result.testTaken:
                        if result.test == Result.MBTI:
                            tests.append(MbtiSerializer(result.mbti).data)
                        elif result.test == Result.LIFE:
                            tests.append(LifeSerializer(result.life).data)
                        elif result.test == Result.LOVE_LANGUAGE:
                            tests.append(LoveLanguageSerializer(result.love_language).data)
                        else:
                            tests.append(SelfKnowledgeSerializer(result.self_knowledge).data)

                return Response(data=tests, status=status.HTTP_200_OK)
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
