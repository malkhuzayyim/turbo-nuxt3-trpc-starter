import { createTRPCClient } from "@trpc/client";
import type { AppRouter } from "@mono/api/src/router";

export const useTrpcClient = () => {
  const trpcClient = createTRPCClient<AppRouter>({
    url: "http://localhost:3011/trpc",
  });
  return trpcClient;
};
