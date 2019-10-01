FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

EXPOSE 3000

CMD ["npm", "run" "dev"]

