import {create} from "zustand";
import { v4 as uuidv4 } from 'uuid';

const useCartStore = create((set) => ({
    cartOrders: [],
    cartOrdersPayed: [],
    addOrder: (order, quantity) => {
      const newOrder = {
        ...order,
        id: uuidv4(),
        quantity,
      };
      set((state) => ({
        cartOrders: [...state.cartOrders, newOrder],
      }));
    },
    updateQuantity: (id, newQuantity) => {
      set((state) => {
        if (newQuantity === 0) {
          const updatedOrders = state.cartOrders.filter((order) => order.id !== id);
          return { cartOrders: updatedOrders };
        } else {
          const updatedOrders = state.cartOrders.map((order) =>
            order.id === id ? { ...order, quantity: newQuantity } : order
          );
          return { cartOrders: updatedOrders };
        }
      });
    },
    
    addPayedOrders: () => {
      set((state) => ({
        cartOrdersPayed: [...state.cartOrdersPayed, state.cartOrders],
        cartOrders: []
      }));
    }  
  
}));

  export default useCartStore;