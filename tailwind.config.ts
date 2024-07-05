import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'full': '100% 100%',
      },
      backgroundPosition: {
        'custom-pos': '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px',
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 300deg at 50% 50%, hsl(198, 82%, 5%), hsl(265, 100%, 50%), hsl(333, 100%, 50%), hsl(265, 100%, 50%), hsl(198, 82%, 5%))',
      },
      colors: {
        hotPink: 'hsl(315, 100%, 50%)',
        darkPink: 'hsl(300, 100%, 35%);', 
        redPink: 'hsl(333, 100%, 50%)',
        lightPurple: 'hsl(265, 100%, 50%)',
        darkPurple: 'hsl(265, 100%, 35%)',
        darkBlue: 'hsl(198, 82%, 5%)',
      }
    },
  },
  plugins: [],
};
export default config;
