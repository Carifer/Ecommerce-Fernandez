import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearToCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((product) => product.id === id);
    return existe;
  };

  const deleteProduct = (id) => {
    let array = cart.filter((product) => product.id != id);
    setCart(array);
  };

  const getQuantityById = (id) => {
    let getProduct = cart.find((product) => product.id === id);

    return getProduct?.quantity;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearToCart,
    deleteProduct,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
