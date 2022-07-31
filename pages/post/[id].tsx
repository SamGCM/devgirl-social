import { DocumentReference } from "firebase/firestore"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Box } from "../../styles/components"
import { BoxToComment } from "../../styles/components/BoxToComment"
import CommentsPost from "../../styles/components/CommentsPost"
import { FeedContent } from "../../styles/components/FeedContent"
import { PostAndComments } from "../../styles/components/PostAndComments"
import PostOpen from "../../styles/components/PostOpen"
import { MainLayout } from "../../styles/layout/Main"
import { getPostDetails } from "../api/post/postDetails"

const Post = (props: any) => {
    const propsData = JSON.parse(props.data)
    const [commented, setCommented] = useState("")
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath);

    const renderComments = () => {
        return propsData.pt_comments_data.map((item: any) => {
            return (
                <CommentsPost
                    key={item.cm_id}
                    data={item}
                />
            )
        })
    }

    useEffect(() => {
        setTimeout(
            () => refreshData(),
            1000
        )
    },[commented])
    
    return (
        <MainLayout>
            <FeedContent>
                <PostAndComments>
                    <PostOpen data={propsData}/>
                    { propsData && renderComments() }
                </PostAndComments>
                <BoxToComment
                    setComment={setCommented}
                    id={propsData.pt_id}
                />
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