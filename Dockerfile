FROM node:8 as builder
WORKDIR /knighttranscom
COPY . /knighttranscom
RUN npm install
RUN npm run build
FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=builder /knighttranscom/dist .
EXPOSE 80
