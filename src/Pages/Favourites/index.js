import { useCallback, useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Context as ProductsContext } from "../../Context/favourite";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SearchField from "../../Components/SearchField/SearchField";


const Loader = () => <div>Loading...</div>;
const EmptyFavs = () => <div>Empty Favourites</div>;

const Products = () => {
  const { products,handleToggleFavourite,favourites } = useContext(ProductsContext);
  const [search,setSearch] = useState('')

  const favouriteProducts = useMemo(()=>{
    if(search.trim()==='') return products.filter((product)=> favourites.has(product.id));
    else return products.filter((product)=> favourites.has(product.id)&&product.name.includes(search)) 
  },[favourites,search])

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
            onFavourite={handleToggleFavourite.bind(this,product.id)}
          />          
        ))
      }
    </div>
  );
};
const Favourites = () => {
  const { productLoader,favourites } = useContext(ProductsContext);

  return (
      <div>
        <div className="flex space-between">
          <div>
            Favourites
          </div>
          <div>
            <Link to="/" >products</Link>
          </div>
        </div>
        {
        productLoader
          ? <Loader />
          :  favourites.size>0 ? <Products />:<EmptyFavs />
      }
      </div>
  );
}

export default Favourites;