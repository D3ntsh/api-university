FROM node:14.17.6-alpine3.14

ENV TZ=America/Mexico_City

RUN apk add openssl
RUN npm install -g @nestjs/cli
