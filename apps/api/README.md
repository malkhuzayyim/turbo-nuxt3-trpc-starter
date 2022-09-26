# Express Server with tRPC

This example shows how to **implement a Typescript Express server with tRPC and Prisma**.

## Getting started

### 1. Create and seed the database using Prisma

Run the following command to create your SQLite database file:

```bash
pnpm dlx prisma migrate dev --name init
```
or if you have prisma cli 4.x:
```bash
prisma migrate dev --name init
```


### 2. Start the server

Launch your server with this command:

```
pnpm run dev
```

Now your server is ready to use at: [http://localhost:3011](http://localhost:3011)

Note: Your `tRPC` endpoint is where your requests will go, so make sure to add a `/trpc`.

Example endpoint:

```
http://localhost:3011/trpc/user.updateOneUser
```
