from rest_framework import routers
from .views import ExecutiveViewSet


router = routers.DefaultRouter()
router.register(r'executive', ExecutiveViewSet)