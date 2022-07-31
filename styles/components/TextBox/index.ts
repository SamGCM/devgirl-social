import { styled } from "../../theme";

export const TextBox = styled("textarea", {
    outline: "none",
    background: "$white026",
    borderRadius: "$5",
    height: "$5",
    padding: "$3",
    color: "$white",
    fontSize: "$4",
    resize: "none",
    variants: {
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
        }
    }
})