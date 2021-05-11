import pandas as pd
import re
import os
import datetime as dt
import time

### global variables ####
col_names=["Time","Upv1","Upv2","Upv3","Upv4","Upv5","Upv6","Upv7","Upv8","Upv9","Upv10","Upv11","Upv12",
        "Ipv1","Ipv2","Ipv3","Ipv4","Ipv5","Ipv6","Ipv7","Ipv8","Ipv9","Ipv10","Ipv11","Ipv12",
        "Uac1","Uac2","Uac3","Iac1","Iac2","Iac3","Status","Error","Temp","cos","fac","Pac","Qac","Eac","Cycle Time"];

dTimeInMin=int(os.environ['DELTA_TIME_IN_MIN']); # list modified files in last 1 hour
run_interval=int(os.environ['RUN_INTERVAL_IN_MIN']);

src_path = os.environ['ORIG_PATH'];
dst_path = os.environ['READY_PATH'];

def transform_csv(fName,col_names):
    df_csv = pd.read_csv(src_path+fName, names=col_names, header=None, sep=";");

    df_csv['InverterName']='######';
    df_csv['EsnNum']='######';

    pattern = re.compile("^#INV.*");

    for ind in range(1, len(df_csv)):
        if (pattern.match(df_csv['Time'][ind])):
            inv_name=pd.Series(df_csv['Time'][ind]).str.split(r'\s',n=-1,expand=False)[0][0];
            esn_num=pd.Series(df_csv['Time'][ind]).str.split(r'\s',n=-1,expand=False)[0][1];
            ind = ind +1;
        elif (df_csv['Time'][ind]!='#Time'):
            df_csv['InverterName'][ind]=inv_name;
            df_csv['EsnNum'][ind]=esn_num;
       
    df_csv_post=df_csv[df_csv['InverterName']!="######"];
    df_csv_post=df_csv_post.sort_values(by=['Time']);
    df_csv_post.to_csv(dst_path+"post_"+fName, index=False);

def getModifiedFiles(path,dTime):
    fileList = []
    now = dt.datetime.now()
    ago = now-dt.timedelta(minutes=dTime)

    for root, dirs,files in os.walk(path): 
        for fname in files:
        	path = os.path.join(root, fname)       
        	st = os.stat(path)   
        	mtime = dt.datetime.fromtimestamp(st.st_mtime)
        	if mtime > ago:
            		fileList.append(fname);

    return fileList;
       

while 1:
	f_list = getModifiedFiles(src_path,dTimeInMin);
	for fileName in f_list:
	    transform_csv(fileName,col_names);
	    print (fileName + " is transformed properly")

	trig = dt.datetime.now() + dt.timedelta(minutes=run_interval)
	while dt.datetime.now() < trig:
		time.sleep(60)
