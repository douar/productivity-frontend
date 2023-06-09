FROM node:latest as buildFrontend
COPY ./ /build
WORKDIR /build
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=buildFrontend /build/dist/productivity-frontend/ /usr/share/nginx/html
