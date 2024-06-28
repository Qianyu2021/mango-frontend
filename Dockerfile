# Use an official Node runtime as a base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app/mang-web

# Copy the Babel configuration file
COPY .babelrc ./

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install frontend dependencies
RUN npm install



# Add the new Babel plugin
RUN npm install --save-dev @babel/plugin-transform-private-property-in-object


# Copy the rest of the application files to the container
COPY . .

# Build the frontend app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]