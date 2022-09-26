import * as trpc from "@trpc/server";
import type { Context } from "../middleware/context";
export const createRouter = () => {
  return trpc.router<Context>();
};
