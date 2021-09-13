import {

    REQUEST_FOR_PRODUCT_DETAIL_SUCCESS,
    REQUEST_FOR_PRODUCT_DETAIL_LIST,
    REQUEST_FOR_PRODUCT_DETAIL_FAIL,
   
} from '../actions/Constants'

let initalState1 = {
    product: {},
    isLoading: false

}

export const productReducer = (state =  initalState1 , action) => {
    switch (action.type) {
        case REQUEST_FOR_PRODUCT_DETAIL_LIST:
            return { ...state, isLoading: true, product: {} }
        case REQUEST_FOR_PRODUCT_DETAIL_SUCCESS:
            return { ...state, isLoading: false, product: action.payload }
        case REQUEST_FOR_PRODUCT_DETAIL_FAIL:
            return { ...state, isLoading: false, error: action.payload }
            

        default:
            return state

    }

}


