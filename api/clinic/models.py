from django.db import models

from person.models import Address, Cellphone


class Clinic(models.Model):
    nome = models.CharField(max_length=50)
    address = models.OneToOneField(Address, on_delete=models.SET_NULL, null=True)
    cellphone = models.OneToOneField(Cellphone, on_delete=models.SET_NULL, null=True)