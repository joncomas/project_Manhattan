"""
All your application modules and serializers are going to be declared inside this file
"""
from rest_framework import serializers
from django.db import models
import datetime

"""
Define he Contact Entity into your applcation model
"""
class User(models.Model):
    first_name = models.CharField(max_length=50, default='')
    last_name = models.CharField(max_length=50, default='')
    phone_number = models.CharField(max_length=15, default='')
    email = models.CharField(max_length=150, default='')

class Person(models.Model):
    fk_user = models.ForeignKey(User, on_delete=models.CASCADE,)
    name = models.CharField(max_length=50, default='')
    rut_person = models.IntegerField(default='')
    birth_date = models.DateField(default=datetime.date.today)

class Campaign(models.Model):
    fk_user = models.ForeignKey(User, on_delete=models.CASCADE,)
    name_camp = models.CharField(max_length=50, default='')
    search_target = models.CharField(max_length=50, default='')
    item_to_search = models.CharField(max_length=150, default='')
    start_date = models.DateField(default=datetime.date.today)
    ends_date = models.DateField(default=datetime.date.today)
    details = models.CharField(max_length=500, default='')

class TypeOfCampaing(models.Model):
    fk_campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE,)
    name = models.CharField(max_length=50, default='')

class CampaignStatus(models.Model):
    fk_campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE,)
    name = models.CharField(max_length=50, default='')

class Results(models.Model):
    fk_campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE,)
    results = models.CharField(max_length=500, default='')

"""
The ContactSerializer is where you will specify what properties
from the ever Contact should be inscuded in the JSON response
"""
class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        # what fields to include?
        fields = ('first_name','last_name', 'phone_number', 'email')

class CampaignSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campaign
        # what fields to include?
        fields = ('name_camp', 'search_target', 'item_to_search', 'start_date', 'ends_date', 'details')
