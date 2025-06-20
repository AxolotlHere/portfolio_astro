module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: [
      "./src/**/*.{html,js,ts,jsx,tsx,astro}",
      "./src/*.{html,js,ts,jsx,tsx,astro}",
      // Add any other file patterns you use
    ],
  },
  theme: {
    extend: {
      // Add any custom theme extensions here
      fontFamily: {
        clash: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("taos/plugin"),
    // Add any other plugins here
  ],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
    // Add TAOS animation classes to safelist
    {
      pattern: /taos:.*/,
    },
  ],
};
