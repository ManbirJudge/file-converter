from django.shortcuts import render
from django.http import HttpResponse

from api.models import ConvertRequest
from api.serializers import ConvertRequestSerializer

def home_view(req):
    return render(req, 'index.html')

def convert_imgs_view(req):
    return render(req, 'convert.html', {
        'converter': {
            'title': 'Convert Images',
            'fmts': ['PNG', 'JPEG', 'WebP', 'BMP', 'GIF', 'TIFF', 'QOIF'],
            'accepted_mimetypes': ','.join([
                'image/png',
                'image/jpeg',
                'image/webp',
                'image/bmp',
                'image/gif',
                'image/tiff',
                'image/qoi'
            ]),
            'type': 'IMG'
        }
    })

def convert_req_view(req, conv_req_id):
    conv_req = ConvertRequest.objects.filter(pk=conv_req_id).first()

    return render(req, 'convert-request.html', {
        'conv_req': ConvertRequestSerializer(conv_req).data if conv_req is not None else { 'err': 'todo - find a bette method' }
    })

