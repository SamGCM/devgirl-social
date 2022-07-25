import { Box } from "../Box"
import PostActionBar from "../PostActionBar"
import { PostDescription } from "../PostDescription"
import { PostTitle } from "../PostTitle"
import PostUser from "../PostUser"
import { IPostOpen } from "./interface"
import ImgDefault from "../../assets/images/profile-1.jpg"

const PostOpen = ({
    data
}: IPostOpen
): React.ReactElement => {

    const shareData = {
        title: data.pt_title,
        text: data.pt_description,
        url: window.location.href
    }

    return (
        <Box
            background={4}
            flex
            flexDirection="column"
            padding="1"
            radius="3"
        >
            {
                data.wr_photoURL
                ? <PostUser
                        imgProfile={data.wr_photoURL}
                        name={data.wr_displayName}
                        variant="PostOpen"
                    />
                : <PostUser
                        imgProfile={ImgDefault.src}
                        name={data.wr_displayName}
                        variant="PostOpen"
                    />
            }
                
            <Box
                dimensions="max"
            >
                <PostTitle>
                    { data.pt_title }
                </PostTitle>
                <PostDescription>
                    { data.pt_text }
                </PostDescription>
                <PostActionBar
                    data={data}
                    shareData={shareData}
                />
            </Box>
        </Box>
    )
}

export default PostOpen