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
import Update from "../component/Update/Update";
import ErrorElement from "../ErrorElement/ErrorElement";
import CountryCategories from "../component/Home/Countries/CountryCategories";
import CountryDetails from "../component/Home/Countries/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: "/countriesDetails/:id",
        element: (
          <PrivateRoute>
            <CountryDetails></CountryDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/countriesDetails"),
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
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/tourists"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/tourists/${params.id}`),
      },
      {
        path: "/countriesCategories/:country_name",
        element: <CountryCategories></CountryCategories>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5001/countriesCategories/${params.country_name}`
          ),
      },
    ],
  },
]);
export default router;
