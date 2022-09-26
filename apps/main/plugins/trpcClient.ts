import { createTRPCClient } from "@trpc/client";
import type { AppRouter } from "@mono/api/src/router";

export default defineNuxtPlugin((nuxtApp) => {
  const trpcClient = createTRPCClient<AppRouter>({
    url: nuxtApp.$config.public.baseURL,
  });
  return {
    provide: {
      trpcClient,
    },
  };
});
