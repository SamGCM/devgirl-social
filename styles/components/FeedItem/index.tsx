import { Box } from "../Box"
import PostActionBar from "../PostActionBar"
import { PostDescription } from "../PostDescription"
import { PostTitle } from "../PostTitle"
import PostUser from "../PostUser"

const FeedItem = () => {

    return (
        <Box
            background={4}
            flex
            padding="2"
            radius="3"
        >
            <PostUser
                imgProfile=""
                name=""
            />
            <Box
                dimensions="max"
            >
                <PostTitle>
                    O que é burnout e como se cuidar?
                </PostTitle>
                <PostDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto alias debitis animi quibusdam ea maxime sint atque ullam aspernatur est nemo ipsum eos amet earum aperiam vero, eveniet quia?
                </PostDescription>
                <PostActionBar/>
            </Box>
        </Box>
    )
}

export default FeedItem