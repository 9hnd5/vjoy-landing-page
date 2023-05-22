FROM node:18-alpine as builder
ARG env
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18-alpine as runner
ARG env
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
ENV NODE_ENV=production

RUN yarn install --frozen-lockfile && yarn cache clean
CMD yarn start