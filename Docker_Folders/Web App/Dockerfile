FROM node
WORKDIR /app
COPY BackEnd/package*.json ./
RUN  npm install
RUN npm install --save-dev jest
COPY . .
EXPOSE 2699
CMD [ "node", "./BackEnd/index.js" ]