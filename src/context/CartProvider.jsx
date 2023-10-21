import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];

export function CartProvider({ children }) {
  const purchaseReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[CART] Add Purchase":
        return [...state, action.payload];
      case "[CART] Increase Purchase Quantity":
        return state.map((item) => {
          const qty = item.quantity + 1;
          if (item.id === action.payload) return { ...item, quantity: qty };
          return item;
        });
      case "[CART] Decrease Purchase Quantity":
        return state.map((item) => {
          const qty = item.quantity - 1;
          if (item.id === action.payload && item.quantity > 1)
            return { ...item, quantity: qty };
          return item;
        });
      case "[CART] Delete Purchase":
        return state.filter((purchase) => purchase.id !== action.payload);
      default:
        return state;
    }
  };

  const [shoppingList, dispatch] = useReducer(purchaseReducer, initialState);

  const addPurchase = (purchase) => {
    purchase.quantity = 1;
    const action = {
      type: "[CART] Add Purchase",
      payload: purchase,
    };
    dispatch(action);
  };
  const increaseQuantity = (id) => {
    const action = {
      type: "[CART] Increase Purchase Quantity",
      payload: id,
    };
    dispatch(action);
  };
  const decreaseQuantity = (id) => {
    const action = {
      type: "[CART] Decrease Purchase Quantity",
      payload: id,
    };
    dispatch(action);
  };
  const deletePurchase = (id) => {
    const action = {
      type: "[CART] Delete Purchase",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingList,
        addPurchase,
        increaseQuantity,
        decreaseQuantity,
        deletePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
