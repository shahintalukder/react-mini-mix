/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/TextRepeat/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: ["dark"]
    },

    //plugins: []
    plugins: [require("daisyui")]
};
