import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Auth from "../../Firbase/Firbase-confiqe";
import { set } from "react-hook-form";
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
        return(Auth)
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
    console.log(user)
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