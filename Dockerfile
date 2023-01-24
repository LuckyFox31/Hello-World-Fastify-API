FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node . .

ENV SERVER_PORT=3000
ENV SERVER_HOST="0.0.0.0"

EXPOSE 3000

RUN npm ci && npm install

CMD ["npm", "start"]