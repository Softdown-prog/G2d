FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./
COPY game/package.json ./game/package.json
COPY server/package.json ./server/package.json
RUN npm install

COPY game ./game
COPY server ./server
COPY site ./site

RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

COPY package.json ./
COPY game/package.json ./game/package.json
COPY server/package.json ./server/package.json
RUN npm install --omit=dev

COPY --from=build /app/server/dist ./server/dist
COPY --from=build /app/game/dist ./game-dist
COPY --from=build /app/site ./site

EXPOSE 8080
CMD ["node", "server/dist/server.js"]
