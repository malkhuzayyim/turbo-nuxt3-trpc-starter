/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  content: [
    // `${srcDir}/components/**/*.{vue,js,ts}`,
  ],
  daisyui: {
    // defaults commented out
    // base: true,
    // styled: true,
    // utils: true,
    // darkTheme: "dark",
    // logs: true,
    rtl: true,
    prefix: "d-",
    themes: ["light", "dark", "night"],
  },
};
