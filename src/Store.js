import React, { createContext, useReducer } from "react";
import { CATEGORY_LIST_GET, PRODUCT_LIST_GET, ORDER_ADD_ITEM } from "./constants";


export const Store = createContext();


const initialState = {
    categoryList: { categories: [] },
    productList: { products: [] },
    order: {items: []},
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
        case ORDER_ADD_ITEM:
           return {
            ...state, order: { items: action.payload}
        }
        default:
            return state;
    }
}



export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}