import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {productDetailsReducer, productListReducer} from './reducers/productReducers';
import cookie from'js-cookie';
import thunk from 'redux-thunk';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';

const initialState = {

  userSignin:{
    userInfo:localStorage.getItem('userInfo')
    ?JSON.parse(localStorage.getItem('userInfo'))
    :null,
  },



    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    },
    

  };

//const cartItems = cookie.get('cartItems') || [];

// const initialState = {
//     cart:{
//         cartItems
//     },
// };

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    cart:cartReducer,
    orderCreate:orderCreateReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;