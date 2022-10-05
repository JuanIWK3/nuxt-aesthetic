// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/styles/main.scss"],
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
    },
  },
});
