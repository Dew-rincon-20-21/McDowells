import { ORDER_SET_TYPE, CATEGORY_LIST_GET, CATEGORY_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./constants"
import { catalogue } from "./mockData";


export const setOrderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType,
    });
};



export const listCategories = async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_GET });

    const data = catalogue.categories;
    console.log(data);

    return dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: data,
    });
}


export const listProducts = async (dispatch, categoryName = '') => {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    let data =[];
    if (!categoryName) {
        data = catalogue.products;
    } else {
        catalogue.products.forEach((product) => {
            if (categoryName === product.category) { data.push(product) }
        });
    }

    return dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
    });
}
