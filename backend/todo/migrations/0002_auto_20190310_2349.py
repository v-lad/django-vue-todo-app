# Generated by Django 2.1.7 on 2019-03-10 23:49

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='deadline',
            field=models.DateTimeField(default=datetime.datetime(2019, 3, 11, 0, 49, 2, 169339, tzinfo=utc)),
        ),
    ]
