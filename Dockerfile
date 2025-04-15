FROM node:18
WORKDIR /app
COPY package*.json ./
COPY app.js ./
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000