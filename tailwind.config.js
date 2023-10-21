/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minWidth: {
      '1/6': '16.7%',
      'side':'17.5rem'
      
    },
    maxWidth:{
      'sidebar':'17.5rem'
    },
    extend: {
      colors:{
        'dark-violet':"#635FC7",
        'light-violet':"#A8A4FF",
        'dark-black':"#000112",
        'light-black':"#20212C",
        'dark-brown':"#2B2C37",
        'ligh-brown':"#3E3F4E",
        'dark-gray':"#828FA3",
        'light-gray':"#E4EBFA",
        'light-white':"#F4F7FD",
        'dark-red':"#EA5555",
        'light-red':"#FF9898"

      },
      spacing: {
        'side': '17.5rem',
        'nav':'10%',
        'board':'90%',
        'box':'17rem'
      },
      fontFamily:{
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

