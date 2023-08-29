import firebase_app from "../firebase";
import { signInWithEmailAndPassword, getAuth, signOut  } from "firebase/auth";

const auth = getAuth(firebase_app);

export const signIn = async (email: string, password: string) => {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export const signOutAction = async () => {
    let result = null,
        error = null;
    try {
        result = await signOut(auth);
    } catch (e) {
        error = e;
    }

    return { result, error };
}