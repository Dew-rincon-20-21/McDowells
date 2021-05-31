import {  CATEGORY_LIST_GET,  PRODUCT_LIST_GET } from "./constants"
import { catalogue } from "./mockData";





export const listCategories =  (dispatch) => {
   
// aqui se haría la petición de datos al servidor, en este caso trabajamos con datos de ejemplo
    const data = catalogue.categories;
    
    return dispatch({
        type: CATEGORY_LIST_GET,
        payload: data,
    });
}


export const listProducts = async (dispatch, categoryName = '') => {
    
    let data =[];
    if (!categoryName) {
        data = catalogue.products;
    } else {
        catalogue.products.forEach((product) => {
            if (categoryName === product.category) { data.push(product) }
        });
    }

    return dispatch({
        type: PRODUCT_LIST_GET,
        payload: data,
    });
}
