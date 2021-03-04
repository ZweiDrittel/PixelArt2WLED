from PIL import Image
import requests

def readColors(img, x=16, y=16):
    colors = []
    for i in range(x):
        for j in range(y):
            rgb = list(img.getpixel((i,j)))
            colors.append(rgb)

    return colors

def sendData(colors, url='http://192.168.178.100/json/state'):
    data = {"seg": {"i": colors}}
    print(data)
    r = requests.post(url, json=data)
    print(r.status_code)

if __name__ == "__main__":
    i = Image.open('../images/spoderman.png')
    rgb = i.convert('RGB')

    colors = readColors(rgb)
    sendData(colors)