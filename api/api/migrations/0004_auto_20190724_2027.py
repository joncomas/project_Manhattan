# Generated by Django 2.2.3 on 2019-07-24 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190724_2027'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='rut_person',
            field=models.IntegerField(default=''),
        ),
    ]