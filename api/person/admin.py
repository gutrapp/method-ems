from django.contrib import admin

from .models import Person, Address, Cellphone


admin.site.register(Person)
admin.site.register(Address)
admin.site.register(Cellphone)