from django.db import models

from account.models import User
from clinic.models import Address, Cellphone


class Person(models.Model):
    MALE = "M"
    FEMALE = "F"
    SEX_CHOICES = [
        (MALE, "Masculino"),
        (FEMALE, "Feminino"),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cpf = models.CharField(max_length=12, unique=True)
    age = models.IntegerField()
    sex = models.CharField(max_length=2, choices=SEX_CHOICES)
    address = models.ManyToManyField(Address)
    cellphone = models.ManyToManyField(Cellphone)
