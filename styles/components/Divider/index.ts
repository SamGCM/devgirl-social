import { styled } from "../../theme";

export const Divider = styled("div", {
    background: "$white036",
    height: "2px",
    variants: {
        size: {
            max: {
                width: "100%"
            },
            500: {
                width: "50%"
            }
        }
    }
})