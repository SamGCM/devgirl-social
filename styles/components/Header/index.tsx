import { Avatar } from "../Avatar"
import { Box } from "../Box"
import { ContainerHeader } from "./style"
import Profile from "../../assets/images/profile-1.jpg"
import { ProfileName } from "../ProfileName"
import { MdNotifications } from "react-icons/md"
import { theme } from "../../theme"
import { Divider } from "../Divider"

const Header = () => {

    return (
        <ContainerHeader>
            <Box
                flex
                align="center"
                justify="end"
                padding="1"
            >
                <Box
                    mx="4"
                    align="center"
                >
                    <MdNotifications
                        size={30}
                        color={theme.colors.white.value}
                    />
                </Box>
                <Avatar
                    width={50}
                    height={50}
                    src={Profile}
                />
                <ProfileName>
                    Nati
                </ProfileName>
            </Box>
            <Divider/>
        </ContainerHeader>
    )
}

export default Header