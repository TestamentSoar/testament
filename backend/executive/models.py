from django.db import models
from user.models import User

# Create your models here.
class Executive(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    birthday = models.DateField()
    office = models.CharField(max_length=200, blank=True, null=True)