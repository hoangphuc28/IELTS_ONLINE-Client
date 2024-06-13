# Sử dụng một hình ảnh có sẵn chứa Node.js
FROM node:18-alpine as build

# Thiết lập thư mục làm việc của ứng dụng
WORKDIR /app

# Sao chép tệp package.json và package-lock.json nếu có
COPY package*.json ./

# Cài đặt các gói npm
RUN npm clean-install

# Sao chép mã nguồn ứng dụng vào thư mục làm việc
COPY --chown=node:node . .

# Build ứng dụng Next.js
RUN npm run build

RUN npm clean-install --only=production && npm cache clean --force

USER node
from node:lts-alpine

WORKDIR /app

COPY --from=build --chown=node:node /app/package*.json ./
COPY --from=build --chown=node:node /app/node_modules ./node_modules
# COPY --from=build --chown=node:node /app/.next/server ./.next/server
# COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build --chown=node:node /app/public ./public

# Mở cổng mặc định mà ứng dụng Next.js sẽ chạy trên
EXPOSE 3000

# Khởi chạy ứng dụng Next.js
CMD ["npm", "start"]
