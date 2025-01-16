# Use the Node.js official image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React/Vite app
RUN npm run build

# Serve the build folder using a lightweight HTTP server
RUN npm install -g serve

# Expose port 3000 (or the port your app uses)
EXPOSE 3000

# Command to serve the application
CMD ["serve", "-s", "dist", "-l", "3000"]
