from rest_framework import mixins
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import File, ConvertRequest
from .serializers import FileSerializer, ConvertRequestSerializer


# Create your views here.
class FileGenericAPIView(GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    serializer_class = ConvertRequestSerializer
    queryset = ConvertRequest.objects.all()

    lookup_field = 'pk'

    def get(self, request, pk=None, req_pk=None):
        if pk and not req_pk:
            return self.retrieve(request, pk)

        if not pk and req_pk:
            req = ConvertRequest.objects.get(pk=req_pk)

            return self.retrieve_req_files(request, req)

        else:
            return self.list(request)

    def retrieve_req_files(self, request, files_req):
        files = File.objects.filter(request=files_req, use="R")
        serializer = FileSerializer(files, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def upload_file(request):
    if request.method == "POST":
        name = request.POST['name']
        file = request.FILES['file']
        request_id = request.POST['request_id']
        use = request.POST['use']
        type_ = request.POST['type']
        file_type = request.POST['file_type']

        convert_request = ConvertRequest.objects.get(id=request_id)

        if not convert_request or convert_request is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            file = File.objects.create(name=name, file=file, request=convert_request, use=use, type=type_, file_type=file_type)
            serializer = FileSerializer(file)

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        except Exception as e:
            print(f'Error while creating file objects:\n{e}')
            return Response(status=status.HTTP_400_BAD_REQUEST)

    return Response(status=status.HTTP_400_BAD_REQUEST)


class ConvertRequestGenericAPIView(GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                                   mixins.CreateModelMixin, mixins.UpdateModelMixin):
    serializer_class = ConvertRequestSerializer
    queryset = ConvertRequest.objects.all()

    lookup_field = 'pk'

    def get(self, request, pk=None):
        if pk:
            return self.retrieve(request, pk)
        else:
            return self.list(request)

    def post(self, request):
        return self.create(request)

    def put(self, request, pk=None):
        return self.update(request, pk)
