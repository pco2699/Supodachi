FROM node:10.15.1-alpine

ENV API_URL https://supodachi-backend.herokuapp.com/

RUN mkdir app
ARG MAP_APIKEY

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

CMD yarn run start
