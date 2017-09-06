FROM node:8.4.0

LABEL authors="ifeanyioraelosi@gmail.com"

# Define environment variables
ENV NODE_ENV development
ENV APP_PORT 1337

# Our app runs on port 1337. Expose it.
EXPOSE 1337

# Set the new directory as our working directory
WORKDIR /app

# Copy all the content to the working directory
COPY . /app

RUN npm config set registry http://registry.npmjs.org/ && npm install

# Serve the application
CMD ["npm", "start"]