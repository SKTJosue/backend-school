# Usa una imagen base de Node.js
FROM node:20.15.1

# Establece el directorio de trabajo
WORKDIR /src/app/nestjs

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
# RUN npm install
# Install app dependencies
RUN npm install --only=development
RUN npm install -g @nestjs/cli

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación
# RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run","start:dev"]