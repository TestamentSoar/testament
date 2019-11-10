from rest_framework import serializers

from .models import CreditProperty, RealEstateProperty, OthersProperty


class CreditPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditProperty
        fields = (
            'user',
            'heir',
            'bank',
            'branch',
            'account_type',
            'account_number',
            'price',
        )

class RealEstatePropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = RealEstateProperty
        fields = (
            'user',
            'heir',
            'address',
            'floor_count',
            'floor_plan',
            'price',
        )

class OthersPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = OthersProperty
        fields = (
            'user',
            'heir',
            'item',
            'price',
        )