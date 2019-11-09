from django.db import models
from user.models import User

# Create your models here.
class Heir(models.Model):
    
    RELATION_SET = (
        (0, 'spouse'),
        (1, 'child'),
        (2, 'parent'),
        (3, 'brother or sister'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=200)
    parmanent_address = models.CharField(max_length=200)
    birthday = models.DateField()
    relation = models.CharField(max_length=200, choices=RELATION_SET)
    job = models.CharField(max_length=200, blank=True, null=True)