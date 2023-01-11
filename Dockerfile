FROM nginx:alpine

WORKDIR /app

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 4321
