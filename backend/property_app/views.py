from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import CreditProperty, RealEstateProperty, OthersProperty
from .serializer import CreditPropertySerializer, RealEstatePropertySerializer, OthersPropertySerializer

# Create your views here.
class CreditPropertyViewSet(viewsets.ModelViewSet):
    queryset = CreditProperty.objects.all()
    serializer_class = CreditPropertySerializer

class RealEstatePropertyViewSet(viewsets.ModelViewSet):
    queryset = RealEstateProperty.objects.all()
    serializer_class = RealEstatePropertySerializer

class OthersPropertyViewSet(viewsets.ModelViewSet):
    queryset = OthersProperty.objects.all()
    serializer_class = OthersPropertySerializer