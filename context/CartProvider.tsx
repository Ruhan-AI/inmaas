'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, ProductVariant } from '@/data/products';

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, variantLabel?: string, quantity?: number) => void;
  removeFromCart: (productSlug: string, variantLabel: string) => void;
  updateQuantity: (productSlug: string, variantLabel: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'inmaas_cart_items_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save cart to localStorage:', e);
    }
  }, [items, isLoaded]);

  const addToCart = (product: Product, variantLabel?: string, quantity = 1) => {
    const selectedVariant =
      product.variants.find((v) => v.label === variantLabel) || product.variants[0];

    setItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.slug === product.slug && i.variant.label === selectedVariant.label
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + quantity,
        };
        return updated;
      } else {
        return [...prev, { product, variant: selectedVariant, quantity }];
      }
    });
  };

  const removeFromCart = (productSlug: string, variantLabel: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.product.slug === productSlug && i.variant.label === variantLabel)
      )
    );
  };

  const updateQuantity = (productSlug: string, variantLabel: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productSlug, variantLabel);
      return;
    }

    setItems((prev) =>
      prev.map((i) => {
        if (i.product.slug === productSlug && i.variant.label === variantLabel) {
          return { ...i, quantity };
        }
        return i;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce((acc, item) => acc + item.variant.mrp * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
