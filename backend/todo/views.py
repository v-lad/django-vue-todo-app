from django.shortcuts import render
from rest_framework import viewsets
from .models import Todo, Category, LocalUserInfo
from .serializers import TodoSerializer, CategorySerializer, LocalUserInfoSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class LocalUserInfoViewSet(viewsets.ModelViewSet):
    queryset = LocalUserInfo.objects.all()
    serializer_class = LocalUserInfoSerializer