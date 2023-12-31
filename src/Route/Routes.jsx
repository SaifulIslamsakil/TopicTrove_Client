import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";

const Routes = createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayOut></MainLayOut>,
            errorElement:"",
            children:[
                {
                    
                }
            ]
        }
    ]
)
export default Routes