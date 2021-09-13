import {
    REQUEST_FOR_PRODUCT_SUCCESS,
    REQUEST_FOR_PRODUCT_LIST,
    REQUEST_FOR_PRODUCT_FAIL,

    REQUEST_FOR_SLIDERIMAGE_SUCCESS,
    REQUEST_FOR_SLIDERIMAGE_LIST,
    REQUEST_FOR_SLIDERIMAGE_FAIL
} from './Constants'
import { _Api, END_POINT } from '../../api/Api'





export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_FOR_PRODUCT_LIST })
        const { result } = await _Api(END_POINT.GET_PRODUCTS_LIST.method, END_POINT.GET_PRODUCTS_LIST.endPoint)
        dispatch({ type: REQUEST_FOR_PRODUCT_SUCCESS, payload: result })
    } catch (error) {
        dispatch({
            type: REQUEST_FOR_PRODUCT_FAIL, error: error.response &&
                error.response.data.message ? error.response.data.message : error.message
        })

    }

}



export const sliderImages = () => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_FOR_SLIDERIMAGE_LIST })
        const { result } = await _Api(END_POINT.GET_HOME_SLIDER_IMAGES.method, END_POINT.GET_HOME_SLIDER_IMAGES.endPoint)
        dispatch({ type: REQUEST_FOR_SLIDERIMAGE_SUCCESS, payload: result })
    } catch (error) {
        dispatch({
            type: REQUEST_FOR_SLIDERIMAGE_FAIL, error: error.response &&
                error.response.data.message ? error.response.data.message : error.message
        })

    }

}
