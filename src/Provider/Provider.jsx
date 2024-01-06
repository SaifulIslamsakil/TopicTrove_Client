import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from "../../Firbase/Firbase-confiqe";
export const AuthContext = createContext(null)
const Provider = ({children}) => {
    const [user, setUser] = useState('')
    const [lodding, setLodding] = useState(false)
    const Provider = new GoogleAuthProvider()
    const Register = (email, password)=>{
        setLodding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const Signin = (email, password)=>{
        setLodding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const LogOut = ()=>{
        setLodding(true)
        return signOut(Auth)
    }
    const GoogelRegister = ()=>{
        setLodding(true)
        return signInWithPopup(Auth, Provider)
    }
    useEffect(()=>{
        const unSubcriber =  onAuthStateChanged(Auth, currentUser=>{
           setLodding(false)
           setUser(currentUser)
        })
        return ()=>{
            return unSubcriber
        }
    },[])

    const AuthInfo = {
        Register,
        Signin,
        LogOut,
        GoogelRegister,
        lodding,
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;