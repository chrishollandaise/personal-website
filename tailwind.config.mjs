/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { scopedPreflightStyles } = require("tailwindcss-scoped-preflight");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  corePlugins: {
    preflight: false,
  },
  plugins: [
    scopedPreflightStyles({
      cssSelector: ".twp",
    }),
  ],
  important: true,
  theme: {
    screens: { xs: { max: "462px" }, ...defaultTheme.screens },
    extend: {},
  },
};
