import { collection, DocumentData, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase";

export const getUser = async (
    field: string, 
    value: string
): Promise<{
    data: DocumentData;
    isEmpty: boolean;
}> => {
    const usersRef = collection(database, "users");
        const queryUser = query(usersRef, where(field, "==", value));
        const querySnapshot = await getDocs(queryUser);
        if(querySnapshot.empty) {
            return {
                data: {},
                isEmpty: true
            }
        } 

        {
            return {
                data: querySnapshot.docs[0].data(),
                isEmpty: false
            }
        }
}