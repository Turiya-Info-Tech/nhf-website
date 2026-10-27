FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# VITE_* values are baked into the bundle at build time
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ARG VITE_WEB3FORMS_KEY
ARG VITE_GOOGLE_SHEETS_WEBHOOK_URL
ARG VITE_WHATSAPP_NUMBER
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
