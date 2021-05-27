import React, { createContext, useReducer } from "react";
import { ORDER_SET_TYPE, CATEGORY_LIST_GET, CATEGORY_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./constants";


export const Store = createContext();


const initialState = {
    categoryList: { loading: true },
    productList: {loading: true},
    order: {
        orderType: "Eat in",
    },
};



function reducer(state, action) {
    console.log("reducer: " + action.type);
    switch (action.type) {
        case ORDER_SET_TYPE:
            return {
                ...state, order: { ...state.order, orderType: action.payload }
            }
        case CATEGORY_LIST_GET:

            return {
                ...state, categoryList: { loading: true }
            }
        case CATEGORY_LIST_SUCCESS:
            return {
                ...state, categoryList: { loading: false, categories: action.payload }
            }
        case PRODUCT_LIST_REQUEST:
            return {
                ...state, productList: { loading: true }
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state, productList: { loading: false, products: action.payload }
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