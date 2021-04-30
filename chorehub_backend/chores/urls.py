from django.urls import path
from . import views

urlpatterns = [
    path('chores/', views.ChoreListAPIView.as_view(), name='chore_list'),
    path('chores/<int:id>/', views.ChoreRetrieveAPIView.as_view(), name='chore_detail'),
    path('chores/create/', views.ChoreCreateAPIView.as_view(), name='chore_create'),
    path('chores/update/<int:id>/', views.ChoreRetrieveUpdateAPIView.as_view(), name='chore_update'),
    path('chores/delete/<int:id>/', views.ChoreDestroyAPIView.as_view(), name='chore_delete'),
    path('houses/', views.HouseListAPIView.as_view(), name='house_list'),
    path('houses/<int:id>/', views.HouseRetrieveAPIView.as_view(), name='house_detail'),
    path('houses/create/', views.HouseCreateAPIView.as_view(), name='house_create'),
    path('houses/update/<int:id>/', views.HouseRetrieveUpdateAPIView.as_view(), name='house_update'),
    path('houses/delete/<int:id>/', views.HouseDestroyAPIView.as_view(), name='house_delete'),
]