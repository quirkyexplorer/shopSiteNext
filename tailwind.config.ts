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
        'new-pos': 'center center',
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 300deg at 50% 50%, hsl(198, 82%, 5%), hsl(265, 100%, 50%), hsl(333, 100%, 50%), hsl(265, 100%, 50%), hsl(198, 82%, 5%))',
        'carousel-gradient': `linear-gradient(calc(180deg - 20deg), transparent 0%, transparent 70%, hsl(265, 100%, 50%) 50%, hsl(198, 82%, 5%) 100%),
        linear-gradient(calc(180deg - 20deg), transparent 0%, transparent 50%, hsl(265, 100%, 35%) 50%, hsl(198, 82%, 5%) 100%)`,
        'editPage-gradient' : 'conic-gradient( from 180deg at 50% 50%,hsl(300, 100%, 35%), hsl(315, 100%, 50%), hsl(333, 100%, 50%), hsl(315, 100%, 50%), hsl(300, 100%, 35%))'
      },

      colors: {
        hotPink: 'hsl(315, 100%, 50%)',
        darkPink: 'hsl(300, 100%, 35%);', 
        redPink: 'hsl(333, 100%, 50%)',
        lightPurple: 'hsl(265, 100%, 50%)',
        darkPurple: 'hsl(265, 100%, 35%)',
        darkBlue: 'hsl(198, 82%, 5%)',
        teal: 'hsl(171, 100%, 49%)',
      }
    },
  },
  plugins: [],
};
export default config;
