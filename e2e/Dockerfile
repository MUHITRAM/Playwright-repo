FROM mcr.microsoft.com/playwright:v1.54.0-noble

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "playwright", "test"]