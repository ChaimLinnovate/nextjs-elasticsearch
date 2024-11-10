# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server files
COPY . .

# Expose the port that the server will run on
EXPOSE 4000

# Command to run the GraphQL server
CMD ["npm", "start"]
