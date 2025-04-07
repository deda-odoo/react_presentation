from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, register_user

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='article')

urlpatterns = [
    path('register/', register_user),
    path('', include(router.urls)),
]
