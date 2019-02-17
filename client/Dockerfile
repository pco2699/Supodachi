FROM node:10.15.1-alpine

RUN mkdir app

WORKDIR /app

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install

COPY . .
CMD nuxt start
