FROM alpine:3.5

#apk add --update nginx
RUN apk add --update nodejs-current
RUN mkdir -p /usr/src/app

COPY bin /usr/src/app/bin
COPY src /usr/src/app/src
COPY package.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]
