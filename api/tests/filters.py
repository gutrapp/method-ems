from django_filters import rest_framework as filters

from .models import Mbti, Life, SelfKnowledge, LoveLanguage


class MbtiFilter(filters.FilterSet):
    first = filters.ChoiceFilter(choiches=Mbti.PERSONALITIES)
    second = filters.ChoiceFilter(choiches=Mbti.PERSONALITIES)
    third = filters.ChoiceFilter(choiches=Mbti.PERSONALITIES)
    fourth = filters.ChoiceFilter(choiches=Mbti.PERSONALITIES)
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
    first = filters.ChoiceFilter(choiches=SelfKnowledge.TRAITS)
    second = filters.ChoiceFilter(choiches=SelfKnowledge.TRAITS)
    third = filters.ChoiceFilter(choiches=SelfKnowledge.TRAITS)
    fourth = filters.ChoiceFilter(choiches=SelfKnowledge.TRAITS)
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
    first = filters.ChoiceFilter(choiches=LoveLanguage.PREFERENCES)
    second = filters.ChoiceFilter(choiches=LoveLanguage.PREFERENCES)
    third = filters.ChoiceFilter(choiches=LoveLanguage.PREFERENCES)
    fourth = filters.ChoiceFilter(choiches=LoveLanguage.PREFERENCES)
    fifth = filters.ChoiceFilter(choiches=LoveLanguage.PREFERENCES)
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
