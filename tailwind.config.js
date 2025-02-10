module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warning: '#d4a406',
        primary: '#4C51BF', // Primary color (Blue)
        secondary: '#F59E0B', // Accent (Yellow)
        darkBg: '#2D3748', // Dark background for sections
        lightBg: '#F7FAFC', // Light background for sections
        footerBg: '#1A202C', // Dark background for footer
        footerText: '#00bcd4', // Footer text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
