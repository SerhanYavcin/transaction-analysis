FROM node:22.11.0-alpine3.20
WORKDIR /srv/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
CMD ["sh", "-c", "node dist/main"] 