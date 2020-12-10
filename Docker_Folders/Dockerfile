FROM node
WORKDIR /app
COPY BackEnd/package*.json ./
RUN  npm install
COPY . .
EXPOSE 2699
CMD [ "node", "./BackEnd/index.js" ]