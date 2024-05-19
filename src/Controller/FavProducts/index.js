import { useState, useEffect } from "react";
import { Provider } from "../../Context/favourite";
import useProducts from "../../Hooks/Products";

const FavouritesProducts = ({children}) => {
  const [favourites,setFavourites] = useState(new Set())
  const { loader: productLoader, fetchProducts, data: products, collection: productCollection } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleToggleFavourite=(id)=>{
    const _favourites = new Set(favourites)
    if(_favourites.has(id)){
      _favourites.delete(id);
    }
    else{
      _favourites.add(id)
    }
    setFavourites(_favourites)
  };

  return ( 
    <Provider value={{
      productLoader,
      products,
      productCollection,
      favourites,
      setFavourites,
      fetchProducts,
      handleToggleFavourite
    }}>
      {children}
    </Provider> 
  );
}
 
export default FavouritesProducts;