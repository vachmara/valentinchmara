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
    to: 'https://www.agence-swai.com/projets'
  },
  {
    label: 'My PRs',
    icon: 'i-lucide-git-pull-request',
    class: 'hidden md:block',
    to: 'https://prs.valentinchmara.com',
    target: '_blank'
  }
]
