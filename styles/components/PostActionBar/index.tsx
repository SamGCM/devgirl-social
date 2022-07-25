import { AiFillHeart, AiOutlineEdit } from "react-icons/ai"
import { GoCommentDiscussion } from "react-icons/go"
import { BiShareAlt } from "react-icons/bi"

import { theme } from "../../theme"
import { Box } from "../Box"
import { Wrap } from "../Wrap"
import { IconType } from "react-icons"
import { WrapItem } from "../WrapItem"
import { CountInteractions } from "../CountInteractions"
import { Center } from "../Center"
import Link from "next/link"
import { IPostActionBar } from "./interface"
import { useState } from "react"
import { likePost } from "../../../pages/api/post/likePost"
import { unlikePost } from "../../../pages/api/post/unlikePost"

const PostActionBar = ({
    shareData,
    data
}: IPostActionBar
): React.ReactElement => {

    const share = async () => {
        await navigator.share(shareData)
    }

    const [countLike, setCountLike] = useState(data.pt_likes)
    const [isLike, setIsLike] = useState(false)

    const incrementLike = () => {
        setCountLike(countLike + 1)
        likePost(data.pt_id)
        setIsLike(true)
    }
    const decrementLike = () => {
        setCountLike(countLike - 1)
        unlikePost(data.pt_id)
        setIsLike(false)
    }

    const handlerLike = () => isLike ? decrementLike() : incrementLike()
    
    const isEdit = (): JSX.Element => {
        return (
            <WrapItem>
                <AiOutlineEdit
                    size={22}
                    fill={theme.colors.white.value}
                />
            </WrapItem>
        )
    }

    return (
        <Box
            flex
            justify="end"
        >
            <Wrap
                justify="spaceBetween"
                spacingX="4"
            >
                
                <WrapItem>
                    <Center >
                        <AiFillHeart 
                            onClick={handlerLike}
                            size={22}
                            fill={isLike ? theme.colors.like.value : theme.colors.white.value}
                        />
                        <CountInteractions mx="2">
                            { countLike ?? data.pt_likes }
                        </CountInteractions>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href={"/post/" + data.pt_id}>
                            <GoCommentDiscussion
                                size={22}
                                fill={theme.colors.white.value}
                            />
                        </Link>
                        <CountInteractions mx="2">
                            { data.pt_comments }
                        </CountInteractions>
                    </Center>
                </WrapItem>
                <WrapItem onClick={share}>
                    <BiShareAlt
                        size={22}
                        fill={theme.colors.white.value}
                    />
                </WrapItem>
            </Wrap>
        </Box>
    )
}

export default PostActionBar