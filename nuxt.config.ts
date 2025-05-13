import { defineOrganization } from 'nuxt-schema-org/schema'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    'motion-v/nuxt',
    'nuxt-llms',
    'nuxt-umami'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://valentinchmara.com',
    name: 'Valentin Chmara - Software Engineer'
  },
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  llms: {
    domain: 'https://valentinchmara.com',
    title: 'Valentin Chmara - Software Engineer',
    description:
      'Welcome to my website! I\'m a Software Engineer with a passion for building innovative solutions. Explore my portfolio to see my work and get in touch.'
  },

  schemaOrg: {
    reactive: true,
    identity: defineOrganization({
      name: 'Supadev',
      logo: 'https://supadev.fr/favicon.png'
    })
  },
  umami: {
    id: '7bc2690f-e441-4e2b-819c-a9c11ee202b8',
    host: 'https://cloud.umami.is',
    autoTrack: true
  }
})
