import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../component/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";
import Details from "../component/Details/Details";
import AddTouristsSpot from "../component/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../component/AllTouristsSpot/AllTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import MyList from "../component/MyList/MyList";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Signin></Signin>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/tourists"),
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("http://localhost:5001/tourists"),
      },
      {
        path: "/myLists/:email",
        element: <MyList></MyList>,
        loader : () => fetch("http://localhost:5001/tourists")
        
      },
    ],
  },
]);
export default router;
