from bioinfapp.models import TestModelCorona
from rest_framework import viewsets, permissions
from .serializers import TestSerializer


# Test ViewSet
class TestViewSet(viewsets.ModelViewSet):
    queryset = TestModelCorona.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TestSerializer
