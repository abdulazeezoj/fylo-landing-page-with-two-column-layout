module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(243, 87%, 12%)',
        'desaturated-blue': 'hsl(238, 22%, 44%)',
        'bright-blue': 'hsl(224, 93%, 58%)',
        'moderate-cyan': 'hsl(170, 45%, 43%)',
        'light-grayish-blue': 'hsl(240, 75%, 98%)',
        'light-gray': 'hsl(0, 0 %, 75 %)'
      },
      fontFamily: {
        heading: ['Raleway', 'Arial'],
        cta: ['Raleway', 'Arial'],
        'header-nav': ['Raleway', 'Arial'],
        body: ['"Open Sans"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
