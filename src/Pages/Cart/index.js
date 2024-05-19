import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context as ProductsContext } from "../../Context/favourite";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Loader = () => <div>Loading...</div>;
const EmptyCart = () => <div>Empty Cart</div>;

const CartList = () => {
  const { cart, removeFromCart } = useContext(ProductsContext);

  return (
    <div>
      {
        cart.map((product,index) => (
          <ProductCard
            key={index}
            isCart={true}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            onRemoveFromCart={removeFromCart.bind(this,index)}
          />
        ))
      }
    </div>
  );
};

const Cart = () => {
  const { productLoader, cart } = useContext(ProductsContext);

  const ProductsMap = {
    'true-false': <Loader />,
    'true-true': <Loader />,
    'false-false': <EmptyCart />,
    'false-true': <CartList />
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
        ProductsMap[`${productLoader}-${cart.length > 0}`]
      }

    </div>
  );
}
 
export default Cart;