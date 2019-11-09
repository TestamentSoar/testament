from rest_framework import serializers

from .models import Heir


class HeirSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heir
        fields = (
            'user',
            'address',
            'parmanent_address',
            'birthday',
            'relation',
            'job',
        )