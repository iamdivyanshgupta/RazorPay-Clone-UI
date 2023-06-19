/** @type {import('tailwindcss').Config} */
module.exports = {
    'fontawesome-svg-core': 
    {'license': 'free'},
  

  content: ["*"],
  theme: {
    extend: {
      fontFamily: 
      {
        mullish: [ "MulishVariable", "sans-serif"],
       
      },
      colors: {
        deepBlue: "#02022a",
        lightblue100: "#4babfa",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76", 
        deepBlue2: "#181c2e",
        myblue: "#1056b4",
        

      },

    },
  },
  plugins: [],
  
}

