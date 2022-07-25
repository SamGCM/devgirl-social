import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addUser } from "../addUser";
import { getUser } from "../getUser";
import { IUser } from "../../../interfaces/user";

export default async function authGoogle(): Promise<IUser> {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const { user } = await signInWithPopup(auth, provider);
    const { isEmpty } = await getUser("uid", user.uid);

    const fields = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoUrl: user.photoURL
    }

    if(isEmpty) {
        await addUser({
            ...fields
        },
        user.uid
        )
    }

    return fields
}