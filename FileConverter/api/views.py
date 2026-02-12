import json

from django.http import JsonResponse 

from api.models import File, ConvertRequest
from api.serializers import FileSerializer, ConvertRequestSerializer


def new_conv_req_view(req):
    if req.method != 'POST':
        return JsonResponse({
            'err': f'{req.method} method not allowed.'
        }, status_code=400)

    if len(req.FILES.getlist('files[]')) == 0:
        return JsonResponse({
            'err': 'No files provided.'
        }, status_code=400)

    conv_req = ConvertRequest.objects.create(
        type='IMG',
        target_fmt=req.POST.get('target-fmt')
    )

    for f in req.FILES.getlist('files[]'):
        file_obj = File.objects.create(
            name=f.name,
            file=f,
            request=conv_req,
            use='C',
            type=f.content_type,
            size=f.size
        )
    
    conv_req.status = 'Q'
    conv_req.save()

    return JsonResponse({
        'data': { 'conv_req_id': conv_req.id }
    })

def conv_req_view(req, conv_req_id):
    conv_req = ConvertRequest.objects.filter(pk=conv_req_id).first()

    if conv_req is None:
        return JsonReponse({
            'err': 'Convert request not found.'
        }, status_code=404)

    return JsonResponse({
        'data': {
            'conv_req': ConvertRequestSerializer(conv_req).data
        }
    })
