from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model
from .serializers import ChoreListSerializer, HouseDetailSerializer, ChoreDetailSerializer, UserSerializer
from .models import Chore, House, Image
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework import permissions

class UserCreateView(generics.CreateAPIView):
	model = get_user_model()
	parser_classes = [MultiPartParser]
	permission_classes = [permissions.AllowAny]
	serializer_class = UserSerializer

class ChoreListAPIView(generics.ListAPIView):
    queryset = Chore.objects.all()
    serializer_class = ChoreListSerializer

class ChoreRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()
    serializer_class = ChoreDetailSerializer

class ChoreCreateAPIView(generics.CreateAPIView):
    parser_classes = [MultiPartParser]
    queryset = Chore.objects.all()
    serializer_class = ChoreDetailSerializer

class ChoreRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()
    serializer_class = ChoreDetailSerializer

class ChoreDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()

class HouseListAPIView(generics.ListAPIView):
    queryset = House.objects.all()
    serializer_class = HouseDetailSerializer

class HouseRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()
    serializer_class = HouseDetailSerializer

class HouseCreateAPIView(generics.CreateAPIView):
    parser_classes = [MultiPartParser]
    queryset = House.objects.all()
    serializer_class = HouseDetailSerializer

class HouseRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = House.objects.all()
    serializer_class = HouseDetailSerializer

class HouseDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = House.objects.all()