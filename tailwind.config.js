/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(240, 10%, 3.9%)',
        card: 'hsl(0, 0%, 100%)',
        cardForeground: 'hsl(240, 10%, 3.9%)',
        popover: 'hsl(0, 0%, 100%)',
        popoverForeground: 'hsl(240, 10%, 3.9%)',
        primary: 'hsl(240, 5.9%, 10%)',
        primaryForeground: 'hsl(0, 0%, 98%)',
        secondary: 'hsl(240, 4.8%, 95.9%)',
        secondaryForeground: 'hsl(240, 5.9%, 10%)',
        muted: 'hsl(240, 4.8%, 95.9%)',
        mutedForeground: 'hsl(240, 3.8%, 45%)',
        accent: 'hsl(240, 4.8%, 95.9%)',
        accentForeground: 'hsl(240, 5.9%, 10%)',
        destructive: 'hsl(0, 72%, 51%)',
        destructiveForeground: 'hsl(0, 0%, 98%)',
        border: 'hsl(240, 5.9%, 90%)',
        input: 'hsl(240, 5.9%, 90%)',
        ring: 'hsl(240, 5.9%, 10%)',
      },
      fontFamily: {
        body: ['Arial', 'sans-serif'],
        heading: ['Georgia', 'serif'],
      },
      borderColor: theme => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [require('tailwindcss-animate')],
}
