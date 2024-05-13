
import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../components/layout/Root";
import Event from "../components/Event/Event";
import About from "../components/About/About";
const routes = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/event",
          element:<Event></Event>
      },
        {
          path:"/about",
          element:<About></About>
      }
      ]
    },
  ])

  export default routes;