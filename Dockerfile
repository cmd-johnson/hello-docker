FROM node:10-alpine

WORKDIR /opt/hello-docker/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
