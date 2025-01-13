module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblueprimary: '#07020D',
        darkbluesecondary: 'rgba(07,02,13,0.9)',
        redprimary: '#C73E1D',
        pinkprimary: '#DB5461',
        pinksecondary: {
          100: '#FFBF94',
          200: '#ED9572',
          300: '#F97A7A',
          400: '#EF5B7B',
          500: '#DB5461',
        },
        yellowprimary: '#F3B218',
        blueprimary: '#0A717F',
        bluesecondary: '#C7EFCF',
        grayprimary: '#F2F2F2',
        graysecondary: {
          100: '#C4C4C4',
          200: '#979797',
          300: '#716B70',
        },
        facebook: '#4267B2',
        twitter: '#1DA1F2',
        youtube: '#FF0000',
      },
      fontFamily: {
        title: ['Inter']
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/public/img/heroscreen/background.jpg')",
        'about-screen': "url('/public/img/heroscreen/about.jpg')",
        'hero-image': "linear-gradient(to right, rgba(219,84,97,0.6), rgba(199,62,29,0.3)), url('/public/img/heroscreen/background.jpg')",
        'about-vision': "linear-gradient(to right, rgba(243,178,24,1.0), rgba(243,178,24,0.83))",
        'project-image_wash': "url('/public/img/projects/1_proj_small.jpg')",
        'background_1024': "linear-gradient(to right, rgba(219,84,97,0.6), rgba(199,62,29,0.3)), url('/public/img/heroscreen/background_1024.jpg')",
        'background_768': "linear-gradient(to right, rgba(219,84,97,0.6), rgba(199,62,29,0.3)), url('/public/img/heroscreen/background_768.jpg')",
      }),
      display: ['hover', 'block'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
