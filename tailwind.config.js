/*
 * Copyright (c) 2021 Your Company Name
 * All rights reserved.
 */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme =>({
        "card":"url('/img/Classroom.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
