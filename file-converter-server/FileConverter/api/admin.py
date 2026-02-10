from django.contrib import admin
from .models import File, ConvertRequest


# Register your models here.
admin.site.register(File)
admin.site.register(ConvertRequest)
