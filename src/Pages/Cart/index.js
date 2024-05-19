import { useCallback, useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Context as ProductsContext } from "../../Context/favourite";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchField from "../../Components/SearchField/SearchField";

const Loader = () => <div>Loading...</div>;
// const EmptyCart = () => <div>Empty Cart</div>;

const Cart = () => {
  const { productLoader, favourites } = useContext(ProductsContext);

  const ProductsMap = {
    'true-false': <Loader />,
    'true-true': <Loader />,
    // 'false-false': <EmptyFavs />,
    // 'false-true': <Products />
  };

  return (
    <div>
      <div className="flex space-between">
        <div>
          Cart
        </div>
        <div>
          <Link to="/" >products</Link>
          <Link to="/favs" >favourites</Link>
        </div>
      </div>
      {
        ProductsMap[`${productLoader}-${favourites.size > 0}`]
      }

    </div>
  );
}
 
export default Cart;