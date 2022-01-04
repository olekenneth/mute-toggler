FROM node:16

WORKDIR /app

ENV NODE_ENV=production

COPY --chown=node:node . ./

USER node
ENTRYPOINT [ "npm", "start" ]
