import { defineOrganization } from "nuxt-schema-org/schema";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui-pro",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "motion-v/nuxt",
    "nuxt-llms",
  ],

  devtools: {
    enabled: true,
  },

  llms: {
    domain: "https://valentinchmara.com",
    title: "Valentin Chmara - Software Engineer",
    description:
      "Welcome to my website! I'm a Software Engineer with a passion for building innovative solutions. Explore my portfolio to see my work and get in touch."
  },

  site: {
    url: "https://valentinchmara.com",
    name: "Valentin Chmara - Software Engineer",
  },

  schemaOrg: {
    reactive: true,
    identity: defineOrganization({
      name: "Supadev",
      logo: "https://supadev.fr/favicon.png",
    }),
  },

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-01",

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
