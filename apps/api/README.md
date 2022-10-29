# Express Server with tRPC

This API app implements **a Typescript Express server with tRPC and Prisma**.

It also implements some additional getting started setup:
1. (Pending): Authentication using JWT refresh strategy.
2. Permissions & Authorization logic using the submodule: `trpc-shield`.
3. Codegen for Prisma schema CRUD using the submodule: `prisma-trpc-generator`.
4. (Pending): Email templating using markdown.

## Getting started

### 1. Create your prisma schema & initial migration

Once your schema is ready, run the following command to create your initial schema migration:

```bash
pnpm exec prisma migrate dev --name init
```

### 1. Compile the prisma-trpc-generator submodule, then generate the prisma client & CRUD routers

Navigate to the `prisma-trpc-generator` module directory in the CLI, then run:

```bash
pnpm run compile 
```

Then, at the root this api package, run:
```bash
pnpm run prisma:migrate
```

### 3. Start the server

Launch your server with this command:
```
pnpm run dev
```

Now your server is ready to use at: [http://localhost:3011](http://localhost:3011)

Note: Your `tRPC` endpoint is where your requests will go, so make sure to add a `/trpc`.

Example endpoint:

```
http://localhost:3011/trpc/user.findUnique
```
