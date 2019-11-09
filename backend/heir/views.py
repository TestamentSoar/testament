from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import Heir
from .serializer import HeirSerializer

# Create your views here.
class HeirViewSet(viewsets.ModelViewSet):
    queryset = Heir.objects.all()
    serializer_class = HeirSerializer