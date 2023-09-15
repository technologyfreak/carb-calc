const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient-to-t,.text-gradient-to-tr,.text-gradient-to-r,.text-gradient-to-br,.text-gradient-to-b,.text-gradient-to-bl,.text-gradient-to-l,.text-gradient-to-tl":
          {
            color: "transparent",
            "background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "-webkit-background-clip": "text",
          },
        ".text-gradient-to-t": {
          "background-image":
            "linear-gradient(to top, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-tr": {
          "background-image":
            "linear-gradient(to top right, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-r": {
          "background-image":
            "linear-gradient(to right, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-br": {
          "background-image":
            "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-b": {
          "background-image":
            "linear-gradient(to bottom, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-bl": {
          "background-image":
            "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-l": {
          "background-image":
            "linear-gradient(to left, var(--tw-gradient-stops))",
        },
        ".text-gradient-to-tl": {
          "background-image":
            "linear-gradient(to top left, var(--tw-gradient-stops))",
        },
      });
    }),
  ],
};
