# Advanced Wled control
# Strip is controlled per LED (DRGB UDP mode, max 490 LEDs), input must have as many lights as the stripe

import sys
import time
import json
import math
import socket
from PIL import Image

def readColors(img, x=16, y=16):
	colors = []
	for j in range(y):
		start = 0
		stop = x
		step = 1
		if j % 2 == 0:
			start = x-1
			stop = -1
			step = -1

		for i in range(start, stop, step):
			rgb = list(img.getpixel((i,j)))
			colors.append(rgb)	

	return colors

def popen(ip, port, files=[]):	
	url = '/json/state'
	multired = float(1)#float(1200) # Multiplication, you can make the light brighter
	multigreen = float(1)#float(1250) # Multiplication, you can make the light brighter
	multiblue = float(1)#float(850) # Multiplication, you can make the light brighter
	spidev.write("Start processing input from wled ... \n")
	sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) # UDP

	images = []
	for i in range(len(files)):
		im = Image.open(files[i])
		rgb = im.convert('RGB')

		images.append(readColors(rgb))

	counter = 0
	displayTime = 1

	while True:
		color = []
		colorbyte = bytearray([2,255]) # DRGB Header

		if len(images) > 0:
			pixelArt = images[counter]

			for pixel in pixelArt:
				red = float(pixel[0])
				green = float(pixel[1])
				blue = float(pixel[2])

				red = red * multired
				green = green * multigreen
				blue = blue * multiblue

				if red > 255:
					red = 255

				if green > 255:
					green = 255

				if blue > 255:
					blue = 255			  

				intred = int(red)
				intgreen = int(green)
				intblue = int(blue)
				colorbyte = colorbyte + bytearray([intred,intgreen,intblue])
		
			#spidev.write("Message: " + colorbyte + "\n")
			sock.sendto(colorbyte, (ip, int(port)))			  
			#spidev.write("Message: " + data + "\n")
			spidev.flush()

			if len(files) == 1:
				break

			counter = counter + 1
			if counter == len(files):
				counter = 0
			time.sleep(displayTime)
		else:
			i = 0
			eingabe = sys.stdin.readline()
			#spidev.write("Eingabe: " + str(eingabe) + "\n")

			if len(eingabe)>0:

				data = eingabe.split(' ')	

				for temp in data:		  
					color.append(temp)
					i = i + 1

					if i == 3:
						red = float(color[0])
						green = float(color[1])
						blue = float(color[2])

						red = red * multired
						green = green * multigreen
						blue = blue * multiblue

						if red > 255:
							red = 255

						if green > 255:
							green = 255

						if blue > 255:
							blue = 255			  

						intred = int(red)
						intgreen = int(green)
						intblue = int(blue)
						colorbyte = colorbyte + bytearray([intred,intgreen,intblue])
						i = 0
						color = []
			
				#spidev.write("Message: " + colorbyte + "\n")
				sock.sendto(colorbyte, (ip, int(port)))			  
				#spidev.write("Message: " + data + "\n")
				spidev.flush()			  

			else:
				break
			
#Get full command-line arguments
full_cmd_arguments = sys.argv

#Get 1 command-line argument !WLED IP!
#Get 2 command-line argument !WLED UDP port!
ip = '192.168.178.100'#sys.argv[1]
port = '21324'#sys.argv[2]

#Calc filename 
filename = 'C:/Users/veit/projects/wled_logs/' + ip + '.log'

#Open logfile
spidev = open(filename, "w")
#spidev = file(file, "wb")
spidev.write("Starting ...\n")
spidev.flush()

#Log arguments
spidev.write("Commandline call: " + str(full_cmd_arguments) + "\n")
spidev.write("Executing for IP: " + ip + "\n")
spidev.write("Executing for PORT: " + port + "\n")
spidev.flush()

#Wait 5 sec
#time.sleep(5)

path = 'C:/Users/veit/projects/PixelArt2WLED/images/'
filenames = [f"{path}susi.png", f"{path}veit.png"]
#Call popen
popen(ip, port, filenames)
