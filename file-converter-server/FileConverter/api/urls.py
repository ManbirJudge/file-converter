from django.urls import path

from .views import FileGenericAPIView, upload_file, ConvertRequestGenericAPIView

urlpatterns = [
    path('files', FileGenericAPIView.as_view()),
    path('files/<str:pk>', FileGenericAPIView.as_view()),

    path('upload-file', upload_file),

    path('convert-requests', ConvertRequestGenericAPIView.as_view()),
    path('convert-requests/<str:pk>', ConvertRequestGenericAPIView.as_view()),
    path('convert-requests/<str:req_pk>/result-files', FileGenericAPIView.as_view()),
]
