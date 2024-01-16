from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.conf import settings
import requests
from datetime import datetime, timedelta

@api_view(['GET'])
def get_top_youtube_videos(request):
    number_param = request.GET.get('number')
    youtube_api_key = settings.DJANGO_YOUTUBE_API_KEY


    yesterday = datetime.now() - timedelta(1)
    yesterday_str = yesterday.strftime('%Y-%m-%dT%H:%M:%SZ')

    api_url = 'https://www.googleapis.com/youtube/v3/videos'
    params = {
        'part': 'snippet,contentDetails,statistics',
        'chart': 'mostPopular',
        'regionCode': 'US', 
        'videoCategoryId': '0',
        'maxResults': int(number_param),
        'publishedAfter': yesterday_str,
        'key': youtube_api_key,
    }

    response = requests.get(api_url, params=params)

    if response.status_code == 200:
        videos = response.json().get('items', [])
        return JsonResponse({'videos': videos})
    else:
        return JsonResponse({'error': 'Failed to fetch YouTube videos'}, status=response.status_code)
