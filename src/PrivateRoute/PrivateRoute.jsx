import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, lodding} = useContext(AuthContext)
    const location = useLocation()

    if(lodding){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
   return <Navigate to="/Signin" state={location.pathname}></Navigate>
};

export default PrivateRoute;