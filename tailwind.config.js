import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",

                navbg: "#fdfdfe",
                container: '#fdfdfe',
                background: "#f8fafd",

                font: "#374b5c",
                'font-secondary': "#73818c",
                'primary-feature': "var(--primary-font-color)",

                darkest: "var(--dark-1000)",
                darker: "var(--dark-500)",
                label: "var(--dark-500)",
                "alt-label": "var(--alt-label)",
                dark: "var(--dark-100)",
                "secondary-light": "var(--secondary-light-color)",
                "primary-light" : "var(--primary-light-color)"

            },
        },
    },

    plugins: [forms],
};
