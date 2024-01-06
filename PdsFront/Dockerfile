# Stage 1
FROM node:16.16.0 as node
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build --force
EXPOSE 4200
CMD ["npm", "start"]
