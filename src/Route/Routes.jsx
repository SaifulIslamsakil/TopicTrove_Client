import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import Membership from "../Pages/Membership/Membership";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayOut></MainLayOut>,
            errorElement: "",
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/Membership",
                    element: <PrivateRoute><Membership></Membership></PrivateRoute>
                }
            ]
        },
        {
            path: "/Register",
            element: <Register></Register>
        },
        {
            path: "/Signin",
            element: <SignIn></SignIn>
        }
    ]
)
export default Routes