import { styled } from "../../theme";

export const SideBarItem = styled("li", {
    variants: {
        variant: {
            title: {
                color: "$white023"
            },
            item: {
                color: "$white",
                paddingLeft: "$3",
                cursor: "pointer"
            }
        }
    },
    defaultVariants: {
        variant: "item"
    }
})