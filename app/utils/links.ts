import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: 'Blog',
    icon: 'i-lucide-file-text',
    to: '/blog'
  },
  {
    label: 'Speaking',
    icon: 'i-lucide-mic',
    to: '/speaking'
  },
  {
    label: 'About',
    icon: 'i-lucide-user',
    to: '/about'
  },
  {
    label: 'Projects',
    icon: 'i-lucide-folder',
    target: '_blank',
    to: 'https://supadev.fr/en/projects'
  },
  {
    label: 'My PRs',
    icon: 'i-lucide-git-pull-request',
    to: 'https://prs.valentinchmara.com',
    target: '_blank'
  }
]
