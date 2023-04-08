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
    is_merchant = models.BooleanField()

    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['userId', 'is_student', 'is_merchant']

class productDetail(models.Model):
    productId = models.CharField(max_length=36, primary_key=True)
    productCategoryId = models.CharField(max_length=36)
    productBy = models.CharField(max_length=36)
    productPrice = models.IntegerField()
    productName = models.CharField(max_length=48)
    productDesc = models.TextField()
    productVeg = models.BooleanField()


class categoryDetail(models.Model):
    categoryId = models.CharField(max_length=36, primary_key=True)
    categoryTitle = models.CharField(max_length=18)
    categoryBy = models.CharField(max_length=36)

class cartDetail(models.Model):
    orderId = models.CharField(max_length=36)
    productId = models.CharField(max_length=36)
    productCategoryId = models.CharField(max_length=36)
    productQuantity = models.IntegerField()
    productPrice = models.IntegerField()