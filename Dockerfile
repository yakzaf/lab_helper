FROM node

WORKDIR /usr/lab_helper

COPY package*.json .

COPY src/instructions/ ./src/instructions

RUN npm install

COPY . .

#RUN npm run build
#COPY .env ./dist/
WORKDIR ./dist

EXPOSE 3000

CMD ["npm", "run", "start"]