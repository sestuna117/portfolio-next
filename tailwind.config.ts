import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "100vh": "100vh",
      },
      height: {
        "100vw": "100vw",
      },
      fontSize: {
        xxl: ["15rem", "16.25rem"],
      },
      fontFamily: {
        gunterz: ["var(--font-gunterz)"],
      },
      colors: {
        alto: "#dcdcdc",
        "heavy-metal": "#2c2e2b",
        "cod-gray": "#121212",
        "pastel-green": "#9ee478",
        atlantis: "#78D24A",
        malachite: "#12d52c",
      },
      transitionProperty: {
        "background-size": "background-size",
      },
      transitionDuration: {
        "400": "400ms",
      },
      transitionTimingFunction: {
        "slow-wipe": "cubic-bezier(0.98, 0.01, 0.15, 0.98)",
      },
      backgroundImage: {
        "black-bars-vertical":
          "-webkit-linear-gradient(black, black 15%, transparent 15%, transparent 85%, black 85%)",
        "black-bars-horizontal":
          "-webkit-linear-gradient(left, black, black 10%, transparent 10%, transparent 90%, black 90%)",
      },
      animation: {
        "grow-infinite": "grow-infinite 30s infinite",
      },
      keyframes: {
        "grow-infinite": {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities,
      matchUtilities,
      addComponents,
      e,
      theme,
    }) {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
      matchUtilities({
        "text-stroke": (value) => ({
          "-webkit-text-stroke-width": `${value}px`,
        }),
        "background-size-width": (value) => ({
          "-webkit-background-size": `${value} 100%`,
          "background-size": `${value} 100%`,
        }),
      });
      addUtilities({
        ".hollow-text": {
          color: "transparent",
          "text-stroke": "4px black",
          "-webkit-text-stroke": "4px black",
        },
        ".wipe": {
          "background-image": `linear-gradient(123deg, ${theme("colors.alto")} 0%, white 50%, transparent 50.1%)`,
          "-webkit-text-fill-color": "transparent",
          "-webkit-background-clip": "text",
          "background-repeat": "no-repeat",
        },
      });
      addComponents({
        ".wiper": {
          content: '""',
          height: "50vh",
          width: "100vw",
          position: "fixed",
          left: "0",
          "z-index": "1",
          background: theme("colors.alto"),
          transition: "all 0.5s ease-in-out",
        },
        ".wiper-on-b": {
          transform: "translateY(0) !important",
        },
        ".wiper-on-a": {
          transform: "translateY(-100%) !important",
        },
      });
    }),
  ],
};
export default config;
