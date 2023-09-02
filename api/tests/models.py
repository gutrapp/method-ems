from django.db import models

from result.models import Result


class Life(models.Model):
    average = models.DecimalField(max_digits=5, decimal_places=2)
    total = models.IntegerField
    result = models.OneToOneField(Result, on_delete=models.CASCADE)


class SelfKnowledge(models.Model):
    VISUAL = 'VI'
    KINESTHETIC = 'KI'
    AUDITORY = 'AU'
    DIGITAL = 'DI'
    TRAITS = [
        (VISUAL, 'Visual'),
        (KINESTHETIC, 'Cinestésico'),
        (AUDITORY, 'Auditório'),
        (DIGITAL, 'Digital')
    ]

    first = models.CharField(choices=TRAITS, max_length=2)
    second = models.CharField(choices=TRAITS, max_length=2)
    third = models.CharField(choices=TRAITS, max_length=2)
    fourth = models.CharField(choices=TRAITS, max_length=2)
    firstScore = models.DecimalField(max_digits=5, decimal_places=2)
    secondScore = models.DecimalField(max_digits=5, decimal_places=2)
    thirdScore = models.DecimalField(max_digits=5, decimal_places=2)
    fourthScore = models.DecimalField(max_digits=5, decimal_places=2)
    result = models.OneToOneField(Result, on_delete=models.CASCADE)


class LoveLanguage(models.Model):
    AFIRMATION = 'AF'
    SERVICE = 'SE'
    PRESENTS = 'PE'
    TIME = 'TI'
    TOUCH = 'TO'
    PREFERENCES = [
        (AFIRMATION, 'Afirmação'),
        (SERVICE, 'Serviço'),
        (PRESENTS, 'Presentes'),
        (TIME, 'Tempo'),
        (TOUCH, 'Toque')
    ]

    first = models.CharField(choices=PREFERENCES, max_length=2)
    second = models.CharField(choices=PREFERENCES, max_length=2)
    third = models.CharField(choices=PREFERENCES, max_length=2)
    fourth = models.CharField(choices=PREFERENCES, max_length=2)
    fifth = models.CharField(choices=PREFERENCES, max_length=2)
    firstScore = models.DecimalField(max_digits=5, decimal_places=2)
    secondScore = models.DecimalField(max_digits=5, decimal_places=2)
    thirdScore = models.DecimalField(max_digits=5, decimal_places=2)
    fourthScore = models.DecimalField(max_digits=5, decimal_places=2)
    fifthScore = models.DecimalField(max_digits=5, decimal_places=2)
    result = models.OneToOneField(Result, on_delete=models.CASCADE)

class Mbti(models.Model):
    AIR = 'AR'
    EARTH = 'EA'
    FIRE = 'FI'
    WATER = 'WA'
    PERSONALITIES = [
        (AIR, 'Ar'),
        (EARTH, 'Terra'),
        (FIRE, 'Fogo'),
        (WATER, 'Água')
    ]

    first = models.CharField(choices=PERSONALITIES, max_length=2)
    second = models.CharField(choices=PERSONALITIES, max_length=2)
    third = models.CharField(choices=PERSONALITIES, max_length=2)
    fourth = models.CharField(choices=PERSONALITIES, max_length=2)
    firstScore = models.DecimalField(max_digits=5, decimal_places=2)
    secondScore = models.DecimalField(max_digits=5, decimal_places=2)
    thirdScore = models.DecimalField(max_digits=5, decimal_places=2)
    fourthScore = models.DecimalField(max_digits=5, decimal_places=2)
    result = models.OneToOneField(Result, on_delete=models.CASCADE)
