import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import { Background } from "../../styles/components"
import { FeedContent } from "../../styles/components/FeedContent"
import FeedItem from "../../styles/components/FeedItem"
import { MainLayout } from "../../styles/layout/Main"
import { getPosts } from "../api/getPosts"

const Feed = ({
    data,
    isEmpty
}: any) => {
    

    const renderPosts = (doc: DocumentData[]) => {
        return doc.map((item: DocumentData, index: number) => {
            console.log(item)
            return (
                <FeedItem key={item.uid} data={item} />
            )
        }) 
    }

    return (
        <MainLayout>
            <FeedContent>
                { renderPosts(JSON.parse(data)) }
            </FeedContent>
        </MainLayout>
    )
}

export default Feed

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {docs, empty} = await getPosts()
    const arrDoc = docs.map(item => item.data())
    return {
        props: {
            data: JSON.stringify(arrDoc),
            isEmpty: empty
        },
    }
}