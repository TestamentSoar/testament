from rest_framework import serializers

from .models import Executive


class ExecutiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Executive
        fields = (
            'user',
            'name',
            'address',
            'birthday',
            'office',
        )