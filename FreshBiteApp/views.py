from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from .models import User
from django.contrib import messages


def SiteLogin(request):
    
    if request.user.is_authenticated:
        if request.user.is_superuser == True:
            return redirect('admin/')
        elif request.user.is_student == True and request.user.is_merchant == False:
            return redirect('student')
        elif request.user.is_student == False and request.user.is_merchant == True:
            return redirect('merchant')
        else:
            return render(request, 'login.html')

    elif request.method == 'POST':
        try:
            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(email=email, password=password)
        except Exception as e:
            messages.error(request, e)
            return redirect('login')

        if user is not None:
            print("4")
            login(request, user)
            if request.user.is_superuser == True:
                return redirect('admin/')
            elif user.is_student == True and user.is_merchant == False:
                return redirect('student')
            elif user.is_student == False and user.is_merchant == True:
                return redirect('merchant')
            else:
                messages.error(request, 'Unknown user, contact administrator.')
                return render(request, 'login.html')
        
        else:
            messages.error(request, 'User not found.')
            return redirect('login')
    else:
        return render(request, 'login.html')


def index(request):
    return HttpResponse("Welcome to homepage.")


def student(request):

    if request.user.is_authenticated:
        if request.user.is_superuser == True:
            return redirect('admin/')
        elif request.user.is_student == True and request.user.is_merchant == False:
            return render(request, 'student.html')
        elif request.user.is_student == False and request.user.is_merchant == True:
            return redirect('merchant')
    else:
        messages.error(request, 'You need to Login First.')
        return render(request, 'login.html')


def merchant(request):

    if request.user.is_authenticated:
        if request.user.is_superuser == True:
            return redirect('admin/')
        elif request.user.is_student == True and request.user.is_merchant == False:
            return redirect('student')
        elif request.user.is_student == False and request.user.is_merchant == True:
            return render(request, 'merchant.html')
    else:
        messages.error(request, 'You need to Login First.')
        return render(request, 'login.html')


def SiteLogout(request):
    
    if request.user.is_authenticated:
        logout(request)
        messages.success(request, 'Successfully Logged Out')
        return render(request, 'login.html')
    else:
        messages.error(request, 'You need to Login First.')
        return render(request, 'login.html')


def createUser(request):

    email = input("Email: ")
    userId = input("user-Id: ")
    password = input("password: ")
    student = bool(input("is_student: "))
    merchant = bool(input("is_merchant: "))
    
    user = User.objects.create_user(email, password, userId=userId, is_student=student, is_merchant=merchant, is_verified=True)
    user.first_name = input("First Name: ")
    user.last_name = input("Last Name: ")
    user.save()

    return render(request, 'temptest.html')