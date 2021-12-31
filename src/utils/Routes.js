import React from "react";
import NoMatch from "./NotFound";
import HomePage from "../pages/shop/HomePage";
import AdminNavBar from "../components/organisms/admin/navBarAdmin";
import CheckOut from "../pages/shop/Checkout";
import ProductInfo from "../pages/shop/ProductDetails";
import PrivateRoute from "../context/PrivateRoute";
import SignInSide from "../pages/admin/LogIn";
import OrderConfirmation from "../pages/shop/OrderConfirmation";
import { Elements, StripeProvider } from "react-stripe-elements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ShopLayout = () => (
  <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
    <Elements>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/checkout" exact component={CheckOut} />
        <Route path="/success" exact component={OrderConfirmation} />
        <Route
          path="/productInfo/:id"
          render={(props) => <ProductInfo {...props} isAuthed={true} />}
        />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Elements>
  </StripeProvider>
);

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignInSide} />
        <PrivateRoute path="/administration" component={AdminNavBar} />
        <Route component={ShopLayout} />
      </Switch>
    </Router>
  );
};

export default Routes;
