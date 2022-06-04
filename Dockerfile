FROM node:16-slim as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginx:1.22 as prod

EXPOSE 8000/tcp
EXPOSE 8080/tcp
USER nginx
COPY --chown=nginx:nginx "nginx.conf" "/etc/nginx/nginx.conf"
COPY --from=build --chown=nginx:nginx "/app/build" "/usr/share/nginx/html"
CMD ["nginx", "-c", "/etc/nginx/nginx.conf"]
HEALTHCHECK --interval=10s --timeout=1s --start-period=5s --retries=3 \
    CMD ["curl", "-f", "http://localhost:8080"]
