import { createSlice } from '@reduxjs/toolkit';

interface ICartStore {
    cart: any[];
    isLoaded: boolean;
}

const initialState: ICartStore = {
    cart: [],
    isLoaded: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            state.cart = payload;
            state.isLoaded = true;
        },
        addToCart: (state, { payload }) => {
            const { id } = payload;
            const itemInCart = state.cart.find((item: any) => item.id === id);
            if (itemInCart) {
                itemInCart.quantity++;
                // state.productsCart.map((item: any) =>
                //     item.id === id
                //         ? {
                //               ...item,
                //               quantity: item.quantity + 1,
                //           }
                //         : item
                // );
            } else {
                state.cart.push({
                    ...payload,
                    quantity: 1,
                });
            }
        },
        increament(state, { payload }) {
            const item = state.cart.find((item) => item.id === payload);
            item.quantity++;
        },
        decrement(state, { payload }) {
            const item = state.cart.find((item) => item.id === payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, { payload }) => {
            const removeItem = state.cart.filter((item) => item.id !== payload);
            state.cart = removeItem;
        },
    },
});

export const { addToCart, increament, decrement, removeItem, setCart } =
    cartSlice.actions;
