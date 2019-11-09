from django.contrib import admin
from .models import ClaimProperty, RealEstateProperty, OthersProperty

# Register your models here.
@admin.register(ClaimProperty)
class ClaimPropertyAdmin(admin.ModelAdmin):
    pass

@admin.register(RealEstateProperty)
class RealEstatePropertyAdmin(admin.ModelAdmin):
    pass

@admin.register(OthersProperty)
class OthersPropertyAdmin(admin.ModelAdmin):
    pass