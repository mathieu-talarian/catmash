FROM heroku/heroku:16-build as build

RUN apt-get update -y && apt-get upgrade -y 
RUN apt-get install nodejs npm -y

COPY . /app
WORKDIR /app

WORKDIR /app/client
RUN npm i && npm run build