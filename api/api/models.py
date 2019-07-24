"""
All your application modules and serializers are going to be declared inside this file
"""
from rest_framework import serializers
from django.db import models

"""
Define he Contact Entity into your applcation model
"""
class User(models.Model):
    first_name = models.CharField(max_length=50, default='')
    last_name = models.CharField(max_length=50, default='')
    phone_number = models.CharField(max_length=15, default='')
    email = models.CharField(max_length=150, default='')

class Person(models.Model):
    fk_user = models.ForeignKey(User)
    name = models.CharField(max_length=50, default='')
    rut_person = models.IntegerField(max_length=20, default='')
    birth_date = models.DateField(required=True)

class Campaign(models.Model):
    fk_user = models.ForeignKey(User)
    name_camp = models.CharField(max_length=50, default='')
    search_target = models.CharField(max_length=50, default='')
    item_to_search = models.CharField(max_length=150, default='')
    start_date = models.DateField(required=True)
    ends_date = models.DateField(required=True)
    details = models.CharField(max_length=500, default='')

class Type_of_campaing(models.Model):
    name = models.CharField(max_length=50, default='')

class Campaign_status(models.model):
    name = models.CharField(max_length=50, default='')

class Results(models.Model):
    fk_campaign = models.ForeignKey(Campaign)
    results = models.CharField(max_length=500, default='')

"""
The ContactSerializer is where you will specify what properties
from the ever Contact should be inscuded in the JSON response
"""
class ContactSerializer(serializers.ModelSerializer):


    class Meta:
        model = Contact
        # what fields to include?
        fields = ('first_name','last_name', 'phone_number', 'email')
