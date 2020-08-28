const globalInterval = 8

export const Theme = {
  getSpacing: amount => `${amount * globalInterval}px`,
  colors: {
    group: '#4FBFA5',
    defaultText: '#928483',
    link: '#4FBFA5',
    inactive: '#666',
    empty: '#FFF',
    portal: {
      zap: '#FFF',
      viva: '#1190CD'
    }
  },
  props: {
    shadow: 'box-shadow: 0px 5px 15px rgba(0, 0, 0, .25);'
  },
  breakpoints: {
    medium: data => `
      @media(min-width: 768px){${data}}
    `,
    wide: data => `
      @media(min-width: 1200px){${data}}
    `
  }
}