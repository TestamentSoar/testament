from django.contrib import admin
from .models import CreditProperty, RealEstateProperty, OthersProperty

# Register your models here.
@admin.register(CreditProperty)
class CreditPropertyAdmin(admin.ModelAdmin):
    pass

@admin.register(RealEstateProperty)
class RealEstatePropertyAdmin(admin.ModelAdmin):
    pass

@admin.register(OthersProperty)
class OthersPropertyAdmin(admin.ModelAdmin):
    pass