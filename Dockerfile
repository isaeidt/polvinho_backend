FROM node:20-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY src ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
#sem o docker compose temos que definir  aporta ao dar run na imagem criada com o comando ** docker run -p 3000:3000 -e PORT=3000 node-app:1.0 **
#agora com o docker compose que tem a variavel port configurada é só dar um docker-compose up -d que já builda a imagem e inicia sem precisar fazer igual no docker file
# que tem que build e depois run