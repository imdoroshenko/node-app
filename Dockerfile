FROM alpine:3.5

ENV NODE_ENV production

#apk add --update nginx
RUN apk add --update nodejs-current
RUN apk add --update git
RUN mkdir -p /usr/src/app

COPY bin /usr/src/app/bin/
COPY config /usr/src/app/config/
COPY src /usr/src/app/src/
COPY package.json /usr/src/app/

WORKDIR /usr/src/app

RUN npm i --production

EXPOSE 3000

CMD [ "npm", "start" ]
