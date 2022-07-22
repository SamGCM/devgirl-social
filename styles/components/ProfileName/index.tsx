import { styled } from "../../theme";

export const ProfileName = styled("h2", {
    marginLeft: "$4",
    color: "$white",
    variants: {
        size: {
            1: {
                fontSize: "$2"
            },
            2: {
                fontSize: "$3"
            },
            3: {
                fontSize: "$5"
            },
            4: {
                fontSize: "$7"
            }
        },
        mx: {
            1: {
                margin: "0 $1",
            },
            2: {
                margin: "0 $2"
            },
            3: {
                margin: "0 $3"
            },
            4: {
                margin: "0 $4",
            },
            5: {
                margin: "0 $5"
            },
            6: {
                margin: "0 $6"
            }
        },
        my: {
            1: {
                margin: "$1 0",
            },
            2: {
                margin: "$2 0"
            },
            3: {
                margin: "$3 0"
            },
            4: {
                margin: "$4 0",
            },
            5: {
                margin: "$5 0"
            },
            6: {
                margin: "$6 0"
            }
        },
    },
    defaultVariants: {
        size: "4"
    }
})