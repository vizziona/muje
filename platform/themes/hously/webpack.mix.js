const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const path = require('path');

// Define the theme directory name
const directory = path.basename(path.resolve(__dirname));

// Define source and distribution paths
const source = `platform/themes/${directory}`;
const dist = `public/themes/${directory}`;

// Compile SCSS to CSS
mix
    .sass(`${source}/assets/sass/icons.scss`, `${dist}/css/icons.css`)
    .sass(`${source}/assets/sass/style.scss`, `${dist}/css/style.css`, {}, [ 
        tailwindcss(`${source}/tailwind.config.js`),
    ]);

// Compile JavaScript files
mix
    .js(`${source}/assets/js/app.js`, `${dist}/js/app.js`)
    .js(`${source}/assets/js/wishlist.js`, `${dist}/js/wishlist.js`)
    .js(`${source}/assets/js/filter.js`, `${dist}/js/filter.js`)
    .js(`${source}/assets/js/review.js`, `${dist}/js/review.js`)
    .js(`${source}/assets/js/script.js`, `${dist}/js/script.js`);

// Production-specific tasks
if (mix.inProduction()) {
    mix
        // Copy compiled CSS and JS files back to the source directory (if needed)
        .copy(`${dist}/css/style.css`, `${source}/public/css/style.css`)
        .copy(`${dist}/js/app.js`, `${source}/public/js/app.js`)
        .copy(`${dist}/js/wishlist.js`, `${source}/public/js/wishlist.js`)
        .copy(`${dist}/js/filter.js`, `${source}/public/js/filter.js`)
        .copy(`${dist}/js/review.js`, `${source}/public/js/review.js`)
        .copy(`${dist}/js/script.js`, `${source}/public/js/script.js`);
}