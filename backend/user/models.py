from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    # username = models.CharField(max_length=200, blank=True)
    address = models.CharField(max_length=200)
    parmanent_address = models.CharField(max_length=200)
    birthday = models.DateField()