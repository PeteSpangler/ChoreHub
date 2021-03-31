from django.urls import path
from . import views

urlpatterns = [
    path('chores/', views.ChoreListAPIView.as_view(), name='chore_list'),
    path('chores/<int:id>/', views.ChoreRetrieveAPIView.as_view(), name='chore_detail'),
    path('create/chores/', views.ChoreCreateAPIView.as_view(), name='chore_create'),
    path('update/chores/<int:id>/', views.ChoreRetrieveUpdateAPIView.as_view(), name='chore_update'),
    path('delete/chores/<int:id>/', views.ChoreDestroyAPIView.as_view(), name='chore_delete'),
    path('houses/', views.HouseListAPIView.as_view(), name='house_list'),
    path('houses/<int:id>/', views.HouseRetrieveAPIView.as_view(), name='house_detail'),
    path('create/houses/', views.HouseCreateAPIView.as_view(), name='house_create'),
    path('update/house/<int:id>/', views.HouseRetrieveUpdateAPIView.as_view(), name='house_update'),
    path('delete/house/<int:id>/', views.HouseDestroyAPIView.as_view(), name='house_delete'),
]