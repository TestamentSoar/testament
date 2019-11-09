from django.shortcuts import render
import django_filters
from rest_framework import viewsets, filters

from .models import User
from .serializer import UserSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer