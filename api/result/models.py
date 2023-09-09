from datetime import datetime, timedelta
from django.db import models

from person.models import Person
from clinic.models import Clinic


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
    expired = models.BooleanField(default=False)
    testTaken = models.BooleanField(default=False)
    test = models.CharField(choices=TESTS, max_length=2)
    key = models.CharField(max_length=50, unique=True)
    seen = models.BooleanField(default=False)
    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    expires_at = models.DateField(default=datetime.now() + timedelta(days=30), null=True, blank=True)
