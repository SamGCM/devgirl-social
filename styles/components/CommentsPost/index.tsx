import { Box } from "../Box"
import PostUser from "../PostUser"
import { ICommentsPost } from "./interface"
import Profile from "../../assets/images/profile-1.jpg"
import { useEffect, useState } from "react"
import { BoxText } from "../BoxText"
import { Avatar } from "../Avatar"
import { ProfileName } from "../ProfileName"

const CommentsPost = ({
    data
}: ICommentsPost) => {

    const [srcImage, setSrcImage] = useState(Profile.src)

    useEffect(() => {
        data.wr_photoURL
            && data.wr_photoURL.length > 0 
            && setSrcImage(data.wr_photoURL)
    },[])

    return (
        <Box
            background={4}
            flex
            padding="1"
            margin="3"
            radius="3"
        >
            <Box
                flex
                flexDirection="row"
                align="center"
                justify="start"
            >
                <Avatar
                    src={srcImage}
                    width={60}
                    height={60}
                />
                <ProfileName
                    mx="3"
                    size="3"
                >
                    { data.wr_displayName }
                </ProfileName>
            </Box>
            
            <BoxText
                
            >
                { data.cm_text }
            </BoxText>
        </Box>
    )
}

export default CommentsPost