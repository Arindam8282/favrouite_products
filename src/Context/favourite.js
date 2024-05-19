import { createContext } from "react";

export const Context = createContext({
  // products
  productLoader: false,
  products: [],
  productCollection: new Map(),
  fetchProducts: () => {},

  // favourites
  favourites: new Set(),
  setFavourites: ()=>{},
  handleToggleFavourite: (id)=>{}
});

export const Provider = Context.Provider;
