# 1. Stufe: Abhängigkeiten installieren
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# 2. Stufe: Den Bauprozess starten
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment Variable für den Build-Prozess (Deaktiviert Telemetrie)
ENV NEXT_TELEMETRY_DISABLED 1

# Hier bauen wir die App
RUN npm run build

# 3. Stufe: Das eigentliche Image für den Server (Runner)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# System-User anlegen (Sicherheit)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Nur die nötigen Dateien aus dem "standalone" Ordner kopieren
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]