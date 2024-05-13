
import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/layout/Root";
const routes = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ])

  export default routes;