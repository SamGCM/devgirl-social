import { AiFillHeart, AiOutlineEdit } from "react-icons/ai"
import { GoCommentDiscussion } from "react-icons/go"
import { BiShareAlt } from "react-icons/bi"


import { theme } from "../../theme"
import { Box } from "../Box"

const PostActionBar = () => {

    return (
        <Box
            flex
            justify="end"
        >
            <AiOutlineEdit
                size={22}
                fill={theme.colors.white.value}
            />
            <AiFillHeart 
                size={22}
                fill={theme.colors.white.value}
            />
            <GoCommentDiscussion
                size={22}
                fill={theme.colors.white.value}
            />
            <BiShareAlt
                size={22}
                fill={theme.colors.white.value}
            />
        </Box>
    )
}

export default PostActionBar