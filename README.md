# FileConverter
## Build
```
cd FileConverter
python -m venv venv
vens\Scripts\activate
pip install -r requirements.txt
npm i
npx tailwindcss -i ./assets/css/main.css -o ./static/css/main.css
python manage.py migrate
python manage.py runserver
```
In anothe terminal -
```
cd FileConverter
venv\Scripts\activate
python manage.py run_huey
```
## TODOs
- Client and server side checks and error for -
  - File type
  - File size
  - Number of files
  - Number of conversions per day
- Something on the homepage.
- Cleaning up convert requests after 6 hours (including DB entries and media files).
- Genearlized `convert.html` template which will be reused by all converters (images, videos, docs etc).
- Proper file type (extension, mimetype and may magic) handling on server side.
- Errors (client side and from the API).
- ~~Don't use Tailwind CDN.~~
- Favicon.
- ~~Serve font, tailwind and jszip using DJango static.~~
