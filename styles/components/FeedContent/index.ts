import { styled } from "../../theme";

export const FeedContent = styled("div", {
    overflow: "hidden",
    overflowY: "auto",
    background: "$black036",
    width: "100%",
    maxHeight: "74vh",
    padding: "$3",
    borderBottomRightRadius: "$6",
    "&::-webkit-scrollbar": {
        width: "$2"
    },
    "&::-webkit-scrollbar-track": {
        background: "$white023",
    },
    "&::-webkit-scrollbar-thumb": {
        background: "$white036",
        borderRadius: "$6"
    },
})