FROM node:alpine

WORKDIR /usr/deadlift-server

COPY package*.json .

# --ignore-scripts is needed to not run husky
RUN npm install --ignore-scripts

COPY . .

RUN npm run build

ENV NODE_ENV=production

# Install only needed dependencies
RUN npm ci --ignore-scripts

CMD ["npm", "run", "start:build"]
