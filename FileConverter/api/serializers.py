from rest_framework.serializers import ModelSerializer
from .models import File, ConvertRequest


class FileSerializer(ModelSerializer):
    class Meta:
        model = File
        fields = '__all__'


class ConvertRequestSerializer(ModelSerializer):
    files = FileSerializer(many=True, read_only=True)
    class Meta:
        model = ConvertRequest
        fields = '__all__'
