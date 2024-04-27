import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../component/Home/Home";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";
import Details from "../component/Details/Details";
import AddTouristsSpot from "../component/AddTouristsSpot/AddTouristsSpot";

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
        element: <Details></Details>,
        loader: () => fetch(`http://localhost:5000/tourists`),
      },
      {
        path: "/addTouristsSpot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
    ],
  },
]);
export default router;
