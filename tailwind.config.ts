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
      colors: {
        'alto': '#dcdcdc',
        'heavy-metal': '#2c2e2b',
        'cod-gray': '#121212',
        'pastel-green': '#9ee478',
        'atlantis': '#78D24A'
      },
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
        '.text-stroke': (value) => ({
          '-webkit-text-stroke-width': `${value}px`,
        }),
        '.content-value': (value) => ({
          'content': `${value} !important`
        })
      })
      addUtilities({
        '.hollow-text': {
          'color': 'alto',
          'text-stroke': '2px black',
          '-webkit-text-stroke': '2px black'
        },
        '.wipe': {
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'background-image': 'linear-gradient(123deg, white 0%, white 50%, transparent 50.1%)',
          '-webkit-background-size': '0 100%',
          'background-size': '0 100%',
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
          'background-repeat': 'no-repeat',
          '-webkit-transition': 'background-size 0.5s cubic-bezier(0.98, 0.01, 0.15, 0.98)', // this is the animation, background size updated
        },
        '.wipe-full': {
          '-webkit-background-size': '220% 100%',
          'background-size': '220% 100%',
        }

      })
    }),
  ],
};
export default config;
