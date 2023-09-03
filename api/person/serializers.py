from rest_framework import serializers

from .models import Person, Address, Cellphone


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class CellphoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cellphone
        fields = "__all__"