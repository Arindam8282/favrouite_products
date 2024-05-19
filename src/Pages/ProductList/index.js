import { useCallback, useContext, useMemo, useState } from "react";
import { Context as ProductsContext } from "../../Context/favourite";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import SearchField from "../../Components/SearchField/SearchField";

const Loader = () => <div>Loading...</div>;

const Products = () => {
  const { products,handleToggleFavourite,favourites,addToCart } = useContext(ProductsContext);
  const [search,setSearch] = useState('')

  const searchedProducts = useMemo(()=>{
    if(search.trim()==='') return products;
    else return products.filter((product)=> product.name.includes(search))
  },[search,products])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSearch(e.target.searchtext.value);
  }, []);

  return (
    <div>
      <SearchField onSearch={handleSubmit} />
      {

        searchedProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            isFavourite={favourites.has(product.id)}
            onFavourite={handleToggleFavourite.bind(this,product.id)}
            onAddToCart={addToCart.bind(this,product)}
          />
        ))
      }
    </div>
  );
};

const ProductList = () => {

  // const navigate = useNavigate()
  const { productLoader,products } = useContext(ProductsContext);
  const ProductsMap = {
    'true-false':<Loader/>,
    'false-true':<Products/>
  }
    
  // const navigateToFavs = ()=>{
  //   navigate('/favs')
  // }

  return (
    <div>
      <div className="flex space-between">
        <div>
          Productlist
        </div>
        <div>
          <Link to="/favs" >favourites</Link>
          <Link to="/cart" >Cart</Link>
        </div>
      </div>
      {ProductsMap[`${productLoader}-${products.length>0}`]}
     
    </div>
  );
}
 
export default ProductList;