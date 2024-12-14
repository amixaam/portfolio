/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  useTabs: true,
  tabWidth: 4,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
