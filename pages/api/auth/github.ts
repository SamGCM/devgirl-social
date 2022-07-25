import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { addUser } from "../addUser";
import { getUser } from "../getUser";

export default async function authGithub() {

    const provider = new GithubAuthProvider();
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