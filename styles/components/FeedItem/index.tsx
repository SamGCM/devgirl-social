import Link from "next/link"
import { Box } from "../Box"
import PostActionBar from "../PostActionBar"
import { PostDescription } from "../PostDescription"
import { PostTitle } from "../PostTitle"
import PostUser from "../PostUser"
import { IFeedItem } from "./interface"

const FeedItem = ({
    onClick,
    data
}: IFeedItem
): React.ReactElement => {

    return (
        <Box
            onClick={onClick}
            background={4}
            flex
            padding="1"
            margin="3"
            radius="3"
        >
            <PostUser
                imgProfile={data.wr_photoURL}
                name={data.wr_displayName}
                variant="FeedItem"
            />
            <Box
                dimensions="max"
            >
                <Link href={"/post/" + data.pt_id}>
                    <PostTitle
                        marginLeft="7"
                    >
                        { data.pt_title }
                    </PostTitle>
                </Link>
                {/* TODO: Create PostText with overflow: hidden and auto */}
                <PostDescription
                    marginLeft="7"
                >
                    { data.pt_description }
                </PostDescription>
                <PostActionBar data={data}  />
            </Box>
            {/* TODO: Create Component to comment Post */}
        </Box>
    )
}

export default FeedItem