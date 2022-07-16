//The router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import ShopPage from "../components/shopPage/ShopPage";
import TestPage from "../pages/TestPage";
import ProductPage from "../components/productPage/ProductPage";
import Cart from "../components/cart/Cart";
import Checkout from "../components/checkoutPage/Checkout";
import Confirmation from "../components/checkoutPage/Confirmation";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='tesla-group-project/' element={<App />}>
          <Route index element={<ShopPage />} />
          <Route
            // exact
            path='/tesla-group-project/category/:productCategory/'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='/tesla-group-project/category/:productCategory/:subCategory'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='/tesla-group-project/category/:productCategory/:subCategory/:option'
            element={<ProductPage />}
          />
          <Route
            // exact
            path='/tesla-group-project/search/:searchValue'
            element={<TestPage />}
          />
          <Route
            // exact
            path='/tesla-group-project/checkout'
            element={<Checkout />}
          />
          <Route
            // exact
            path='/tesla-group-project/checkout/confirm'
            element={<Confirmation />}
          />
          <Route exact path='/tesla-group-project/cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
}
