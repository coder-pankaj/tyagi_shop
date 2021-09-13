import {
    REQUEST_FOR_PRODUCT_DETAIL_SUCCESS,
    REQUEST_FOR_PRODUCT_DETAIL_LIST,
    REQUEST_FOR_PRODUCT_DETAIL_FAIL,
} from './Constants'
import { _Api, END_POINT } from '../../api/Api'


export const productDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: REQUEST_FOR_PRODUCT_DETAIL_LIST })
        const { result } = await _Api(END_POINT.GET_PRODUCTS_ITEM.method, `${END_POINT.GET_PRODUCTS_ITEM.endPoint}${id}`)
        dispatch({ type: REQUEST_FOR_PRODUCT_DETAIL_SUCCESS, payload: result })
    } catch (error) {
        console.log("error", error)
        dispatch({
            type: REQUEST_FOR_PRODUCT_DETAIL_FAIL, error: error.response &&
                error.response.data.message ? error.response.data.message : error.message
        })

    }

}



