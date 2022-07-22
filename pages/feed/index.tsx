import { Background } from "../../styles/components"
import { FeedContent } from "../../styles/components/FeedContent"
import FeedItem from "../../styles/components/FeedItem"
import { MainLayout } from "../../styles/layout/Main"

const Feed = () => {

    return (
        <MainLayout>
            <FeedContent>
                <FeedItem/>
            </FeedContent>
        </MainLayout>
    )
}

export default Feed