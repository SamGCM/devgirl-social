import { arrayUnion, doc, increment, Timestamp, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";
import { generateUUID } from "../../../utils/generateUUID";

export const commentPost = async (id: string, data: any) => {
    
    const postRef = doc(database, "post", id);

    await updateDoc(postRef, {
        pt_comments_data: arrayUnion({
            ...data,
            cm_id: generateUUID(),
            created_at: Timestamp.now()
        })
    });
}