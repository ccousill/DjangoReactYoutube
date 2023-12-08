from django.urls import path
from .views import get_top_youtube_videos

urlpatterns = [
    path('get_top_youtube_videos/', get_top_youtube_videos, name='get_top_youtube_videos'),
]
