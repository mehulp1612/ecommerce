import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import data from './Data'
import Product from './components/Product'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import SigninScreen from './screen/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screen/RegisterScreen';
import ShippingAddScreen from './screen/ShippingAddScreen';
import PaymentMethodScreen from './screen/PaymentMethodScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';

function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="main">
        <header className="row">

          <div>
            <Link className='brand' to="/">Lala's Sweets</Link>
          </div>

          <div>

            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className='dropdown'>
                  <Link to='#'>
                    {userInfo.name} <i className='fa fa-caret-down'></i> {' '}
                  </Link>
                  <ul>
                    <Link to='#signout' onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </ul>
                </div>
              ) : <Link to="/signin">Sign In</Link>

            }


          </div>

        </header>

        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register"component={RegisterScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/shipping' component={ShippingAddScreen}></Route>
          <Route path='/payment' component={PaymentMethodScreen}></Route>
          <Route path='/placeorder' component={PlaceOrderScreen}></Route>
          {/* <Route path="/order/:id" component={OrderScreen}></Route> */}

        </main>

        <footer className="row center">
          Since 1965
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
