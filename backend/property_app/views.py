from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import ClaimProperty, RealEstateProperty, OthersProperty
from .serializer import ClaimPropertySerializer, RealEstatePropertySerializer, OthersPropertySerializer

# Create your views here.
class ClaimPropertyViewSet(viewsets.ModelViewSet):
    queryset = ClaimProperty.objects.all()
    serializer_class = ClaimPropertySerializer

class RealEstatePropertyViewSet(viewsets.ModelViewSet):
    queryset = RealEstateProperty.objects.all()
    serializer_class = RealEstatePropertySerializer

class OthersPropertyViewSet(viewsets.ModelViewSet):
    queryset = OthersProperty.objects.all()
    serializer_class = OthersPropertySerializer