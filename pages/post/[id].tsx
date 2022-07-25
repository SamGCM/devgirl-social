import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { FeedContent } from "../../styles/components/FeedContent"
import PostOpen from "../../styles/components/PostOpen"
import { MainLayout } from "../../styles/layout/Main"
import { getPostDetails } from "../api/post/postDetails"

const Post = (props: any) => {
    
    return (
        <MainLayout>
            <FeedContent>
                <PostOpen data={JSON.parse(props.data)}/>
            </FeedContent>
        </MainLayout>
    )
}

export default Post

export const getServerSideProps: GetServerSideProps = async (context) => {

    const id = context.params?.id ?? ""
    const {data, isExist} = await getPostDetails(id as string)

    if(data) {
        return {
            props: {
                data: JSON.stringify(data),
                isExist: isExist
            },
        }
    }

    return {
        props: {
            data: "",
            isExist: isExist
        },
    }
}