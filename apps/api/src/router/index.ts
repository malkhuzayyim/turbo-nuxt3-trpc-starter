import { createRouter } from "@mono/api/src/functions/createRouter";

import { users } from "@mono/api/src/router/users";
import { appRouter as crud } from "@mono/api/generated/trpc/routers";

export const appRouter = createRouter()
  .merge("users.", users)
  .merge("crud.", crud);
export type AppRouter = typeof appRouter;
