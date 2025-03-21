FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Vite app
RUN npm run build

# Install a simple server to serve the static files
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]
