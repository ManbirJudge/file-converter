from django.conf import settings

from PIL import Image
import os
import ffmpy

FFMPEG_PATH = os.path.join(settings.BASE_DIR, 'ffmpeg\\bin\\ffmpeg.exe')


# image conversion functions

# BMP           ✔
# EPS           ✖
# GIF           ✔
# HDR / EXR     ✖
# ICO           ✔
# JPG ( JPEG )  ✔
# PNG           ✔
# SVG           ✖
# TGA           ✔
# TIFF          ✔
# WebP          ✔

def to_bmp(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)
    try:
        r, g, b, a = file_to_convert.split()
    except ValueError:
        r, g, b = file_to_convert.split()
    converted_file = Image.merge("RGB", (r, g, b))

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.bmp")
    converted_file.save(converted_file_absolute_path, 'BMP')

    File.objects.create(
        name=file_path + "_converted.bmp",
        file=file_path + "_converted.bmp",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/bmp'
    )


def to_gif(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)
    converted_file = file_to_convert.convert('RGB')

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.gif")
    print(converted_file_absolute_path)
    converted_file.save(converted_file_absolute_path, 'GIF')

    File.objects.create(
        name=file_path + "_converted.gif",
        file=file_path + "_converted.gif",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/gif'
    )


def to_ico(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.ico")

    file_to_convert.save(converted_file_absolute_path, format='ICO', sizes=[
        (16, 16),
        (24, 24),
        (32, 32),
        (48, 48),
        (64, 64),
        (128, 128),
        (256, 256)
    ])

    File.objects.create(
        name=file_path + "_converted.ico",
        file=file_path + "_converted.ico",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/ico'
    )


def to_jpeg(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)
    converted_file = file_to_convert.convert('RGB')

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.jpg")
    print(converted_file_absolute_path)
    converted_file.save(converted_file_absolute_path, 'JPEG')

    File.objects.create(
        name=file_path + "_converted.jpg",
        file=file_path + "_converted.jpg",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/jpeg'
    )


def to_png(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)
    converted_file = file_to_convert.convert('RGBA')

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.png")
    print(converted_file_absolute_path)
    converted_file.save(converted_file_absolute_path, 'PNG')

    File.objects.create(
        name=file_path + "_converted.png",
        file=file_path + "_converted.png",
        request=file.request,
        use='R',
        type='IMG',
        file_type='png'
    )


def to_tga(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.tga")
    file_to_convert.save(converted_file_absolute_path, format='TGA')

    File.objects.create(
        name=file_path + "_converted.tga",
        file=file_path + "_converted.tga",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/tga'
    )


def to_tiff(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)
    converted_file = file_to_convert.convert('RGB')

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.tiff")
    print(converted_file_absolute_path)
    converted_file.save(converted_file_absolute_path, 'TIFF')

    File.objects.create(
        name=file_path + "_converted.tiff",
        file=file_path + "_converted.tiff",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/tiff'
    )


def to_webp(file, File):
    file_path = str(file.file)
    absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))

    file_to_convert = Image.open(absolute_path)
    converted_file = file_to_convert.convert('RGB')

    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.webp")
    print(converted_file_absolute_path)
    converted_file.save(converted_file_absolute_path, 'WEBP')

    File.objects.create(
        name=file_path + "_converted.webp",
        file=file_path + "_converted.webp",
        request=file.request,
        use='R',
        type='IMG',
        file_type='images/webp'
    )


# video conversion functions

# 3G2   ✔
# 3GP   ✔
# AVI   ✔
# FLV   ✔
# MKV   ✔
# MOV   ✔
# MP4   ✔
# MPG   ✔
# OGV   ✔
# WEBM  ✔
# WMV   ✔

def to_3g2(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.3g2")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-ar', '8000', '-ab', '12.2k', '-ac', '1', '-vf', 'scale=1408:1152']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.3g2",
        file=file_path + "_converted.3g2",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/3g2'
    )


def to_3gp(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.3gp")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-ar', '8000', '-ab', '12.2k', '-ac', '1', '-vf', 'scale=1408:1152']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.3gp",
        file=file_path + "_converted.3gp",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/3g2'
    )


def to_avi(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.avi")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.avi",
        file=file_path + "_converted.avi",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/avi'
    )


def to_flv(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.flv")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.flv",
        file=file_path + "_converted.flv",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/flv'
    )


def to_mkv(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.mkv")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.mkv",
        file=file_path + "_converted.mkv",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/mkv'
    )


def to_mov(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.mov")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.mov",
        file=file_path + "_converted.mov",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/mov'
    )


def to_mp4(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.mp4")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.mp4",
        file=file_path + "_converted.mp4",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/mp4'
    )


def to_mpg(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.mpg")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.mpg",
        file=file_path + "_converted.mpg",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/mpg'
    )


def to_ogv(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.ogv")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.ogv",
        file=file_path + "_converted.ogv",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/ogv'
    )


def to_webm(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.webm")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.webm",
        file=file_path + "_converted.webm",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/webm'
    )


def to_wmv(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.wmv")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: ['-q:v', '1']},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.wmv",
        file=file_path + "_converted.wmv",
        request=file.request,
        use='R',
        type='VID',
        file_type='videos/wmv'
    )


# audio conversion functions

# AAC   ✔
# AIFF  ✔
# FLAC  ✔
# M4A   ✔
# M4R   ✔
# MMF   ✔
# MP3   ✔
# OGG   ✔
# OPUS  ✔
# WAV   ✔
# WMA   ✔


def to_aac(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.aac")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.aac",
        file=file_path + "_converted.aac",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/aac'
    )


def to_aiff(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.aiff")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.aiff",
        file=file_path + "_converted.aiff",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/aiff'
    )


def to_flac(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.flac")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.flac",
        file=file_path + "_converted.flac",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/flac'
    )


def to_m4a(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.m4a")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.m4a",
        file=file_path + "_converted.m4a",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/m4a'
    )


def to_m4r(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.m4r")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.m4r",
        file=file_path + "_converted.m4r",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/m4r'
    )


def to_mmf(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.mmf")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.mmf",
        file=file_path + "_converted.mmf",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/mmf'
    )


def to_mp3(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.mp3")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.mp3",
        file=file_path + "_converted.mp3",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/mp3'
    )


def to_ogg(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.ogg")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.ogg",
        file=file_path + "_converted.ogg",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/ogg'
    )


def to_opus(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.opus")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.opus",
        file=file_path + "_converted.opus",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/opus'
    )


def to_wav(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.wav")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.wav",
        file=file_path + "_converted.wav",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/wav'
    )


def to_wma(file, File):
    file_path = str(file.file)
    file_absolute_path = os.path.join(settings.MEDIA_ROOT, str(file_path))
    converted_file_absolute_path = os.path.join(settings.MEDIA_ROOT, file_path + "_converted.wma")

    ff = ffmpy.FFmpeg(
        inputs={file_absolute_path: None},
        outputs={converted_file_absolute_path: None},
        executable=FFMPEG_PATH
    )

    ff.run()

    File.objects.create(
        name=file_path + "_converted.wma",
        file=file_path + "_converted.wma",
        request=file.request,
        use='R',
        type='AUD',
        file_type='audio/wma'
    )
