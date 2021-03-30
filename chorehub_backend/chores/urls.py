from django.urls import path
from . import views

urlpatterns = [
    path('', views.ChoreListAPIView.as_view(), name='chore_list'),
    path('<int:id>/', views.ChoreRetrieveAPIView.as_view(), name='chore_detail'),
    path('create/', views.ChoreCreateAPIView.as_view(), name='chore_create'),
    path('update/<int:id>/', views.ChoreRetrieveUpdateAPIView.as_view(), name='chore_update'),
    path('delete/<int:id>/', views.ChoreDestroyAPIView.as_view(), name='chore_delete'),
]