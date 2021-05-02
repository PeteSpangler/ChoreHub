from django.urls import path
from . import views

urlpatterns = [
    path('chores/', views.ChoreListAPIView.as_view(), name='chore_list'),
    path('chores/<int:id>/', views.ChoreRetrieveAPIView.as_view(), name='chore_detail'),
    path('chores/create/', views.ChoreCreateAPIView.as_view(), name='chore_create'),
    path('chores/update/<int:id>/', views.ChoreRetrieveUpdateAPIView.as_view(), name='chore_update'),
    path('chores/delete/<int:id>/', views.ChoreDestroyAPIView.as_view(), name='chore_delete'),
]