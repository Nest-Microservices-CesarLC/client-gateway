# Product Microservice

## Deploy in development

1. Clone the repository
2. Install dependencies
3. Create a `.env` file based on `env.template`

4. Deploy NATS server

```
docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats
```

5. Start the development server:

```
npm run start:dev
```
