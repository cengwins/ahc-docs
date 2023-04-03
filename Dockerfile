FROM node:16-alpine

RUN apk add --no-cache bash

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

COPY package.json package-lock.json /usr/local/app
RUN npm ci

COPY . .
EXPOSE 3000

CMD /bin/sh -c "npm run serve"
