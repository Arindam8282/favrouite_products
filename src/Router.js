import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Favourites from "./Pages/Favourites";

const routes = createBrowserRouter(
  [
    {
      path:'',
      element:<ProductList />
    },{
      path:'favs',
      element:<Favourites />
    },
  ]
)
const Router = () => {
  return ( <RouterProvider router={routes}></RouterProvider> );
}
 
export default Router;