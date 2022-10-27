import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { PrismaClient } from "@mono/api/generated/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

// created for each request
export const createContext = ({
  req,
}: // res,
trpcExpress.CreateExpressContextOptions) => {
  // evaluate and inject request context
  return {
    headers: req.headers,
    prisma,
  };
};
// infer context type
export type Context = trpc.inferAsyncReturnType<typeof createContext>;
