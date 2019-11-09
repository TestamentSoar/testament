from rest_framework import routers
from .views import HeirViewSet


router = routers.DefaultRouter()
router.register(r'heir', HeirViewSet)