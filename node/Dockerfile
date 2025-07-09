FROM node:22-alpine

# Create app user
RUN addgroup -S app && adduser -S app -G app

WORKDIR /usr/src/app

# Copy and install dependencies
COPY app/package*.json ./
RUN npm ci --omit=dev

# Copy app source
COPY app .

# Switch to non-root user
USER app

EXPOSE 3000
CMD ["node", "index.js"]
