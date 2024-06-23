# Use an official Ubuntu as a parent image
FROM node:alpine3.19

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]