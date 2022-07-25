import { Background, Box } from "../../components"
import { Divider } from "../../components/Divider"
import Header from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { SideBarItem } from "../../components/SideBarItem"
import { IMainLayout } from "./interface"

export const MainLayout = ({
    children
}: IMainLayout
): React.ReactElement => {
    return (
        <Background>
            <Box
                flex
                flexDirection="column"
                radius="3"
                background="3"
                dimensions="default"
                overflow="hidden"
            >
                <Header/>
                <Box
                    flex
                >
                    <Sidebar>
                        <SideBarItem
                            variant="title"
                        >Categorias</SideBarItem>
                        <SideBarItem>Tutoriais</SideBarItem>
                    </Sidebar>
                    { children }
                </Box>
            </Box>
        </Background>
    )
}