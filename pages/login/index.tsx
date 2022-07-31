import { Background, Box, Input, Label } from "../../styles/components"
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa"
import { theme } from "../../styles/theme"
import { Divider } from "../../styles/components/Divider"
import { Button } from "../../styles/components/Button"
import Router from "next/router"
import authGoogle from "../api/auth/google"
import authGithub from "../api/auth/github"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { userReset, userUpdate } from "../../redux/actions/users"
import { IUser } from "../../interfaces/user"
import { useEffect } from "react"
const Login = () => {

    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(user.uid !== "") {
            Router.push("/feed")
        }
    }, [])

    const persistDataAndRedirect = (fields: IUser) => {
        dispatch(userUpdate({
            ...fields
        }))
        
        Router.push("/feed")
    }

    const signInGoogle = async () => {
        const {...fields} = await authGoogle()
        persistDataAndRedirect(fields)
    }

    const signInGithub = async () => {
        const {...fields} = await authGithub()
        persistDataAndRedirect(fields)
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
                    <Box
                        mx="6"
                        onClick={signInGoogle}
                    >
                        <FaGoogle  
                            size={24}
                            color={theme.colors.white.value}
                        />
                    </Box>
                    <Box
                        mx="6"
                        onClick={signInGithub}
                    >
                        <FaGithub
                            size={24}
                            color={theme.colors.white.value}
                        />
                    </Box>
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
                            variant="filled"
                        >
                            Entrar
                        </Button>
                    </Box>
                    <Box>
                        <Button
                            size="medium"
                            variant="text"
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