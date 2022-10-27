import { createRouter } from "@mono/api/src/functions/createRouter";

import { users } from "@mono/api/src/router/users";

export const appRouter = createRouter().merge("users.", users);
export type AppRouter = typeof appRouter;
