from rest_framework import serializers

from .models import Clinic, Address, Cellphone


class ClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = "__all__"


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = "__all__"


class CellphoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cellphone
        fields = "__all__"