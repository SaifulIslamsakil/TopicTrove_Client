import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayOut></MainLayOut>,
            errorElement:"",
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                }
            ]
        }
    ]
)
export default Routes