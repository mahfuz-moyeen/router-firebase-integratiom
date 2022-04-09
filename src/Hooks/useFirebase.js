import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase.init'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return {user , signInGoogle}
}

export default useFirebase;