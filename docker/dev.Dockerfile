FROM node:20-buster-slim AS base

# 1. Install dependencies only when needed

FROM base AS deps

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm i --force

# 2. Rebuild the source code only when needed

FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env.dev .env
RUN rm .env.production .env.dev
RUN npm run build

# 3. Production image, copy all the files and run next

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production


# dev.Dockerfile
# Clear npm cache before installing dependencies

COPY . /app
RUN  npm install --legacy-peer-deps
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


USER nextjs
EXPOSE 3000
ENV PORT 3000


CMD ["npm", "run","dev"]

