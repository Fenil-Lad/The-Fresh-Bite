from django.contrib import admin
from django.urls import path
from FreshBiteApp import views

urlpatterns = [
    path("", views.index, name='home'),
    path("login", views.SiteLogin, name='Login'),
    path("logout", views.SiteLogout, name='Logout'),
    path("student", views.student, name='student'),
    path("marketplace", views.marketplace, name='marketplace'),
    path("create_user", views.createUser, name='Create User from Command Line')
]
