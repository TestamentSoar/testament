"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view
from user.urls import router as user_router
from heir.urls import router as heir_router
from property_app.urls import router as property_router
from executive.urls import router as executive_router

schema_view = get_swagger_view(title='API Lists')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(user_router.urls)),
    path('api/v1/', include(heir_router.urls)),
    path('api/v1/', include(property_router.urls)),
    path('api/v1/', include(executive_router.urls)),
    path('api/v1/document', schema_view), 
]
