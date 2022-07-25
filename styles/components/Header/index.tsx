import { Avatar } from "../Avatar"
import { Box } from "../Box"
import { ContainerHeader } from "./style"
import { ProfileName } from "../ProfileName"
import { MdNotifications } from "react-icons/md"
import { theme } from "../../theme"
import { Divider } from "../Divider"
import { useAppSelector } from "../../../hooks"
import { IUser } from "../../../interfaces/user"

const Header = () => {

    const user: IUser = useAppSelector((state) => state.user)

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
                    src={user.photoUrl as string}
                />
                <ProfileName>
                    { user.displayName }
                </ProfileName>
            </Box>
            <Divider/>
        </ContainerHeader>
    )
}

export default Header