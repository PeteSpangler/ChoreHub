from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework.authtoken import views
from chores.views import UserCreateView
import django.contrib.auth.urls
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('chores.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('register/', UserCreateView.as_view(), name='create_user'),
 ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

