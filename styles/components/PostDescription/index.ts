import { styled } from "../../theme";

export const PostDescription = styled("p",{
    color: "$white",
    wordBreak: "break-word",
    margin: "0px",
    variants: {
        marginBottom: {
            3: {
                marginBottom: "$3"
            }
        },
        marginLeft: {
            7: {
                marginLeft: "$7"
            }
        },
    },
    defaultVariants:{
        marginBottom: "3"
    }
})