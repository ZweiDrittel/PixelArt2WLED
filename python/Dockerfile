# set base image (host OS)
FROM python:3.8

WORKDIR /wledpixel

COPY requirements.txt .

# install dependecies
RUN pip3 install -r requirements.txt

COPY wled_DRGB.py .

CMD [ "python3", "./wled_DRGB.py" ] 
