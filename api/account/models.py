from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import AdminManager
from clinic.models import Clinic


class Admin(AbstractBaseUser, PermissionsMixin):
    GLOBAL = "GL"
    CLINIC = "CL"
    TYPE_CHOICES = [
        (GLOBAL, "Global"),
        (CLINIC, "Clínica"),
    ]

    ADMIN = "AD"
    OPERATOR = "OP"
    ROLE_CHOICES = [
        (ADMIN, "Administrador"),
        (OPERATOR, "Operador"),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=255)
    type = models.CharField(max_length=2, choices=TYPE_CHOICES)
    role = models.CharField(max_length=2, choices=ROLE_CHOICES)
    clinic = models.ManyToManyField(Clinic)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = AdminManager()

    USERNAME_FIELD = 'email'
    
    