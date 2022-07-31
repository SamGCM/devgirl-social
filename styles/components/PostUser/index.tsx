import { Avatar } from "../Avatar"
import { IPostUser } from "./interface"
import Profile from "../../assets/images/profile-1.jpg"
import { ProfileName } from "../ProfileName"
import { Box } from "../Box"
import { useEffect, useState } from "react"

const PostUser = ({
    imgProfile,
    name,
    variant
}: IPostUser) => {

    const postOpen = (): JSX.Element => {
        return (
            <Box
                flex
                flexDirection="row"
                align="center"
                justify="start"
            >
                <Avatar
                    src={imgProfile}
                    width={60}
                    height={60}
                />
                <ProfileName
                    mx="3"
                    size="3"
                >
                    { name }
                </ProfileName>
            </Box>
        )
    }

    const feedItem = (): JSX.Element => {
        return (
            <Box
            flex
            flexDirection="column"
            align="center"
        >
            <Avatar
                src={imgProfile}
                width={80}
                height={80}
            />
            <ProfileName
                my="2"
                size="3"
            >
                { name }
            </ProfileName>
        </Box>
        )
    }

    return (
        <>
            { variant === "PostOpen" && postOpen() }
            { variant === "FeedItem" && feedItem() }
            { !variant && feedItem() }
        </>
    )
}

export default PostUser