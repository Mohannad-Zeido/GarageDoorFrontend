FROM nginx:alpine

WORKDIR /app

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY SSLKeys/bobalong_uk.crt bobalong_uk.crt
COPY server.key server.key

