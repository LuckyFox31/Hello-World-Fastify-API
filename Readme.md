# Hello World Fastify API

A small **Node.js Fastify** API.

## Setup

- Create `.env` file with [`.env.example`](.env.example) structure and set `SERVER_PORT` env variable.
- Install dependencies

```shell
npm install
```

- Run server
```shell
npm start
```

## Available routes

| Name                 | Route    | Method | Required properties | Description                               |
|----------------------|----------|--------|---------------------|-------------------------------------------|
| Home                 | `/`      | `GET`  | none                | Return 'Hello World from API !' sentence. |
| Say hello to someone | `/hello` | `POST` | `name: string`      | Return 'Hello name !'.                    |
