from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(User)
admin.site.register(productDetail)
admin.site.register(categoryDetail)
admin.site.register(cartDetail)
admin.site.register(orderDetail)