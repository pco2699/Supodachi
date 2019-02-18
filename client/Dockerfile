FROM node:10.15.1-alpine

RUN mkdir app

WORKDIR /app

COPY . .

RUN yarn install

CMD yarn run start
