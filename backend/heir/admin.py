from django.contrib import admin
from .models import Heir

# Register your models here.
@admin.register(Heir)
class HeirAdmin(admin.ModelAdmin):
    pass