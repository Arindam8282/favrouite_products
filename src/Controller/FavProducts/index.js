import { useState, useEffect } from "react";
import { Provider } from "../../Context/favourite";
import useProducts from "../../Hooks/Products";
import useVariablePrice from "../../Hooks/Products/variablePrice";

const FavouritesProducts = ({ children }) => {
  const { incrementPrice } = useVariablePrice({ delay: 10000, incrementBy: 200 });
  const { loader: productLoader, fetchProducts, data: products, collection: productCollection } = useProducts({ incrementPrice });
  const [ favourites, setFavourites ] = useState(new Set());

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleToggleFavourite = (id) => {
    const _favourites = new Set(favourites)
    if (_favourites.has(id)) {
      _favourites.delete(id);
    }
    else {
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