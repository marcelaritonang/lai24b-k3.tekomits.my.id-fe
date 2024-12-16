FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Build the app
RUN npm run build


CMD ["npm", "run", "dev"]
