from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import *

class User(AbstractUser):
    username = None
    last_login = None
    userId = models.CharField(max_length=36)
    email = models.EmailField(unique=True)
    is_verified = models.BooleanField(default=True)
    last_login_time = models.DateTimeField(null=True, blank=True)
    last_logout_time = models.DateTimeField(null=True, blank=True)
    is_student = models.BooleanField()
    is_marketplace = models.BooleanField()

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['userId', 'is_student', 'is_marketplace']