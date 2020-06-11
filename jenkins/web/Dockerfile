FROM node:10-alpine as build-stage
LABEL maintainer=KokoTa
WORKDIR /app
COPY . .
RUN npm install cnpm -g --registry=https://registry.npm.taobao.org
RUN cnpm install
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
