# Sử dụng một hình ảnh có sẵn chứa Node.js
FROM node:22.0.0-alpine

# Thiết lập thư mục làm việc của ứng dụng
WORKDIR /usr/src/app

# Sao chép tệp package.json và package-lock.json nếu có
COPY package*.json ./

# Cài đặt các gói npm
RUN npm install

# Sao chép mã nguồn ứng dụng vào thư mục làm việc
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Mở cổng mặc định mà ứng dụng Next.js sẽ chạy trên
EXPOSE 3000

# Khởi chạy ứng dụng Next.js
CMD ["npm", "start"]
