# Stage 1: Build Angular application
FROM node:16.16.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build --force

# Stage 2: Run with Nginx
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/pds-front  /usr/share/nginx/html
