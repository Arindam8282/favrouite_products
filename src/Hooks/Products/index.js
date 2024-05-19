import { useMemo, useState } from "react";
import productJson from '../../Constant/products.json'

const prepareProducts = ({
  products = [],
  incrementPrice = 0,
}) => {
  const productCollection = new Map([]);
  const __products = JSON.parse(JSON.stringify(products));

  for (let i = 0; i < __products.length; i++) {
    const _product = __products[i];
    _product.price += incrementPrice;
    productCollection.set(_product.id, _product);
  }

  return { __products, productCollection };
};

const useProducts = ({ incrementPrice = 0 }) => {
  const [products, setProducts] = useState({ loader: false, data: [] });

  const fetchProducts = async () => {
    return new Promise(async (next = () => {}) => {
      let _products = { ...products, loader: true };
      setProducts(_products);

      // api call
      _products = {
        ..._products,
        loader: false,
        data: productJson,
      };

      setProducts(_products);
      return next(_products.data);
    });
  }

  const { loader, data, collection } = useMemo(() => {
    const _products = { ...products };
    const { __products, productCollection } = prepareProducts({ products: products.data, incrementPrice });
    return {
      ..._products,
      data: __products,
      collection: productCollection,
    };
  }, [products, incrementPrice]);

  return { loader, data, collection, fetchProducts };
};

export default useProducts;