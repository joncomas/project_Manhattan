"""
All your application modules and serializers are going to be declared inside this file
"""
from rest_framework import serializers
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
"""
Define he Contact Entity into your applcation model
"""


class User(AbstractUser):
    rut = models.IntegerField(default='')


class Person(models.Model):
    fk_user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default='')
    rut_user = models.IntegerField(default='')
    birth_date = models.DateField(default=timezone.now)


class Campaign(models.Model):
    fk_user = models.ForeignKey(User, on_delete=models.CASCADE)
    name_camp = models.CharField(max_length=50, default='')
    search_target = models.CharField(max_length=50, default='')
    item_to_search = models.CharField(max_length=150, default='')
    start_date = models.DateField(default=timezone.now)
    ends_date = models.DateField(default=timezone.now)
    details = models.CharField(max_length=500, default='')


class TypeOfCampaing(models.Model):
    fk_campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default='')


class CampaignStatus(models.Model):
    fk_campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default='')


class Results(models.Model):
    fk_campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    results = models.CharField(max_length=500, default='')


"""
The ContactSerializer is where you will specify what properties
from the ever Contact should be inscuded in the JSON response
"""


class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.CharField()
    password = serializers.CharField()
    rut = serializers.CharField()
    #first_name = serializers.CharField(required=False, default='')
    #last_name = serializers.CharField(required=False, default='')

    class Meta:
        model = User
        extra_kwargs = {'password': {'write_only': True}}
        # there what you want to initial.
        fields = ('id', 'username', 'password', 'email', 'first_name', 'last_name', 'rut',)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            rut = validated_data['rut'],
            #first_name = validated_data['first_name'],
            #last_name = validated_data['last_name'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # what fields to include?
        fields = ('id', 'username', 'password')


class CampaignSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campaign
        # what fields to include?
        fields = ('id', 'fk_user', 'name_camp', 'search_target',
                  'item_to_search', 'start_date', 'ends_date', 'details')

class ResultsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Results
        # what fields to include?
        fields = ('id', 'fk_campaign', 'results')
