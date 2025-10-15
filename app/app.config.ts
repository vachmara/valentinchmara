export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://valentinchmara.com/avatar.png',
      light:
        'https://valentinchmara.com/avatar.png',
      alt: 'valentin Chmara'
    },
    meetingLink: 'https://cal.com/valentinchmara/30min',
    email: 'valentinchmara@gmail.com',
    available: false
  },
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/vachmara',
        'target': '_blank',
        'aria-label': 'Valentin Chmara on GitHub'
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/valentinchmara/',
        'target': '_blank',
        'aria-label': 'Valentin Chmara on LinkedIn'
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/vachmara',
        'target': '_blank',
        'aria-label': 'Valentin Chmara on X'
      }
    ]
  }
})
