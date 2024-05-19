import { useState } from "react";
import productJson from '../../Constant/products.json'

const useProducts = () => {
  const [products, setProducts] = useState({ loader: false, data: [], collection: new Map() });

  const fetchProducts = async () => {
    return new Promise(async (next = () => {}) => {
      let _products = { ...products, data: [], loader: true };
      setProducts(_products);
      // api call

      const productCollection = new Map([]);

      // prepare map
      _products = {
        ..._products,
        loader: false,
        data: productJson,
        collection: productCollection,
      };
      for(let i=0;i<_products.data.length;i++){
        productCollection.set(_products.data[i].id,_products.data[i])
      }
      setProducts(_products);
      return next(_products.data);
    });
  }

  return { ...products, fetchProducts };
};

export default useProducts;