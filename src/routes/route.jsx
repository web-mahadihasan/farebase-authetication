import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/login/user",
          element: <UserDetails/>
        }
      ]
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true // Enable the v7_relativeSplatPath flag
    }
  }
);

export default router;