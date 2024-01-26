FROM node:20.11.0-bullseye

RUN corepack enable

ARG UID=1000
ARG GID=1000
RUN userdel -r node \
  && groupadd --gid ${GID} karimado \
  && useradd --uid ${UID} --gid ${GID} --shell /bin/bash --create-home karimado

USER karimado:karimado
WORKDIR /home/karimado/workspace

COPY --chown=karimado:karimado package.json .
COPY --chown=karimado:karimado pnpm-lock.yaml .
RUN pnpm install

COPY --chown=karimado:karimado . .

CMD ["pnpm", "run", "dev", "-v"]
