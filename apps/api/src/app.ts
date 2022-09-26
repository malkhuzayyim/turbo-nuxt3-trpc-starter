import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

import { appRouter } from "./router";
import { createContext } from "./middleware/context";

const PORT = 3011;

const app = express();

// add cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// this is the trpc router attaching to express as a middleware
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.get("/", (req, res) => res.send("Express + Prisma + tRPC"));

app.listen(PORT, () => {
  console.log(`server listening at http://localhost:${PORT}`);
});
