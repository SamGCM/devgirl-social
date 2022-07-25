import React from "react";
import { styled } from "../../theme";

export const Button = styled("button", {
    cursor: "pointer",
    fontWeight: "$semiBold",
    variants: {
        variant: {
            filled: {
                background: "$blue",
                color: "$white"
            },
            text: {
                background: "transparent",
                color: "$white"
            }
        },
        size: {
            small: {
                padding: "$1 $2",
                fontSize: "$2"
            },
            medium: {
                padding: "$2 $4",
                fontSize: "$4"
            }
        },
        radius: {
            1: {
                borderRadius: "$1"
            },
            2: {
                borderRadius: "$2"
            },
            3: {
                borderRadius: "$3"
            },
            4: {
                borderRadius: "$4"
            },
            5: {
                borderRadius: "$5"
            },
            6: {
                borderRadius: "$6"
            },
            round: {
                borderRadius: "$round"
            }
        }
    },
    defaultVariants: {
        radius: "5"
    }
})