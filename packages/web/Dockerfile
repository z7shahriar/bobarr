FROM node:12-alpine

ENV PORT 3000
EXPOSE 3000

WORKDIR /usr/src/app
COPY package*.json ./

RUN yarn
COPY . .

RUN yarn build

HEALTHCHECK --start-period=30s \
  CMD curl -f http://localhost:3000 || exit 1

CMD yarn start
