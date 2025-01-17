FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


FROM caddy:latest

COPY --from=builder /app/out /usr/share/caddy

EXPOSE 80

CMD ["caddy", "file-server", "--root", "/usr/share/caddy"]
