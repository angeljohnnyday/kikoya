const data = {
    items: [],
    shopping: [],
    get: {}
}

const PRODUCT_ALL               = 'PRODUCT_ALL'
const PRODUCT_GET               = 'PRODUCT_GET'
const PRODUCT_SHOPPING_ADD      = 'PRODUCT_SHOPPING_ADD'
const PRODUCT_SHOPPING_REMOVE   = 'PRODUCT_SHOPPING_REMOVE'

const handleGet = (state, id) => {
    const { items } = state;
    return { 
        ...state.get,
        [id]: items[id]
    };
}

const handleShoppingAdd = (state, product) => {
    return [
        product,
        ...state.shopping
    ]
}

const handleShoppingRemove = (state, id) => {
    return state.shopping.filter(i => i.id !== id)
}

const products = (state = data, action) => {
    switch (action.type) {
        case PRODUCT_ALL:
            return { ...state, items: action.payload }
        case PRODUCT_GET:
            return { ...state, get: handleGet(state, action.payload) }
        case PRODUCT_SHOPPING_ADD:
            return {...state, shopping: handleShoppingAdd(state, action.payload) }
        case PRODUCT_SHOPPING_REMOVE:
            return {...state, shopping: handleShoppingRemove(state, action.payload) }
        default:
            return state;
    }
}

export const allProduct = (products = []) => dispatch => {
    dispatch({
        type: PRODUCT_ALL,
        payload: products
    });
}

export const getProduct = id => dispatch => {
    dispatch({
        type: PRODUCT_GET,
        payload: id
    });
}

export const productShoppingAdd = producto => dispatch => {
    dispatch({
        type: PRODUCT_SHOPPING_ADD,
        payload: producto
    });
}

export const productShoppingRemove = id => dispatch => {
    dispatch({
        type: PRODUCT_SHOPPING_REMOVE,
        payload: id
    });
}

export default products;