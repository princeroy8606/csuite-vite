/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "var(--bg-light-gray)",
        'card-bg-blue': 'var(--card-bg-blue)',
      },
      boxShadow: {
        'custom': "1px 1px 20px 15px #d4d9e1",
      },
    },
  },
  plugins: [],
};
