FROM node:16-slim as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.20 as production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
HEALTHCHECK --interval=10s --timeout=1s --start-period=5s --retries=3 \
    CMD ["curl", "-f", "http://localhost:8080"]
