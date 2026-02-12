from django.db.models.signals import post_save
from django.dispatch import receiver

from api.models import ConvertRequest
from api.tasks import process_conv_req

@receiver(post_save, sender=ConvertRequest)
def convert_req_post_save(sender, instance, created, **kwargs):
    if not created:
        if instance.status == 'Q':
            instance.status = 'PE'
            instance.save()

            process_conv_req(instance.id)
