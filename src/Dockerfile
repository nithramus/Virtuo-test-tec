FROM node:14

RUN npm i -g nodemon
RUN npm i -g typescript
WORKDIR /usr/src/app
COPY . .
RUN rm -rf node_modules
RUN npm install
EXPOSE 3000

CMD ["npm", "run", "kubernetes"]    