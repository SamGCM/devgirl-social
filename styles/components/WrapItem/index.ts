import { styled } from "../../theme";

export const WrapItem = styled("li", {
    variants: {
        padding: {
            1: {
                padding: "$3"
            },
            2: {
                padding: "$4"
            },
            3: {
                padding: "$5"
            },
            4: {
                padding: "$6"
            },
            5: {
                padding: "$9"
            },
        },
        margin: {
            1: {
                margin: "$1",
            },
            2: {
                margin: "$2"
            },
            3: {
                margin: "$3"
            }
        },
        mx: {
            1: {
                mx: "$1"
            },
            2: {
                mx: "$2"
            },
            3: {
                mx: "$3"
            },
            4: {
                mx: "$4"
            },
            5: {
                mx: "$5"
            },
            6: {
                mx: "$6"
            }
        },
        my: {
            1: {
                my: "$1"
            },
            2: {
                my: "$2"
            },
            3: {
                my: "$3"
            },
            4: {
                my: "$4"
            },
            5: {
                my: "$5"
            },
            6: {
                my: "$6"
            }
        },
    }
})