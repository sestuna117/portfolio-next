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
      screens: {
        "mobile-m": "375px",
        fhd: "1980px",
        qhd: "2560px",
        "4k": "3840px",
        "8k": "7680px",
      },
      width: {
        "100vh": "100vh",
        inherit: "inherit",
      },
      height: {
        "100vw": "100vw",
        inherit: "inherit",
      },
      fontSize: {
        "10xl": ["12rem", "13.25rem"],
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
        heliotrope: "#a57ffb",
        deluge: "#745ea8",
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
      content: {
        empty: "''",
      },
      animation: {
        "grow-infinite": "grow-infinite 9s infinite",
        "glitch-flicker-1":
          "glitch-movement 8s step-end infinite, glitch-clip 4s step-end infinite, glitch-opacity 4s step-end infinite, glitch-font 5s step-end infinite",
        "glitch-flicker-2":
          "glitch-movement 10s step-end infinite, glitch-clip 4s step-end infinite, glitch-opacity 4s step-end infinite, glitch-font 6s step-end infinite",
        "glitch-clip": "glitch-clip 3s step-end infinite",
        "background-flicker": "background-flicker 0.5s step-end",
        "slide-down": "slide-down 1s cubic-bezier(.76,.21,.23,.8) forwards",
        "flicker-away": "flicker-away 0.5s forwards",
        "flicker-in": "flicker-in 0.5s forwards",
        "fade-in": "fade-in 1.5s forwards",
        "fade-out": "fade-out 0.25s forwards",
        "expand-spread": "expand-spread 1.5s infinite",
        "slide-design-line-1": "slide-design-line-1 0.5s forwards",
        "slide-design-line-2": "slide-design-line-2 0.25s forwards",
        "slide-design-line-1-exit": "slide-design-line-1-exit 1.25s forwards",
        "slide-design-line-2-exit": "slide-design-line-2-exit 1.25s forwards",
        "squish-vertical": "squish-vertical 0.15s forwards",
        "slide-text-up-right": "slide-text-up-right 0.55s forwards",
        "slide-up-body-line": "slide-up-body-line 0.75s forwards",
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
        "glitch-movement": {
          "0%": {
            top: "0px",
            left: "-20x",
          },
          "15%": {
            top: "10px",
            left: "10px",
          },
          "60%": {
            top: "5px",
            left: "-10px",
          },
          "75%": {
            top: "-5px",
            left: "20px",
          },
          "100%": {
            top: "10px",
            left: "5px",
          },
        },
        "glitch-opacity": {
          "0%": {
            opacity: "0.1",
          },
          "1%": {
            opacity: "0",
          },
          "5%": {
            opacity: "0.7",
          },
          "7%": {
            opacity: "0",
          },
          "30%": {
            opacity: "0.3",
          },
          "33%": {
            opacity: "0",
          },
          "45%": {
            opacity: "0.8",
          },
          "47%": {
            opacity: "0",
          },
          "76%": {
            opacity: "0.4",
          },
          "78%": {
            opacity: "0",
          },
          "90%": {
            opacity: "0.6",
          },
          "93%": {
            opacity: "0",
          },
        },
        "glitch-font": {
          "0%": {
            "font-weight": "100",
            filter: "blur(3px)",
          },
          "20%": {
            "font-weight": "500",
            filter: "blur(0)",
          },
          "50%": {
            "font-weight": "300",
            filter: "blur(2px)",
          },
          "60%": {
            "font-weight": "700",
            filter: "blur(0)",
          },
          "90%": {
            "font-weight": "500",
            filter: "blur(6px)",
          },
        },
        "glitch-clip": {
          "0%": {
            "clip-path":
              "polygon(0% 28%,28% 28%,28% 30%,47% 30%,47% 54%,93% 54%,93% 8%,12% 8%,12% 63%,16% 63%,16% 30%,22% 30%,22% 57%,86% 57%,86% 2%,74% 2%,74% 7%,42% 7%,42% 78%,45% 78%,45% 45%,8% 45%,8% 30%,17% 30%,17% 20%,6% 20%,6% 42%,67% 42%,67% 64%,18% 64%)",
          },
          "1%": {
            "clip-path": "none",
          },
          "5%": {
            "clip-path":
              "polygon(0% 80%,98% 80%,98% 44%,18% 44%,18% 83%,59% 83%,59% 97%,6% 97%,6% 48%,59% 48%,59% 85%,38% 85%,38% 12%,36% 12%,36% 86%,32% 86%,32% 20%,50% 20%,50% 89%,52% 89%,52% 90%,35% 90%,35% 51%,70% 51%,70% 27%,84% 27%,84% 38%,92% 38%,92% 43%,90% 43%,90% 10%,47% 10%,47% 11%,83% 11%,83% 80%,57% 80%,57% 63%,89% 63%,89% 56%,4% 56%,4% 52%,92% 52%,92% 70%,7% 70%,7% 60%,74% 60%,74% 74%,22% 74%,22% 32%,3% 32%,3% 37%,48% 37%,48% 77%,22% 77%,22% 77%,94% 77%,94% 31%,61% 31%,61% 10%)",
          },
          "7%": {
            "clip-path": "none",
          },
          "30%": {
            "clip-path":
              "polygon(0% 78%,14% 78%,14% 88%,78% 88%,78% 3%,92% 3%,92% 97%,81% 97%,81% 76%,10% 76%,10% 5%,37% 5%,37% 49%,5% 49%,5% 29%,45% 29%,45% 83%,62% 83%,62% 26%,61% 26%,61% 53%,7% 53%,7% 68%,71% 68%,71% 50%,59% 50%,59% 75%,53% 75%,53% 73%,65% 73%,65% 37%,54% 37%,54% 81%,29% 81%,29% 46%,94% 46%,94% 29%,70% 29%,70% 94%,41% 94%,41% 93%,14% 93%,14% 93%,30% 93%,30% 97%,56% 97%,56% 80%,56% 80%,56% 48%,11% 48%,11% 5%,12% 5%,12% 57%,14% 57%,14% 75%,67% 75%)",
          },
          "33%": {
            "clip-path": "none",
          },
          "45%": {
            "clip-path":
              "polygon(0% 86%,50% 86%,50% 25%,84% 25%,84% 52%,84% 52%,84% 40%,48% 40%,48% 56%,21% 56%,21% 63%,66% 63%,66% 89%,21% 89%,21% 92%,21% 92%,21% 49%,62% 49%,62% 42%,28% 42%)",
          },
          "47%": {
            "clip-path": "none",
          },
          "76%": {
            "clip-path":
              "polygon(0% 55%,56% 55%,56% 76%,87% 76%,87% 71%,41% 71%,41% 10%,72% 10%,72% 96%,15% 96%,15% 62%,46% 62%,46% 99%,8% 99%,8% 11%,69% 11%,69% 84%,9% 84%,9% 52%,7% 52%,7% 78%,81% 78%,81% 28%,27% 28%,27% 99%,39% 99%,39% 65%,34% 65%,34% 5%,70% 5%,70% 73%,22% 73%,22% 61%,10% 61%,10% 51%,46% 51%,46% 49%,48% 49%,48% 47%,35% 47%,35% 8%,67% 8%)",
          },
          "78%": {
            "clip-path": "none",
          },
          "90%": {
            "clip-path":
              "polygon(0% 12%,95% 12%,95% 4%,41% 4%,41% 59%,10% 59%,10% 72%,63% 72%,63% 7%,15% 7%,15% 30%,16% 30%,16% 54%,89% 54%,89% 55%,32% 55%,32% 99%,85% 99%,85% 39%,71% 39%,71% 96%,57% 96%,57% 36%,89% 36%,89% 57%,94% 57%,94% 16%,95% 16%,95% 43%,77% 43%,77% 97%,6% 97%,6% 34%)",
          },
          "93%": {
            "clip-path": "none",
          },
        },
        "background-flicker": {
          "0%": {
            "background-color": "white",
            "background-image": "none",
          },
          "10%": {
            "background-image":
              "-webkit-linear-gradient(black, black 15%, transparent 15%, transparent 85%, black 85%)",
            "background-color": "rgba(0, 0, 0, 0.4)",
          },
          "12%": {
            "background-color": "white",
            "background-image": "none",
          },
          "30%": {
            "background-image":
              "-webkit-linear-gradient(black, black 15%, transparent 15%, transparent 85%, black 85%)",
            "background-color": "rgba(0, 0, 0, 0.4)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        "flicker-away": {
          "0%": {
            opacity: "1",
          },
          "10%": {
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "60%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        "flicker-in": {
          "0%": {
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "20%": {
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "slide-design-line-1": {
          "0%": {
            transform: "translate(150vw, 5rem)",
          },
          "100%": {
            transform: "translate(0, 5rem)",
          },
        },
        "slide-design-line-2": {
          "0%": {
            transform: "translate(-100vw, -5rem)",
          },
          "100%": {
            transform: "translate(0, -5rem)",
          },
        },
        "slide-design-line-1-exit": {
          "0%": {
            transform: "translate(0, 5rem)",
          },
          "40%": {
            transform: "translateY(50vh)",
          },
          "100%": {
            transform: "translate(-150vw, 50vh)",
          },
        },
        "slide-design-line-2-exit": {
          "0%": {
            bottom: "0",
            transform: "translate(0, -5rem)",
          },
          "40%": {
            transform: "translateY(-50vh)",
          },
          "100%": {
            transform: "translate(150vw, -50vh)",
          },
        },
        "squish-vertical": {
          "0%": {
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(0)",
          },
        },
        "slide-text-up-right": {
          "0%": {
            transform: "translate(30vw, 20px)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "50%": {
            transform: "translate(30vw, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
        },
        "slide-up-body-line": {
          "0%": {
            transform: "translateY(100vh)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({
      theme,
      addUtilities,
      matchUtilities,
      addComponents,
      addVariant,
    }) {
      matchUtilities(
        {
          "corner-border": (value) => {
            return {
              background: `linear-gradient(to right, ${value} 4px, transparent 4px) 0 0,
                  linear-gradient(to right, ${value} 4px, transparent 4px) 0 100%,
                  linear-gradient(to left, ${value} 4px, transparent 4px) 100% 0,
                  linear-gradient(to left, ${value} 4px, transparent 4px) 100% 100%,
                  linear-gradient(to bottom, ${value} 4px, transparent 4px) 0 0,
                  linear-gradient(to bottom, ${value} 4px, transparent 4px) 100% 0,
                  linear-gradient(to top, ${value} 4px, transparent 4px) 0 100%,
                  linear-gradient(to top, ${value} 4px, transparent 4px) 100% 100%`,
              "background-repeat": "no-repeat",
              "background-size": "30px 30px",
            };
          },
        },
        {
          values: theme("colors"),
        },
      );
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
      matchUtilities(
        {
          "animation-duration": (value) => {
            return {
              "animation-duration": value,
            };
          },
        },
        {
          values: theme("transitionDuration"),
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
        "clip-path": (value) => ({
          "clip-path": `${value}`,
        }),
      });
      addUtilities({
        ".hollow-text": {
          color: "transparent",
          "text-stroke": "4px black",
          "-webkit-text-stroke": "4px black",
        },
        ".wipe": {
          "background-image": `linear-gradient(123deg, ${theme("colors.deluge")} 0%, ${theme("colors.heliotrope")} 20%, transparent 50.1%)`,
          "-webkit-text-fill-color": "transparent",
          "-webkit-background-clip": "text",
          "background-repeat": "no-repeat",
        },
        "backdrop-visibility-hidden": {
          "backdrop-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
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
