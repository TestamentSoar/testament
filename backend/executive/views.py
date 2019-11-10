from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import Executive
from .serializer import ExecutiveSerializer

# Create your views here.
class ExecutiveViewSet(viewsets.ModelViewSet):
    queryset = Executive.objects.all()
    serializer_class = ExecutiveSerializer