type Project = {
  src: string
  text: string
  link: {
    text: string
    url: string
  }
}

export const projects: Project[] = [
  {
    src: 'blitzmods.jpg',
    text: 'A modding platform where users can share, download, and review modifications.',
    link: {
      text: 'blitz-mods.com',
      url: 'https://blitz-mods.com',
    }
  },
  {
    src: 'portfolio.png',
    text: 'This portfolio.',
    link: {
      text: 'glebmiz.github.io/portfolio',
      url: 'https://glebmiz.github.io/portfolio'
    }
  },
]