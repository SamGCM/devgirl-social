import { styled } from "../../theme";
import { Box } from "../Box";

export const PostAndComments = styled(Box, {
    overflow: "hidden",
    overflowY: "auto",
    height: "70%",
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