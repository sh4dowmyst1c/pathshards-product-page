FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:18

RUN apt-get update && apt-get install -y make git openssh-client && rm -rf /var/lib/apt/lists/*

RUN git config --global user.name "PathShards" && git config --global user.email "business@pathshards.com"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
