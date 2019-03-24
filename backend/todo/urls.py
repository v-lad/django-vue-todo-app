from django.urls import path, include
from .views import TodoViewSet, CategoryViewSet, LocalUserInfoViewSet
from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'todos', TodoViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'users', LocalUserInfoViewSet)

urlpatterns = router.urls
