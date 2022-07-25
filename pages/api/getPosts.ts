import { collection, DocumentData, getDocs, limit, orderBy, Query, query, startAfter, where } from "firebase/firestore";
import { database } from "../../firebase";

export const getPosts = async (lastQuery?: Query<DocumentData>) => {

    const postsRef = collection(database, "post");

        const first = query(postsRef, orderBy("created_at"), limit(10));
        const querySnapshot = await getDocs(first);
        if(lastQuery) {
            let documentSnapshots = await getDocs(lastQuery);
        
            const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];

            const next = query(postsRef,
                orderBy("created_at"),
                startAfter(lastVisible),
                limit(10));
            
            documentSnapshots = await getDocs(next)
            return documentSnapshots;
        }

        return querySnapshot;
}