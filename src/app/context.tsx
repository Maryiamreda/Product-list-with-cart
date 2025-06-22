"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

type ImageSet = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Product = {
  image: ImageSet;
  name: string;
  category: string;
  price: number;
  amount: number;
};

type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  increaseAmount:(product: Product) => void;
    decreaseAmount:(product: Product) => void;

};

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {

  if (!cart.some((item) => item.name === product.name)) {
    setCart((prev) => [...prev, product]);
  }
  };
  const increaseAmount = (product: Product) => {
    const updatedCart = cart.map(item => {
      if (item.name === product.name) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
const decreaseAmount = (product: Product) => {
    const updatedCart = cart.map(item => {
      if (item.name === product.name && product.amount>1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart  , decreaseAmount , increaseAmount}}>
      {children}
    </CartContext.Provider>
  );
};
