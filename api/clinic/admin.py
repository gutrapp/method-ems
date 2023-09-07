from django.contrib import admin

from .models import Clinic, Address, Cellphone


admin.site.register(Clinic)
admin.site.register(Address)
admin.site.register(Cellphone)