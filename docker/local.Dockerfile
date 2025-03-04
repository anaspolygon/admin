FROM node:20

ARG APP_TIMEZONE

RUN apt-get update && apt-get install -y tzdata
# Dockerfile
# Clear npm cache before installing dependencies


WORKDIR /app




COPY . /app
RUN  npm install --legacy-peer-deps


CMD ["npm", "run","dev"]
