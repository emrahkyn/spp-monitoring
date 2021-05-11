#!/usr/bin/python

from datetime import datetime, timedelta
import time,sys,os
import numpy as np
import ftplib

lower_limit=17
upper_limit=24
mu, sigma = 20, 3

prop_name=os.environ['PropertyName']
ftp_user=os.environ['FTP_USER']
ftp_pass=os.environ['FTP_PASS']
ftp_server=os.environ['FTP_SERVER']

def createCSVFile (fName):
	f = open("/LOGS/"+fName, "wx")
	f.write("InverterName,Time," + prop_name+"\n")
	for i in range(1,21):
		f.write("RPI M50A["+str(i)+"],"+str((datetime.now()+timedelta(hours=3)).strftime('%d%m%Y %H:%M'))+","+str(np.random.normal(mu, sigma))+"\n")
	f.close()
	print "File has created" + str(datetime.now())

def uploadFTP (fName):
	session = ftplib.FTP(ftp_server,ftp_user,ftp_pass)
	file = open("/LOGS/"+fName,'rb')                  # file to send
	session.storbinary('STOR '+fName, file)     # send the file
	file.close()                                    # close file and FTP
	session.quit()
	print "File has uploaded" + str(datetime.now())

while 1:
	
	fName = prop_name+"_"+str((datetime.now()+timedelta(hours=3)).strftime('%d%m%Y-%H%M'))
	createCSVFile(fName)
	uploadFTP(fName)

	dt = datetime.now() + timedelta(minutes=5)
	while datetime.now() < dt:
		time.sleep(60)



