import { Avatar } from "../Avatar"
import { IPostUser } from "./interface"
import Profile from "../../assets/images/profile-1.jpg"
import { ProfileName } from "../ProfileName"
import { Box } from "../Box"

const PostUser = ({
    imgProfile,
    name
}: IPostUser) => {

    return (
        <Box
            flex
            flexDirection="column"
            align="center"
        >
            <Avatar
                src={Profile}
                width={80}
                height={80}
            />
            <ProfileName
                my="2"
                size="3"
            >
                Nati
            </ProfileName>
        </Box>
    )
}

export default PostUser