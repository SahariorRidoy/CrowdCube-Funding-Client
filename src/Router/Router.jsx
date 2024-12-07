import { createBrowserRouter, Router } from "react-router"
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllCampaign from "../components/AllCampaign/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign/AddNewCampaign";
import MyCampaign from "../components/MyCampaign/MyCampaign";
import MyDonation from "../components/MyDonation/MyDonation";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/all-campaign",
          element: <AllCampaign/>,
        },
        {
          path: "/add-new-campaign",
          element: <PrivateRoute><AddNewCampaign/></PrivateRoute>,
        },
        {
          path: "/my-campaign",
          element: <PrivateRoute><MyCampaign/></PrivateRoute>,
        },
        {
          path: "/my-donation",
          element: <PrivateRoute><MyDonation/></PrivateRoute>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    }, 
  ]);
  export default router;