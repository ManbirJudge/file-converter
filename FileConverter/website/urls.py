from django.urls import path

from website.views import home_view, convert_imgs_view, convert_req_view

urlpatterns = [
    path('', home_view, name='home'),
    path('images/', convert_imgs_view, name='convert-images'),
    path('convert-request/<int:conv_req_id>/', convert_req_view, name='convert-request')
]
