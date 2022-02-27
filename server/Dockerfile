FROM node:16-alpine as build

WORKDIR /app

COPY yarn.lock package.json ./
RUN yarn

COPY . .
RUN npx prisma generate && yarn build && rm -rf ./node_modules

FROM node:16-alpine

ENV PORT 3000
ENV NODE_ENV production

WORKDIR /app

COPY --from=build /app .
RUN yarn install --production

EXPOSE 3000
CMD ["node", "dist/index.js"]