FROM node:10.15.1-alpine

RUN mkdir app

WORKDIR /app

COPY . .

RUN yarn install && yarn run build

CMD yarn run start
