import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {homeReducer, sliderReducer} from './reducers/home'
import {productReducer} from './reducers/product'




const rootReducer = combineReducers({
    homeReducer,
    sliderReducer,
    productReducer

})
const middleware = [thunk]
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))