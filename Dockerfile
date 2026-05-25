# Base image
FROM oven/bun:1 AS base
WORKDIR /app

# Build stage
FROM base AS build
# Just copy package.json first to cache layers
COPY package.json ./
# Install dependencies (without requiring lockfile)
RUN bun install
# Copy the rest of the files
COPY . .
# Run the build
RUN bun run build

# Production stage
FROM base AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

# Ensure we use the correct port (Easypanel usually expects 3000)
ENV PORT=3000
EXPOSE 3000

# Run the preview server
CMD ["bun", "run", "preview"]
