import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = () => 1
const middleware = [thunk]
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))