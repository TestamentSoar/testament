from django.db import models
from user.models import User
from heir.models import Heir

# Create your models here.
class ClaimProperty(models.Model):
    ACCOUNT_SET = (
        (0, 'saving account'),
        (1, 'current account'),
        (2, 'fixed account'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    heir = models.ForeignKey(Heir, on_delete=models.PROTECT, null=True)
    bank = models.CharField(max_length=200)
    branch = models.CharField(max_length=200)
    account_type = models.CharField(max_length=200, choices=ACCOUNT_SET)
    account_number = models.IntegerField()
    price = models.IntegerField()

class RealEstateProperty(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    heir = models.ForeignKey(Heir, on_delete=models.PROTECT, null=True)
    address = models.CharField(max_length=200)
    floor_count = models.IntegerField()
    floor_plan = models.CharField(max_length=200)
    price = models.IntegerField()

class OthersProperty(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    heir = models.ForeignKey(Heir, on_delete=models.PROTECT, null=True)
    item = models.CharField(max_length=200)
    price = models.IntegerField()
