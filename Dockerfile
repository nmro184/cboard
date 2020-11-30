# Stage 1 - the build process
FROM node:12-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn set version 1.22.4
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:stable-alpine
COPY ./rootfs/ /
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
