import "app-module-path/register";
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';

console.log("🚀 ~ __dirname", __dirname);

const PORT = 3001;

const app = express();

// basic router definition
import { z } from 'zod';
const appRouter = trpc
  .router()
  .query('getUser', {
    input: z.string(),
    async resolve(req) {
      req.input; // string
      return { id: req.input, name: 'Bilbo' };
    },
  })
  .mutation('createUser', {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      // use your ORM of choice
      return 
    },
  });
// export type definition of API
export type AppRouter = typeof appRouter;

// created for each request
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}) // no context
type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);
app.get('/', (req, res) => res.send('Express + Prisma + tRPC'));

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
