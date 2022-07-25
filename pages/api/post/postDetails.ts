import { doc, DocumentData, getDoc, getDocFromCache } from "firebase/firestore";
import { database } from "../../../firebase";

export const getPostDetails = async (
    id: string,
): Promise<{
    data: DocumentData | undefined;
    isExist: boolean;
}> => {
    const docRef = doc(database, "post", id);

    try {
        const doc = await getDoc(docRef);

        return {
            data: doc.data(),
            isExist: doc.exists(),
        }

    } catch (e) {
        return {
            data: undefined,
            isExist: false,
        }
    }
}