import { doc, increment, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase";

export const unlikePost = async (id: string) => {
    
    const postRef = doc(database, "post", id);

    await updateDoc(postRef, {
        pt_likes: increment(-1)
    });
}