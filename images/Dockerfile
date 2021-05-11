FROM debian:latest  
RUN apt-get update  
RUN apt-get install --no-install-recommends --no-install-suggests -y mariadb-client python-mysqldb python-numpy 
RUN apt-get install -y python-pandas 
ENV TZ=Europe/Istanbul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
CMD sh -c "python /SRC/$ExecPythonName"
