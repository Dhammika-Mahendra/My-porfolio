/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
          GreyHeader: '#718e8f',
          BlackHeader: '#1a1a1a',
          WhiteHeader: '#f5f7f6',
          NavTopics: '#5f5f5f',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'], 
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'], 
        '4xl': ['36px', '44px'],
        '8xl': ['64px', '72px'],
      },
      screens: {
        //Breakpoints................
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px #ff0000',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px #ff0000',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
