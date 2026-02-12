from huey.contrib.djhuey import task
from PIL import Image
from io import BytesIO
from django.core.files.base import ContentFile

from api.models import ConvertRequest, File

@task()
def process_conv_req(conv_req_id):
    try:
        conv_req = ConvertRequest.objects.get(id=conv_req_id)

        conv_req.status = 'P'
        conv_req.save()

        print(list(conv_req.files.all()))

        if conv_req.type == 'IMG':
            for f in conv_req.files.filter(use='C'):
                print(f.name)

                f.file.open('rb')
                img = Image.open(f.file)
                img.load()

                buf = BytesIO()
                img.save(buf, format=conv_req.target_fmt)
                buf.seek(0)

                f.file.close()
                
                new_f_name = f'{f.name}.{conv_req.target_fmt}'
                new_f = File.objects.create(
                    name=new_f_name,
                    request=conv_req,
                    use='R',
                    type=f'image/{conv_req.target_fmt}',
                    size=buf.getbuffer().nbytes
                )
                new_f.file.save(
                    new_f_name,
                    ContentFile(buf.getvalue()),
                    save=False
                )
                new_f.save()
        else:
            print('FUUUU')

        conv_req.status = 'C'
        conv_req.save()

    except ConvertRequest.DoesNotExist:
        pass
