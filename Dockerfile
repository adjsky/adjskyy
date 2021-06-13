FROM ubuntu:21.04
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get install -y nodejs 
RUN apt-get install -y npm
COPY . /source_code
WORKDIR /source_code
RUN npm i
CMD npm run build && npm start