import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
// import { appRouter } from '../prisma/trpc/routers/index';
import { createContext } from './context';

const PORT = 3001;

const app = express();

// app.use(
//   '/trpc',
//   trpcExpress.createExpressMiddleware({
//     router: appRouter,
//     createContext,
//   }),
// );
app.get('/', (req, res) => res.send('Express + Prisma + tRPC'));

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
