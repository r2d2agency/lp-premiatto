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
RUN mkdir -p dist/client && \
    if [ -d dist/server ]; then \
      cp -r dist/server/* dist/client/ && \
      if [ -f dist/client/index.js ]; then \
        mv dist/client/index.js dist/client/_worker.js; \
      fi; \
    fi


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
