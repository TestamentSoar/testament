from rest_framework import routers
from .views import ClaimPropertyViewSet, RealEstatePropertyViewSet, OthersPropertyViewSet


router = routers.DefaultRouter()
router.register(r'claim_prop', ClaimPropertyViewSet)
router.register(r'real_estate-prop', RealEstatePropertyViewSet)
router.register(r'others_prop', OthersPropertyViewSet)