import React, { createContext, useReducer } from "react";
import { CATEGORY_LIST_GET, PRODUCT_LIST_GET, ORDER_ADD_ITEM, ORDER_CLEAR, ORDER_REMOVE_ITEM } from "./constants";


export const Store = createContext();


const initialState = {
    categoryList: { categories: [] },
    productList: { products: [] },
    order: {
        items: [],
        itemsCount: 0,
        totalPrice: 0,

    },
};



function reducer(state, action) {
    //console.log("reducer: " + action.type);
    switch (action.type) {
        case CATEGORY_LIST_GET:
            return {
                ...state, categoryList: { categories: action.payload }
            }
        case PRODUCT_LIST_GET:
            return {
                ...state, productList: { products: action.payload }
            }
        case ORDER_ADD_ITEM: {
            const item = action.payload;
            const existItem = state.order.items.find(
                (x) => x.name === item.name
            );
            const items = existItem
                ? state.order.items.map((x) =>
                    x.name === existItem.name ? item : x
                )
                : [...state.order.items, item];

            const itemsCount = items.reduce((a, c) => a + c.quantity, 0);
            const itemsPrice = items.reduce(
                (a, c) => a + c.quantity * c.price,
                0
            );

            const totalPrice = itemsPrice;
            return {
                ...state,
                order: {
                    ...state.order,
                    items,
                    totalPrice,
                    itemsCount,
                },
            };
        }
        case ORDER_REMOVE_ITEM:
            const items = state.order.items.filter(
                (x) => x.name !== action.payload.name
            );
            const itemsCount = items.reduce((a, c) => a + c.quantity, 0);
            const itemsPrice = items.reduce(
                (a, c) => a + c.quantity * c.price,
                0
            );

            const totalPrice = itemsPrice;
            return {
                ...state,
                order: {
                    ...state.order,
                    items: items,
                    totalPrice,
                    itemsCount,
                },
            };

        case ORDER_CLEAR:
            return {
                ...state,
                order: {
                    items: [],
                    totalPrice: 0,
                    itemsCount: 0,
                },
            };
            
        default:
            return state;
    }
}



export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}