# Base image
FROM oven/bun:1 AS base
WORKDIR /app

# Build stage
FROM base AS build
COPY package.json ./
# Try to copy bun.lock or bun.lockb if they exist, but don't fail if they don't
COPY package.json bun.lock* ./
RUN bun install
COPY . .
RUN bun run build

# Production stage
FROM base AS production
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000
CMD ["bun", "run", "preview"]
