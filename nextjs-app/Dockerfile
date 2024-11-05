# my-next-app/Dockerfile

# Use Node.js as the base image
FROM node:20 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

RUN npm run seed 

# Expose the port Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
