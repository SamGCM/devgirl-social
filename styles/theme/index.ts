import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            white: "#fff",
            white036: "rgba(255, 255, 255, 0.36)",
            white026: "rgba(255, 255, 255, 0.26)",
            white023: "rgba(255, 255, 255, 0.23)",
            black036: "rgba(11, 11, 11, 0.36)",
            black026: "rgba(11, 11, 11, 0.26)",
            black023: "rgba(11, 11, 11, 0.23)",

            blue: "#18A0FB",

            like: "#ED4956",

            gray500: "lightgray",
            gradient: "linear-gradient(to left, #ff00cc, #333399)",
        },
        fontWeights: {
            thin: 100,
            extraLight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900
        },
        decoration: {
            1: "underline"
        },
        shadows: {
            1: "0 0 0 1px rgba(0, 0, 0, 0.05)",
            2: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            3: "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            4: "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            5: "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            6: "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        },
        fontSizes: {
            1: "0.5rem",
            2: "0.75rem",
            3: "0.875rem",
            4: "1rem",
            5: "1.125rem",
            6: "1.25rem",
            7: "1.375rem",
            8: "1.5rem",
            9: "1.75rem",
            10: "1.875",
            11: "2rem",
        },
        space: {
            1: "0.25rem",
            2: "0.5rem",
            3: "1rem",
            4: "1.5rem",
            5: "2rem",
            6: "2.5rem",
            7: "3rem",
            8: "4rem",
            9: "8rem",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            3: "1rem",
            4: "2rem",
            5: "4rem",
            6: "8rem",
        },
        radii: {
            1: "0.125rem",
            2: "0.25rem",
            3: "0.5rem",
            4: "0.75rem",
            5: "2rem",
            6: "2.25rem",
            round: "50%",
        },
        borderWidths: {
            1: "0.063rem",
            2: "0.125rem",
            3: "0.188rem"
        },
        borderStyles: {
            solid: "solid",
            dotted: "dotted",
            dashed: "dashed"
        },

        media: {
            bp1: "(max-width: 375px)",
            bp2: "(max-width: 640px)",
            bp3: "(max-width: 768px)",
            bp4: "(max-width: 1024px)",
        },
    },
    utils: {
        m: (value: string) => ({
            margin: value,
        }),
        mt: (value: string) => ({
        marginTop: value,
        }),
        mr: (value: string) => ({
        marginRight: value,
        }),
        mb: (value: string) => ({
        marginBottom: value,
        }),
        ml: (value: string) => ({
        marginLeft: value,
        }),
        mx: (value: string) => ({
        marginLeft: value,
        marginRight: value,
        }),
        my: (value: string) => ({
        marginTop: value,
        marginBottom: value,
        }),
    }
});