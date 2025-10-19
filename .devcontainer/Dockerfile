FROM node:18-alpine

RUN apk add --no-cache make git openssh-client

WORKDIR /app

# Copy package files from the `app` subfolder where package.json actually lives
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy application source from the `app` folder into the container
COPY app/ ./

EXPOSE 3000

CMD ["npm", "start"]
