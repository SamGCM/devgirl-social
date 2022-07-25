import { doc, setDoc, Timestamp } from "firebase/firestore";
import { database } from "../../firebase";

export const addUser = async (values: any, ref: string) => {
    
    await setDoc(doc(database, "users", ref), {
        ...values,
        created_at: Timestamp.now()
    });
}