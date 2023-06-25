// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/styles/main.sass"],
  runtimeConfig: {
    apiSecret: "", // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: "", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      imgBaseUrl: "",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    optimizeDeps: {
      exclude: ["date-fns"],
    },
  },
});
