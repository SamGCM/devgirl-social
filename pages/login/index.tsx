import { Background, Box, Input, Label } from "../../styles/components"
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa"
import { theme } from "../../styles/theme"
import { Divider } from "../../styles/components/Divider"
import { Button } from "../../styles/components/Button"
import Router from "next/router"
const Login = () => {

    const iconsSocial = [
        FaGoogle, FaApple, FaGithub
    ]

    const renderIcons = (): React.ReactElement[] => {
        return iconsSocial.map((Icon: any) => {
            return (
                <Box
                    mx="6"
                >
                    <Icon  
                        size={24}
                        color={theme.colors.white.value}
                    />
                </Box>
            )
        })
    }

    const renderContentLogin = () => {
        return (
            <Box 
                background={"3"}
                padding="1"
                radius="3"
                align="center"
                flex
                justify="center"
                flexDirection="column"
                dimensions="loginContainer"
            >
                <Box
                    margin="3"
                    flex
                >
                    { renderIcons() }
                </Box>
                <Divider size="500" />
                <Box
                    align="center"
                    flex
                    justify="center"
                    flexDirection="column"
                    margin="3"
                >
                    <Box
                        align="start"
                        flex
                        justify="center"
                        flexDirection="column"
                        margin="3"
                    >
                        <Label>
                            Email:
                        </Label>
                        <Input/>
                    </Box>
                    <Box
                        align="start"
                        flex
                        justify="center"
                        flexDirection="column"
                        margin="3"
                    >
                        <Label>
                            Senha:
                        </Label>
                        <Input/>
                    </Box>
                </Box>
                <Box
                    align="center"
                    flex
                    justify="center"
                    flexDirection="column"
                    margin="3"
                >
                    <Box
                        margin="3"
                    >
                        <Button
                            size="medium"
                            type="filled"
                        >
                            Entrar
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            size="medium"
                            type="text"
                            onClick={() => {
                                Router.push("/register")
                            }}
                        >
                            Cadastrar
                        </Button>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <>
            <Background>
                { renderContentLogin() }
            </Background>
        </>
    )
}

export default Login