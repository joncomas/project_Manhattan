from django.apps import AppConfig
from rest_framework.permissions import IsAuthenticated


class ApiConfig(AppConfig):
    permission_classes = (IsAuthenticated,)

    name = 'api'


