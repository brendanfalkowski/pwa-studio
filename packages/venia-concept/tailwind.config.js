const venia = require('@magento/pwa-theme-venia');

const config = {
    mode: 'jit',
    // Include your custom theme here.
    presets: [venia],
    // Configure how Tailwind statically analyzes your code here.
    // Note that the Tailwind's `jit` mode doesn't actually use PurgeCSS.
    purge: {
        // Include paths to every file that may refer to Tailwind classnames.
        // Classnames not found in these files will be excluded at build time.
        content: [
            './node_modules/@magento/venia-ui/lib/**/*.module.css',
            '../venia-ui/lib/**/*.module.css',
            './src/**/*.module.css'
        ],
        // Extract Tailwind classnames from source files.
        // Our default matcher only matches targets of CSS Modules' `composes`,
        // not classnames included directly in HTML or JS!
        extractors: [
            {
                extensions: ['css'],
                extractor: content => content.match(matcher) || []
            }
        ]
    },
    // Set the character Tailwind uses when prefixing classnames with variants.
    // CSS Modules doesn't like Tailwind's default `:`, so we use `_`.
    separator: '_',
    theme: {
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '800px',
            'lg': '960px',
            'dreamOfNineties': '1024px', // TODO @TW: Need to resolve in scale
            'xl': '1120px',
            '2xl': '1280px',
            '3xl': '1440px',
            '4xl': '1600px',
            'max': '1920px'
        },
    }
};

module.exports = config;

/**
 * Matches declarations that contain tailwind classnames.
 * Only classnames matched by this expression will be included in the build.
 *
 * @example
 * .foo {
 *   composes: mx-auto from global;
 * }
 */
const matcher = /(?<=composes:.*)(\b\S+\b)(?=.*from global;)/g;
