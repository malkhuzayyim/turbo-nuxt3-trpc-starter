export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: "http://localhost:3011/trpc",
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        paths: {
          "@mono/api/*": ["../api/*"],
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
});
