import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation';
import ShoppingCart from '../../pages/ShoppingCart';
const RouterNavigation = () => {
  return (
    <Routes>
        <div>
          Yonela
            <Navigation />
            {/* <Route path="/nav" component={Navigation} /> */}
            {/* <Route path='./shoppingcart' element={<ShoppingCart />} /> */}
            {/* <Cart /> */}
            {/* <Route path='/admin' component={Admin} />
            <Admin />
            <Route path='/feeds' component={Feeds} />
            <Feeds />
            <Route path='/feedback' component={Feedback} />
          <Feedback /> */}
        </div>
    </Routes>
  )
};
export default RouterNavigation