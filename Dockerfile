# FROM node:13.12.0-alpine as build
# WORKDIR /app
# ENV PYTHONUNBUFFERED=1
# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
# RUN python3 -m ensurepip
## RUN pip3 install --no-cache --upgrade pip setuptools
# RUN apk add --no-cache make build-base
# COPY . .
# RUN npm install --loglevel=error
# RUN npm run build
FROM nginx:stable-alpine
WORKDIR /app
COPY ./nginx/nginx.conf .
VOLUME /mnt/efs
# COPY --from=build /app/build /usr/share/nginx/html/
RUN cp -R /mnt/efs/maya/ /usr/share/nginx/html/
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN cp nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]
