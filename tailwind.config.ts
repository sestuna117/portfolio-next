import  { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'xxl': ['15rem', '15rem']
    },
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, matchUtilities, addComponents, e, config }) {
      matchUtilities({
        'text-stroke': (value) => ({
          '-webkit-text-stroke-width': `${value}px`,
        }),
      })
      addUtilities({
        '.hollow-text': {
          'color': 'transparent',
          'text-stroke': '2px black',
          '-webkit-text-stroke': '2px black'
        }
      })
    }),
  ],
};
export default config;
