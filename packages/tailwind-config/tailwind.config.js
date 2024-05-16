/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // packages
    '../../packages/ui/components/**/*.{ts,tsx}',
    '../../packages/ui/src/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',

    // app folder
    './src/**/*.{ts,tsx}',
    './src/pages/**/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/components/**/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      "primary": "#10A0B6",
      "secondary": "#DCFFFB",
      "bgWhite": "#FAFFFF",
      "white": "#FFFFFF",
      "darkGray": "#565656",
      "lightGray": "#989898",
      "red": "#FF5454",
      "danger": "#D74726",
      "bgGray": "#EEEEEEBB",
      "black": "#000000",
      "blackVariant": "#212B36",
      "grayVariant": "#6B6B6B8D",
      "gray3": "#A098AE",
      "gray4": "#FBFBFB",
      "gray5": "#E5E7EB",
      "gray6": "#E6E8EC",
      "bgBlue": "#3056D3",
      "textVariant": "#303972",
      "lightRed": "#F7DAD4",
      "orange": "#F99C30",
      "lightOrange": "#FEEBD6",
      "purple": "#8D33AA",
      "lightPurple": "#E8D6EE",
      "lightGreen": "#D9EFD1",
      "green": "#42AE18",
      "lightBlue": "#E6E5FF",
      "completeBlue": "#6463D6",
      "lightPink": "#F6DAEC",
      "pink": "#D4469E"

    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}

