# docker build -t jkomyno/pnpm-alpine -f ./docker/Dockerfile .

ARG NODE_VERSION="18.5.0"
ARG PNPM_VERSION="7.5.2"
ARG DATABASE_URL

##
# Create base image with pnpm installed 
##

FROM node:${NODE_VERSION}-alpine

RUN apk update \
  && apk add git
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  npm i -g pnpm@${PNPM_VERSION}

WORKDIR /app

COPY ["./", "./"]

RUN pnpm install
RUN pnpm version

ENV DATABASE_URL $DATABASE_URL

ENTRYPOINT [ "pnpm", "prisma:db-push", "&&", "pnpm", "prisma:db-seed" ]
