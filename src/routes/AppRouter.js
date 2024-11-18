import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
// import MainLayout from "@layouts/MainLayout/MainLayout";
// pages
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
