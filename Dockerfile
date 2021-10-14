FROM node:alpine

#create app directory
WORKDIR '/app'

#install dependencies
COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm" , "start"]
