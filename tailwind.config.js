/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
    '/public/output.css'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

