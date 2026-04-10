import { defineOrganization } from 'nuxt-schema-org/schema'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/content', '@vueuse/nuxt', '@nuxtjs/seo', 'motion-v/nuxt', 'nuxt-llms', '@nuxt/scripts', '@nuxt/fonts'],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://valentinchmara.com',
    name: 'Valentin Chmara - Software Engineer'
  },

  future: {
    compatibilityVersion: 5
  },

  experimental: { nitroAutoImports: true },

  compatibilityDate: 'latest',

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
      name: 'Qleer.ai',
      logo: 'https://app.qleer.ai/favicon.png'
    })
  },

  scripts: {
    registry: {
      databuddyAnalytics: {
        clientId: '7ef09b14-bd15-4d93-85db-5eae3d19c870',
        trackInteractions: true,
        trackEngagement: true,
        trackOutgoingLinks: true,
        trackScrollDepth: true,
        trackExitIntent: true,
        trackBounceRate: true,
        trackWebVitals: true,
        enableBatching: true
      }
    }
  }
})