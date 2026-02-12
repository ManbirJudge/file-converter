from django.urls import path

from .views import new_conv_req_view, conv_req_view

urlpatterns = [
    path('convert-request/new/', new_conv_req_view, name='new-conv-req'),
    path('convert-request/<int:conv_req_id>/', conv_req_view, name='conv-req')
]
