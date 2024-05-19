const CartButton = ({
  removeFromCart = ()=>{}
})=>{
  return( 
    <div>
      <button onClick={removeFromCart}>
          Remove from Cart
        </button>
    </div> 
  );
}
const NormalButton = ({
  isFavourite = false,
  addToCart = ()=>{},
  handleToggleFavourite = ()=>{}
})=>{
  return( 
    <div>
      <button onClick={handleToggleFavourite}>
        {isFavourite? 'Remove from favourite':'Add to Favourite'}
      </button>
      <button onClick={addToCart}>
        Add to cart
      </button>
    </div> 
  );
}
const ProductCard = ({
  isCart = false,
  name='',
  description='',
  image='',
  price=0,
  isFavourite = false,
  onFavourite: handleToggleFavourite = ()=>{},
  onAddToCart = () => {},
  onRemoveFromCart = () => {}
}) => {
  const ButtonLogic = {
    'true': <CartButton removeFromCart={onRemoveFromCart} />,
    'false': <NormalButton isFavourite={isFavourite} handleToggleFavourite={handleToggleFavourite} addToCart={onAddToCart} />
  }
  return ( 
  <div className="flex">
    <div><img src={image} alt="fsg" /></div>
    <div className="flex flex-column">
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>
        {ButtonLogic[`${isCart}`]}
      </div>
    </div>
  </div> 
  );
}
 
export default ProductCard;