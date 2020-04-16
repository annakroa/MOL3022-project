from rest_framework import serializers
from bioinfapp.models import TestModelCorona

# Lead Serializer


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestModelCorona
        fields = '__all__'
