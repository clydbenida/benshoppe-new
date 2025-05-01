import { createBrowserRouter } from "react-router-dom";
import RootPage from '../pages/root';
import RootLayout from "../layouts/RootLayout";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <div>Index Page placeholder</div>, 
      },
      {
        path: "/login",
        element: <div>Login Page placeholder</div>, 
      },
      {
        path: "/sign-up",
        element: <div>Sign-up Page placeholder</div>, 
      },
    ]
  },
]);

export default rootRouter;
