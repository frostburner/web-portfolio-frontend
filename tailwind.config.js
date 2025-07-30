/** @type {import('tailwindcss').Config;} */
export default {
  content: [    
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        body: "#1A1A1A",
      }
    }

},
    plugins: [],
}
  