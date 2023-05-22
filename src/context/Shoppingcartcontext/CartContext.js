import { createContext, useContext, useState } from "react"
import useLocalStorage from "../../hooks/useLocalStorage";

const CartContext = createContext();
export const useCartContext = () => {
    return useContext(CartContext)
}
// const initialCartState = {
//     items: [],
//     totalItems: 0,
//     totalPrice: 0
// }

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const addToCart = (product) => {
        let cartItem = items.find((item) => item.id === product.id);
        if (cartItem) {
          setItems(
            items.map((item) =>
              item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          );
        } else {
          setItems([
            ...items,
            { id: product.id, name: product.name, quantity: 1, price: product.price },
          ]);
        }
        console.log(items);
      };
    
      const subtractFromCart = (product) => {
        let cartItem = items.find((item) => item.id === product.id);
        if (cartItem) {
          setItems(items.filter((item) => item.id !== cartItem.id));
        }
      };

    return <CartContext.Provider value={ { addToCart, subtractFromCart, items } }>
        {children}
    </CartContext.Provider>
}