/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-theme-color": "#45f882",
        "main-theme-dark": "#0d0d16",
        "main-theme-background": "#161620",

        "main-orange": "#ea580c",
        "main-gray": "#292524",
        "main-white": "#fafafa",
        "main-gray-text": "##a1a1aa",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "main-green": "#45f882",
        "main-dim-green": "#47bf85",

        "main-yellow-rarity": "#fe8b00",
        "main-purple-rarity": "#a91dff",

        "main-wild-hunt": "#36e8f0",
        "main-coronet": "#ff763e",
        "main-solstice": "#fdff45",
        "main-swift": "#c35c32",
        "main-kaguya": "#18efc1",
        "main-absconditus": "#ff3636",

        "main-shadow-ka": "#FFBF00",

        "main-hush": "#f4713e",
        "main-ethereal-cloud": "#ff4141",
        "main-wednesday": "#88e4ff",
        "main-lionheart": "#91ff77",
        "main-redacted": "#d76cff",
        "main-little-subshine": "#ff87dd",
        "main-the-ace": "#3282ff",
        "main-hands": "#ffc040",
        "main-queen-of-pain": "#ffde84",
        "main-those-two": "#7f7cff",
        "main-quiet-quitter": "#3c88fe",
        "main-big-sis": "#905aff",
        "main-kitty": "#ffb07a",
        "main-observer": "#ff266a",
        "main-goldfish": "#ffdf27",
      },
      backgroundImage: {
        hero: "url('../public/WednesdaySplash.png')",

        LyfeBg: "url('/charImages/WildHuntSplash.webp')",
        // FennyBg: "url('../public/backgroundImages/FennyBg.png')",
        // MarianSBg: "url('../public/backgroundImages/MarianSBg.jpg')",
        // YaoWSBg: "url('../public/backgroundImages/YaoWSBg.jpg')",
        // FritiaHBg: "url('../public/backgroundImages/FritiaHBg.jpg')",
        // AcaciaKBg: "url('../public/backgroundImages/AcaciaKBg.jpg')",

        bigSis: "url('../public/charImages/BigSisSplash.webp')",
      },
    },
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            primary: "#ef4444",
            secondary: "#f6d860",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        {
          dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            primary: "#00c3ff",
            secondary: "#002cff",
            accent: "#00b2ff",
            neutral: "#161620",
            "base-100": "#161620",
            info: "#00efff",
            success: "#00a276",
            warning: "#ffb900",
            error: "#e5274e",
          },
        },
      ],
      logs: false,
    },
  },
  plugins: [require("daisyui")],
};
