module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'left': 'left',
      },
      colors: {
        blue: {
          lighter: '#6679A5',
          light: '#4B4D70',
          dark: '#3F4164',
          sky: '#373A75'
        },
        brown: {
          bg: '#F3EFEA',
          light: '#F9F9F9',
          DEFAULT: '#CC9F81'
        },
        gray: {
          lighter: '#F5F7F7',
          light: '#DCDCDC',
          DEFAULT: '#CFD8D9',
          dark: '#979797',
          darker: '#596061',
          normal: '#EDEDED'
        },
        green: {
          light: '#E8EDEC',
          DEFAULT: '#CFD8D9'
        },
        alert: {
          green: '#7FC0B1',
        },
        plan: {
          blue: '#CFD8D9',
          gray: '#879091',
          brown: '#CC9F81',
          pink: '#FEDACD',
          green: '#7C8673',
          sky: '#C6E5F7',
        },
        red: {
          DEFAULT: '#CE2B34'
        },
        white: {
          DEFAULT: '#FFF'
        },
      },
      fontFamily: {
        dm: ['Arimo'],
      },
      fontSize: {
        'xxs': '.6rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        'great': '2.719rem',
        'giant': '4.657rem', 
        'sub-title': '1.25rem',
        'sub-title-web': '1.75rem',
        'paragraph': '0.938rem',
        'menu': '1.1313rem',
        'arrow': '1.063rem',
        'dashboard': '1.688rem',
        'number': '2.592rem',
        'bigbread': '1.313rem'
      }
    },
  },
  plugins: [
    
  ],
}
