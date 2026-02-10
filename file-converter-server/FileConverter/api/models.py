from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from .conversion_functions import *

from threading import Thread


# Create your models here.
class ConvertRequest(models.Model):
    status_choices = (
        ('S', 'Setup'),
        ('PE', 'Pending'),
        ('P', 'Processing'),
        ('C', 'Completed')
    )

    type_choices = (
        ('IMG', 'Image'),
        ('VID', 'Video'),
        ('AUD', 'Audio')
    )

    name = models.CharField(max_length=100, null=False, blank=False)
    status = models.CharField(max_length=20, null=False, blank=False, default='S', choices=status_choices)
    type = models.CharField(max_length=20, null=False, blank=False, choices=type_choices)
    convert_to = models.CharField(max_length=20, null=False, blank=False)

    def __str__(self):
        return f'{self.name}'


class File(models.Model):
    use_choices = (
        ('C', 'Conversion'),
        ('R', 'Result')
    )

    content_type_choices = (
        ('IMG', 'Image'),
        ('VID', 'Video'),
        ('AUD', 'Audio')
    )
    name = models.CharField(max_length=100, null=False, blank=False)
    file = models.FileField(null=False, blank=False)
    request = models.ForeignKey(ConvertRequest, on_delete=models.CASCADE, null=False, blank=False)
    use = models.CharField(max_length=20, null=False, blank=False, default="C", choices=use_choices)
    content_type = models.CharField(max_length=20, null=False, blank=False, choices=content_type_choices)
    file_type = models.CharField(max_length=20, null=False, blank=False)
    file_size = models.IntegerField(null=True, blank=False)

    def __str__(self):
        return f'{self.name}'


@receiver(post_save, sender=ConvertRequest)
def convert_req_post_save(sender, instance, created, **kwargs):
    if not created:
        if instance.status == 'PE':
            instance.status = 'P'
            instance.save()

            if instance.type == 'IMG':
                files_to_convert = File.objects.filter(request=instance, use='C', type='IMG')

                for file in files_to_convert:
                    if instance.convert_to == 'bmp':
                        to_bmp_t = Thread(target=lambda: to_bmp(file, File))
                        to_bmp_t.start()

                    if instance.convert_to == 'gif':
                        to_gif_t = Thread(target=lambda: to_gif(file, File))
                        to_gif_t.start()

                    if instance.convert_to == 'ico':
                        to_ico_t = Thread(target=lambda: to_ico(file, File))
                        to_ico_t.start()

                    if instance.convert_to == 'jpg' or instance.convert_to == 'jpeg':
                        to_jpeg_t = Thread(target=lambda: to_jpeg(file, File))
                        to_jpeg_t.start()

                    if instance.convert_to == 'png':
                        to_png_t = Thread(target=lambda: to_png(file, File))
                        to_png_t.start()

                    if instance.convert_to == 'tiff':
                        to_tiff_t = Thread(target=lambda: to_tiff(file, File))
                        to_tiff_t.start()

                    if instance.convert_to == 'webp':
                        to_webp_t = Thread(target=lambda: to_webp(file, File))
                        to_webp_t.start()

            elif instance.type == 'VID':
                files_to_convert = File.objects.filter(request=instance, use='C', type='VID')

                for file in files_to_convert:
                    if instance.convert_to == '3g2':
                        to_3g2_t = Thread(target=lambda: to_3g2(file, File))
                        to_3g2_t.start()

                    if instance.convert_to == '3gp':
                        to_3gp_t = Thread(target=lambda: to_3gp(file, File))
                        to_3gp_t.start()

                    if instance.convert_to == 'avi':
                        to_avi_t = Thread(target=lambda: to_avi(file, File))
                        to_avi_t.start()

                    if instance.convert_to == 'flv':
                        to_flv_t = Thread(target=lambda: to_flv(file, File))
                        to_flv_t.start()

                    if instance.convert_to == 'mkv':
                        to_mkv_t = Thread(target=lambda: to_mkv(file, File))
                        to_mkv_t.start()

                    if instance.convert_to == 'mov':
                        to_mov_t = Thread(target=lambda: to_mov(file, File))
                        to_mov_t.start()

                    if instance.convert_to == 'mp4':
                        to_mp4_t = Thread(target=lambda: to_mp4(file, File))
                        to_mp4_t.start()

                    if instance.convert_to == 'mpg':
                        to_mpg_t = Thread(target=lambda: to_mpg(file, File))
                        to_mpg_t.start()

                    if instance.convert_to == 'ogv':
                        to_ogv_t = Thread(target=lambda: to_ogv(file, File))
                        to_ogv_t.start()

                    if instance.convert_to == 'webm':
                        to_webm_t = Thread(target=lambda: to_webm(file, File))
                        to_webm_t.start()

                    if instance.convert_to == 'wmv':
                        to_wmv_t = Thread(target=lambda: to_wmv(file, File))
                        to_wmv_t.start()

            elif instance.type == 'AUD':
                files_to_convert = File.objects.filter(request=instance, use='C', type='AUD')

                for file in files_to_convert:
                    if instance.convert_to == 'aac':
                        to_aac_t = Thread(target=lambda: to_aac(file, File))
                        to_aac_t.start()

                    if instance.convert_to == 'aiff':
                        to_aiff_t = Thread(target=lambda: to_aiff(file, File))
                        to_aiff_t.start()

                    if instance.convert_to == 'flac':
                        to_flac_t = Thread(target=lambda: to_flac(file, File))
                        to_flac_t.start()

                    if instance.convert_to == 'm4a':
                        to_m4a_t = Thread(target=lambda: to_m4a(file, File))
                        to_m4a_t.start()

                    if instance.convert_to == 'm4r':
                        to_m4r_t = Thread(target=lambda: to_m4r(file, File))
                        to_m4r_t.start()

                    if instance.convert_to == 'mmf':
                        to_mmf_t = Thread(target=lambda: to_mmf(file, File))
                        to_mmf_t.start()

                    if instance.convert_to == 'mp3':
                        to_mp3_t = Thread(target=lambda: to_mp3(file, File))
                        to_mp3_t.start()

                    if instance.convert_to == 'ogg':
                        to_ogg_t = Thread(target=lambda: to_ogg(file, File))
                        to_ogg_t.start()

                    if instance.convert_to == 'opus':
                        to_opus_t = Thread(target=lambda: to_opus(file, File))
                        to_opus_t.start()

                    if instance.convert_to == 'wav':
                        to_wav_t = Thread(target=lambda: to_wav(file, File))
                        to_wav_t.start()

                    if instance.convert_to == 'wma':
                        to_wma_t = Thread(target=lambda: to_wma(file, File))
                        to_wma_t.start()


@receiver(post_save, sender=File)
def file_post_save(sender, instance, created, **kwargs):
    if created:
        if instance.use == "R":
            result_files_len = File.objects.filter(request=instance.request, use="R").count()
            conv_files_len = File.objects.filter(request=instance.request, use="C").count()

            if result_files_len == conv_files_len:
                instance.request.status = "C"
                instance.request.save()
