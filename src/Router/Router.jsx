import { createBrowserRouter, Router } from "react-router"
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },

      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
    
  ]);
  export default router;