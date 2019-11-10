from rest_framework import routers
from .views import CreditPropertyViewSet, RealEstatePropertyViewSet, OthersPropertyViewSet


router = routers.DefaultRouter()
router.register(r'credit_prop',CreditPropertyViewSet)
router.register(r'real_estate-prop', RealEstatePropertyViewSet)
router.register(r'others_prop', OthersPropertyViewSet)