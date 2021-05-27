# set base image (host OS)
FROM python:3.8

WORKDIR /wledpixel

COPY /python/requirements.txt .

# install dependecies
RUN pip3 install -r requirements.txt

COPY /python/wled_DRGB.py .
COPY /images ./images

CMD [ "python3", "./wled_DRGB.py" ] 
