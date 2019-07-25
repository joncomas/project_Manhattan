from django.contrib import admin
from django.urls import path, include
from api import views, viewToken
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


urlpatterns = [
    path('users/<int:user_id>', views.UsersView.as_view(), name='id-users'),
    path('users/', views.UsersView.as_view(), name='all-users'),
    path('users/campaigns/<int:campaign_id>', views.CampaignView.as_view(), name='id-campaigns'),
    path('users/campaigns/', views.CampaignView.as_view(), name='all-campaigns'),
    path('token/', viewToken.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
