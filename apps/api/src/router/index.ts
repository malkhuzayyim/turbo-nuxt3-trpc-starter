import { createRouter } from "../functions/createRouter";

import { users } from "./users";

export const appRouter = createRouter().merge("user", users);
export type AppRouter = typeof appRouter;
