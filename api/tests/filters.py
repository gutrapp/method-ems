from django_filters import rest_framework as filters

from .models import Mbti, Life, SelfKnowledge, LoveLanguage


class MbtiFilter(filters.FilterSet):
    first = filters.ChoiceFilter(choices=Mbti.PERSONALITIES)
    second = filters.ChoiceFilter(choices=Mbti.PERSONALITIES)
    third = filters.ChoiceFilter(choices=Mbti.PERSONALITIES)
    fourth = filters.ChoiceFilter(choices=Mbti.PERSONALITIES)
    firstScore = filters.NumberFilter()
    secondScore = filters.NumberFilter()
    thirdScore = filters.NumberFilter()
    fourthScore = filters.NumberFilter()

    class Meta:
        model = Mbti
        fields = [
            "first",
            "second",
            "third",
            "fourth",
            "firstScore",
            "secondScore",
            "thirdScore",
            "fourthScore",
        ]


class SelfKnowledgeFilter(filters.FilterSet):
    first = filters.ChoiceFilter(choices=SelfKnowledge.TRAITS)
    second = filters.ChoiceFilter(choices=SelfKnowledge.TRAITS)
    third = filters.ChoiceFilter(choices=SelfKnowledge.TRAITS)
    fourth = filters.ChoiceFilter(choices=SelfKnowledge.TRAITS)
    firstScore = filters.NumberFilter()
    secondScore = filters.NumberFilter()
    thirdScore = filters.NumberFilter()
    fourthScore = filters.NumberFilter()

    class Meta:
        model = SelfKnowledge
        fields = [
            "first",
            "second",
            "third",
            "fourth",
            "firstScore",
            "secondScore",
            "thirdScore",
            "fourthScore",
        ]


class LoveLanguageFilter(filters.FilterSet):
    first = filters.ChoiceFilter(choices=LoveLanguage.PREFERENCES)
    second = filters.ChoiceFilter(choices=LoveLanguage.PREFERENCES)
    third = filters.ChoiceFilter(choices=LoveLanguage.PREFERENCES)
    fourth = filters.ChoiceFilter(choices=LoveLanguage.PREFERENCES)
    fifth = filters.ChoiceFilter(choices=LoveLanguage.PREFERENCES)
    firstScore = filters.NumberFilter()
    secondScore = filters.NumberFilter()
    thirdScore = filters.NumberFilter()
    fourthScore = filters.NumberFilter()
    fifthScore = filters.NumberFilter()

    class Meta:
        model = LoveLanguage
        fields = [
            "first",
            "second",
            "third",
            "fourth",
            "fifth",
            "firstScore",
            "secondScore",
            "thirdScore",
            "fourthScore",
            "fifthScore",
        ]


class LifeFilter(filters.FilterSet):
    average = filters.NumberFilter()
    total = filters.NumberFilter()

    class Meta:
        model = Life
        fields = ["total", "average"]
