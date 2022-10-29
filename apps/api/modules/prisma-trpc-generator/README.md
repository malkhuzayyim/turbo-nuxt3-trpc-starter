# Prisma tRPC Generator Module

This module should be compiled after every edit:

Just run the following while in this directory:

```bash
pnpm run compile
```

In your Prisma Schema, you can add:

```prisma
generator trpc {
  provider       = "node ./modules/prisma-trpc-generator/dist/generator.js"
  withMiddleware = false
  withShield     = false
  contextPath    = "@mono/api/src/middleware/context"
  output         = "../generated/trpc"
}
```