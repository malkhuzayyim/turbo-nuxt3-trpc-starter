import * as trpc from "@trpc/server";
import type { Context } from "@mono/api/src/middleware/context";
export const createRouter = () => {
  return trpc.router<Context>();
};
