from rest_framework import serializers
from .models import Todo, Category, LocalUserInfo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'todo', 'created_at', 'deadline', 'category')


class CategorySerializer(serializers.ModelSerializer):
    todos = TodoSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'category_name', 'created_at', 'todos')


class LocalUserInfoSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = LocalUserInfo
        fields = ('user_id', 'categories')