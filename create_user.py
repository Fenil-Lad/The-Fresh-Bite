from django.contrib.auth.models import User

email = input("Email: ")
userId = input("user-Id: ")
password = input("password: ")
student = bool(input("Student: "))
marketplace = bool(input("Marketplace: "))
fn = input("First Name: ")
ln = input("Last Name: ")

user = User.objects.create_user(email=email, userId=userId, password=password)
user.is_verified = True
user.is_student = student
user.is_marketplace = marketplace
user.first_name = fn
user.last_name = ln

user.save()