import { definePerson } from 'nuxt-schema-org/schema'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/content', '@vueuse/nuxt', '@nuxtjs/seo', 'motion-v/nuxt', 'nuxt-llms', '@nuxt/scripts', '@nuxt/fonts'],

  $production: {
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
          enableBatching: true,
          scriptOptions: {
            trigger: 'onNuxtReady'
          }
        }
      }
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://valentinchmara.com',
    name: 'Valentin Chmara - Co-founder & CTO at Qleer'
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
    title: 'Valentin Chmara - Co-founder & CTO at Qleer',
    description:
      'I\'m Valentin Chmara, Co-founder and CTO at Qleer. I build AI products, contribute to open source, and share what I learn along the way.'
  },

  ogImage: {
    zeroRuntime: true
  },

  schemaOrg: {
    reactive: true,
    identity: definePerson({
      name: 'Valentin Chmara',
      image: '/avatar.png',
      description: 'Co-founder and CTO at Qleer, building AI software for the Testing, Inspection & Certification industry.',
      url: 'https://valentinchmara.com',
      jobTitle: 'Co-founder and CTO',
      worksFor: 'Qleer.ai',
      sameAs: [
        'https://www.linkedin.com/in/valentinchmara/',
        'https://github.com/vachmara',
        'https://x.com/vachmara'
      ]
    })
  }
})
