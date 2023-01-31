import { addToCart, decrement, increament, removeItem, setCart } from '@/store/cart/cartSlide';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';

export const useCart = () => {
    const dispatch = useAppDispatch();
    const { cart } = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        const cart = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart')!)
            : [];

        if (cart) {
            dispatch(setCart(cart));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addProducToCart = (product: any) => {
        dispatch(addToCart(product));
    };

    const removeProductToCart = (id: any) => {
        dispatch(removeItem(id));
    };

    const incrementProductToCart = (id: any) => {
        dispatch(increament(id));
    };

    const decrecrementProductToCart = (id: any) => {
        dispatch(decrement(id));
    };

    return {
        cart,

        addProducToCart,
        removeProductToCart,
        incrementProductToCart,
        decrecrementProductToCart,
    };
};
