FROM postgres:latest

COPY ./database_loader /loader
WORKDIR /loader

#ARG DBHOST
#ARG DBPORT
#ARG DBNAME
#ARG DBUSER
#ARG DBPASS

ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_NAME=forum_server
ENV DB_USER=forum_server
ENV DB_PASS=forum_server

#CMD bash create_db.sh $DBHOST $DBPORT $DBNAME $DBUSER $DBPASS
CMD bash create_db.sh postgres 5432 forum_server forum_server forum_server
