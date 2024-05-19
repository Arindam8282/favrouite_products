const ProductCard = ({
  name='',
  description='',
  image='',
  price=0,
  isFavourite = false,
  onFavourite: handleToggleFavourite = ()=>{}
}) => {
  return ( 
  <div className="flex">
    <div><img src={image} alt="fsg" /></div>
    <div className="flex flex-column">
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>
        <button onClick={handleToggleFavourite}>
          {isFavourite? 'Remove from favourite':'Add to Favourite'}
        </button>
      </div>
    </div>
  </div> 
  );
}
 
export default ProductCard;