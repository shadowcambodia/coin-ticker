# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Install only production dependencies
RUN npm ci --omit=dev

# Stage 2: Run the application
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the build output and production dependencies from the builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the port your app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
