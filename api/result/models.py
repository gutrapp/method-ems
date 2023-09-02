from django.db import models

from person.models import Person


class Result(models.Model):
    MBTI = 'MB'
    SELF_KNOWLEDGE = 'SK'
    LOVE_LANGUAGE = 'LO'
    LIFE = 'LI'
    TESTS = [
        (MBTI, 'MBTI'),
        (SELF_KNOWLEDGE, 'Auto Conhecimento'),
        (LOVE_LANGUAGE, 'Linguagem Amorosa'),
        (LIFE, 'Vida')
    ]

    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    testTaken = models.BooleanField()
    test = models.CharField(choices=TESTS, max_length=2)
    key = models.CharField(max_length=50, unique=True)
    seen = models.BooleanField(default=False)
