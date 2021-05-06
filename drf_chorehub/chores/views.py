from django.shortcuts import render
from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from .serializers import ChoreListSerializer, ChoreDetailSerializer, UserSerializer
from .models import Chore
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from .permissions import IsOwnerOrReadOnly

class UserCreateView(generics.CreateAPIView):
	model = get_user_model()
	parser_classes = [MultiPartParser]
	serializer_class = UserSerializer
	permission_classes = [permissions.AllowAny]

class ChoreListAPIView(generics.ListAPIView):
    queryset = Chore.objects.all()
    serializer_class = ChoreListSerializer

class ChoreRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()
    serializer_class = ChoreDetailSerializer

class ChoreCreateAPIView(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)
    queryset = Chore.objects.all()
    serializer_class = ChoreDetailSerializer

class ChoreRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()
    serializer_class = ChoreDetailSerializer
    parser_classes = (MultiPartParser, FormParser)

class ChoreDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Chore.objects.all()
