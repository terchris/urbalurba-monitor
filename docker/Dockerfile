# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN yarn install

# Copy necessary files to the working directory
COPY . .

# Build the project
RUN yarn build:backend

# Set environment variables
ENV NODE_ENV=production

# Expose port for the app to run on
EXPOSE 3000

# Start the server
CMD ["yarn", "serve"]
