from rest_framework import routers
from .api import TestViewSet


router = routers.DefaultRouter()
router.register('api/bioinfapp', TestViewSet, 'bioinfapp')

urlpatterns = router.urls