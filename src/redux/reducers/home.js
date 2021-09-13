import {
    REQUEST_FOR_PRODUCT_SUCCESS,
    REQUEST_FOR_PRODUCT_LIST,
    REQUEST_FOR_PRODUCT_FAIL,

    REQUEST_FOR_SLIDERIMAGE_SUCCESS,
    REQUEST_FOR_SLIDERIMAGE_LIST,
    REQUEST_FOR_SLIDERIMAGE_FAIL
} from '../actions/Constants'

let initalState1 = {
    products: [],
    isLoading: false

}

export const homeReducer = (state =  initalState1 , action) => {
    switch (action.type) {
        case REQUEST_FOR_PRODUCT_LIST:
            return { ...state, isLoading: true, products: [] }
        case REQUEST_FOR_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, products: action.payload }
        case REQUEST_FOR_PRODUCT_FAIL:
            return { ...state, isLoading: false, error: action.payload }
            

        default:
            return state

    }

}


let initalState2 = {
    sliderImages: [],
    isLoading: false

}


export const sliderReducer = (state =  initalState2 , action) => {
    switch (action.type) {
        case REQUEST_FOR_SLIDERIMAGE_LIST:
            return { ...state, isLoading: true, sliderImages: [] }
        case REQUEST_FOR_SLIDERIMAGE_SUCCESS:
            return { ...state, isLoading: false, sliderImages: action.payload }
        case REQUEST_FOR_SLIDERIMAGE_FAIL:
            return { ...state, isLoading: false, error: action.payload }
            

        default:
            return state

    }

}

