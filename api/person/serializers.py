from rest_framework import serializers

from .models import Person
from clinic.serializers import AddressSerializer, CellphoneSerializer


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"
