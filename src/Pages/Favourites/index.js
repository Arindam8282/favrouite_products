import { useCallback, useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Context as ProductsContext } from "../../Context/favourite";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchField from "../../Components/SearchField/SearchField";


const Loader = () => <div>Loading...</div>;
const EmptyFavs = () => <div>Empty Favourites</div>;

const Products = () => {
  const { products, handleToggleFavourite, favourites,addToCart } = useContext(ProductsContext);
  const [search, setSearch] = useState('');

  const favouriteProducts = useMemo(() => {
    const favProducts = products.filter((product) => favourites.has(product.id));
    if (search.trim().length) {
      return favProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
    }
    return favProducts;
  }, [favourites, search])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSearch(e.target.searchtext.value);
  }, []);

  return (
    <div>
      <SearchField onSearch={handleSubmit} />
      {
        favouriteProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            isFavourite={favourites.has(product.id)}
            onFavourite={handleToggleFavourite.bind(this, product.id)}
            onAddToCart={addToCart.bind(this,product)}

          />
        ))
      }
    </div>
  );
};

const Favourites = () => {
  const { productLoader, favourites } = useContext(ProductsContext);

  const ProductsMap = {
    'true-false': <Loader />,
    'true-true': <Loader />,
    'false-false': <EmptyFavs />,
    'false-true': <Products />
  };

  return (
    <div>
      <div className="flex space-between">
        <div>
          Favourites
        </div>
        <div>
          <Link to="/" >products</Link>
          <Link to="/cart" >Cart</Link>
        </div>
      </div>
      {
        ProductsMap[`${productLoader}-${favourites.size > 0}`]
      }

    </div>
  );
}

export default Favourites;