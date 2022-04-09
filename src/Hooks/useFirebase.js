import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.init'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const userSignOut = () => {
        signOut(auth).then(() => { })
            .catch((error) => { });
    }

    return {
        user,
        signInGoogle,
        userSignOut
    }
}

export default useFirebase;