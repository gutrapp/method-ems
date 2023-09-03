from rest_framework import serializers

from .models import Life, LoveLanguage, Mbti, SelfKnowledge


class LifeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Life
        fields = "__all__"


class MbtiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mbti
        fields = "__all__"


class SelfKnowledgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SelfKnowledge
        fields = "__all__"


class LoveLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoveLanguage
        fields = "__all__"