// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
    configPath: "~/tailwind.config.ts",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
});
