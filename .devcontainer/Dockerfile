FROM node:18-alpine

RUN apk add --no-cache make git openssh-client

# Configure git
RUN git config --global user.name "PathShards" && 
    git config --global user.email "business@pathshards.com"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
