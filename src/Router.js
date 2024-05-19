import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Favourites from "./Pages/Favourites";
import Cart from "./Pages/Cart";

const routes = createBrowserRouter(
  [
    {
      path:'',
      element:<ProductList />
    },{
      path:'favs',
      element:<Favourites />
    },{
      path:'cart',
      element:<Cart />
    },
  ]
)
const Router = () => {
  return ( <RouterProvider router={routes}></RouterProvider> );
}
 
export default Router;