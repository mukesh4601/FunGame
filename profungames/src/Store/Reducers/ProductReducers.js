import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    products: [],
    mailSent: false,
    coupon: []
}
const ProductReducers = handleActions({
    ALL_PRODUCTS: (state, action) => {
        return { ...state, mailSent: true, products: action.payload };
    },
    COUPON_CHECK: (state, action) => {
        return { ...state, mailSent: true, coupon: action.payload };
    },

}, INITIAL_STATE);

export default ProductReducers;