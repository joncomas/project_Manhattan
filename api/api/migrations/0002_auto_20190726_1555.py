# Generated by Django 2.2.3 on 2019-07-26 15:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='ends_date',
            field=models.DateField(default=''),
        ),
        migrations.AlterField(
            model_name='campaign',
            name='fk_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='campaign',
            name='start_date',
            field=models.DateField(default=''),
        ),
    ]
