//const aspectRatioPlugin = require('@tailwindcss/aspect-ratio');
const { getColors } = require('./lib/colors');
const corePlugin = require('./plugins');

const colors = {
    static: {
        black: '0 0 0',
        white: '255 255 255'
    },
    neutral: {
        min: '255 255 255',
        100: '250 250 250',
        200: '245 245 245',
        300: '235 235 235',
        400: '214 214 214',
        500: '184 184 184',
        600: '143 143 143',
        700: '102 102 102',
        800: '69 69 69',
        900: '61 61 61',
        1000: '41 41 41'
    },
    brand: {
        800: '69 69 69'
    }
};

const extend = {
    alignContent: {
        stretch: 'stretch'
    },
    backgroundColor: (theme) => ({
        base: theme('colors.neutral.min'),
        strong: theme('colors.neutral.800'),
        subtle: theme('colors.neutral.200')
    }),
    borderColor: (theme) => ({
        strong: theme('colors.neutral.800'),
        subtle: theme('colors.neutral.300')
    }),
    borderWidth: {
        DEFAULT: '1px'
    },
    flex: {
        textInput: '0 0 100%'
    },
    fontWeight: {
        DEFAULT: '300'
    },
    gridColumnEnd: {
        span1: 'span 1',
        span2: 'span 2'
    },
    gridTemplateColumns: {
        auto: 'auto',
        autoFirst: 'auto 1fr',
        autoLast: '1fr auto'
    },
    gridTemplateRows: {
        auto: 'auto',
        autoFirst: 'auto 1fr',
        autoLast: '1fr auto'
    },
    height: {
        fitContent: 'fit-content',
        minContent: 'min-content',
        unset: 'unset'
    },
    justifyContent: {
        stretch: 'stretch'
    },
    lineHeight: {
        DEFAULT: '1.5'
    },
    maxHeight: {
        modal: '90vh'
    },
    maxWidth: {
        modal: '360px',
        site: '1440px'
    },
    minHeight: {
        auto: 'auto'
    },
    minWidth: {
        auto: 'auto'
    },
    order: {
        'unset': 'unset'
    },
    spacing: {
        '2xs': '0.5rem',
        'xs': '1rem',
        'sm': '1.5rem',
        'md': '2rem',
        'lg': '3rem',
        'DEFAULT': '1.5rem',
        'full': '100%'
    },
    textColor: (theme) => ({
        DEFAULT: theme('colors.neutral.900')
    }),
    width: {
        fit: 'fit-content'
    },
    zIndex: {
        behind: '-1',
        surface: '1',
        foreground: '10',
        button: '20',
        buttonHover: '21',
        buttonFocus: '22',
        dropdown: '50',
        menu: '60',
        dialog: '70',
        toast: '80',
        loadingCover: '100'
    }
};

const theme = {
    // preserve defaults
    extend,
    // override defaults
    colors: getColors(colors),
    fontSize: {
        100: '0.625rem',
        200: '0.75rem',
        300: '0.875rem',
        400: '1rem',
        500: '1.25rem',
        600: '1.5rem',
        700: '2.125rem',
        800: '3rem',
        900: '3.75rem',
        1000: '6rem',
        DEFAULT: '0.875rem'
    },
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
    transitionDuration: {
        'xs': '64ms',
        'sm': '128ms',
        'md': '192ms',
        'lg': '256ms',
        'xl': '320ms',
        '2xl': '384ms',
        '3xl': '448ms',
        '4xl': '512ms',
        'DEFAULT': '384ms',
        'enter': '224ms',
        'exit': '192ms'
    },
    venia: (theme) => ({
        plugins: {
            body: {
                color: theme('colors.neutral.800')
            },
            root: {
                colors
            }
        }
    })
};

const config = {
    // plugins: [aspectRatioPlugin, corePlugin],
    plugins: [corePlugin],
    theme,
    variants: {
        extend: {
            textTransform: ['responsive'] // TODO @TW responsive: should be on by default but not working
        }
    }
};

module.exports = config;
