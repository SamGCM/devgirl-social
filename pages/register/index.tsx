import { Background, Box, Input, Label } from "../../styles/components"
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa"
import { theme } from "../../styles/theme"
import { Divider } from "../../styles/components/Divider"
import { Button } from "../../styles/components/Button"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { database } from "../../firebase"
import { collection, addDoc } from "firebase/firestore";

const Register = () => {

    const iconsSocial = [
        FaGoogle, FaApple, FaGithub
    ]

    const renderIcons = (): React.ReactElement[] => {
        return iconsSocial.map((Icon: any, index: number) => {
            return (
                <Box
                    mx="6"
                    key={index}
                >
                    <Icon  
                        size={24}
                        color={theme.colors.white.value}
                    />
                </Box>
            )
        })
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().required(),
        email: Yup.string().email().required()
    })

    const renderContentRegister = () => {
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
                <Formik
                    initialValues={{
                        name: "",
                        password: "",
                        email: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values) => {
                        
                        try {
                            const docRef = await addDoc(collection(database, "users"), {
                                name: values.name,
                                password: values.password,
                                email: values.email
                            });
                            // TODO: ADD TOAST
                        } catch (e) {
                            // TODO: ADD TOAST
                        }
                    }}
                >
                    <Form>
                        
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
                                    Nome:
                                </Label>
                                <Field
                                    id="name"
                                    name="name"
                                    as={Input}
                                />
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
                                <Field
                                    id="password"
                                    name="password"
                                    as={Input}
                                />
                            </Box>
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
                                <Field
                                    id="email"
                                    name="email"
                                    as={Input}
                                />
                            </Box>
                        </Box>
                        <Box
                            align="center"
                            flex
                            justify="center"
                            flexDirection="column"
                            margin="3"
                        >
                            <Box>
                                <Button
                                    size="medium"
                                    variant="filled"
                                    type="submit"
                                >
                                    Cadastrar
                                </Button>
                            </Box>
                        </Box>
                    </Form>
                </Formik>
            </Box>
        )
    }

    return (
        <>
            <Background>
                { renderContentRegister() }
            </Background>
        </>
    )
}

export default Register