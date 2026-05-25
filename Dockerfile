# Base image
FROM oven/bun:1 AS base
WORKDIR /app

# Build stage
FROM base AS build
COPY package.json ./
# Install dependencies
RUN bun install
COPY . .
# Run the build
RUN bun run build
# Prepare the worker script and assets for wrangler
# We copy server assets into the client directory so wrangler can bundle them
RUN if [ -d dist/server ]; then cp -r dist/server/* dist/client/ && mv dist/client/index.js dist/client/_worker.js; fi

# Production stage
FROM base AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

# Port configuration
ENV PORT=3000
EXPOSE 3000

# Run wrangler to serve the app
CMD ["bun", "run", "preview"]
