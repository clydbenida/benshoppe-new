import { createBrowserRouter } from "react-router-dom";
import RootPage from '../pages/root';
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/login";
import ProductDetail from "../pages/product-detail";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <RootPage />, 
      },
      {
        path: "/login",
        element: <LoginPage />, 
      },
      {
        path: "/sign-up",
        element: <div>Sign-up Page placeholder</div>, 
      },
      {
        path: "/cart",
        element: <div>Cart Page placeholder</div>, 
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />, 
      },
    ]
  },
  {
    path: "/seller",
    element: <div>Cart Page placeholder</div>, 
  },
]);

export default rootRouter;
