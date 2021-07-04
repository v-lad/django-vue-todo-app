from django.db import models
import datetime
from django.utils import timezone

class Todo(models.Model):
    todo = models.CharField(max_length=300, db_index=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(default=timezone.now() + datetime.timedelta(hours=1))
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='todos')

    class Meta:
        ordering = ['-created_at']

    def __unicode__(self):
        return self.todo


class Category(models.Model):
    category_name = models.CharField(max_length=50, db_index=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # user = models.ForeignKey('LocalUserInfo', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created_at']


class LocalUserInfo(models.Model):
    user_id = models.CharField(max_length=300, db_index=True, unique=True, primary_key=True)