from django.contrib import admin
from api.models import User
from django.contrib.auth.admin import UserAdmin

# Register your models into de django admin here.
class UserAdmin(UserAdmin):
   model = User
   fieldsets = UserAdmin.fieldsets + (
           (None, {'fields': ('rut',)}),
   )
admin.site.register(User, UserAdmin)
