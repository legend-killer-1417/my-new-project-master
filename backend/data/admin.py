from django.contrib import admin
# Register your models here.
from .models import Bills,Product,User
admin.site.register(Bills)
admin.site.register(Product)
admin.site.register(User)

