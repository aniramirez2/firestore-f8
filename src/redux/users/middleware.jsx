import { auth } from "../../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { setUser, setError } from "./slice";

export const googleLogin = () => {
    const provider = new GoogleAuthProvider
    return async (dispatch) => {
        try {
            const userCredential = await signInWithPopup(auth, provider)
            console.log("userCredential", userCredential)
            if(userCredential){
                dispatch(setUser(userCredential.user))
            }
        } catch (error) {
            dispatch(setError({ error: true, code: error.code, message: error.message }))
        }
    }
} 