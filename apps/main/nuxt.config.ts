export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:3011/trpc",
    },
  },
  typescript: {
    strict: true, // required to make input/output types work
  },
});
