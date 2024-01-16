import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header";
import Collection from "../Pages/Collection";
import Sliders from "../Pages/Slider";
import Product from "../Pages/ProductFea";
import OrganicFront from "../Pages/OrganicFront";
import Blogposts from "../Pages/Blogposts";
import BestFungicides from "../Pages/BestFungicides";
import BestInsecticides from "../Pages/BestInsecticides";
import Recentlyviewed from "../Pages/Recentlyviewed";
import Footer from "../Pages/Footer";
import BuyNow from "../Pages/BuyNow";
import LogIn from "../Pages/LogIn";
import ShowProduct from "../Pages/ShowProduct";
import PlantGrowthRegulator from "../Pages/Plantgrowthregulator/PlantGrowthRegulator";
import PGRShowProduct from "../Pages/Plantgrowthregulator/PGRShowProduct";
import Organic from "../Pages/Organic";
import ShowOrganic from "../Pages/ShowOrganic";
import Cart from "../Pages/Cart";
import { CartProvider } from "../Pages/CartContext";
import ShowMicroProduct from "../Pages/ShowMicroProduct";
import Micronutrients from "../Pages/Micronutrients";
import ShowInsecticide from "../Pages/ShowInsecticide";
import Insecticide from "../Pages/Insecticide";
const AppRoutes = () => {
  return (
    <CartProvider>

      <Router>
        <Header />
        <Switch>
          {/* Routes for Plant Growth Regulator */}
          <Route path="/plantgrowthregulator/:productId" component={PGRShowProduct} />
          <Route path="/plantgrowthregulator" component={PlantGrowthRegulator} />
          <Route path="/cart" component={Cart} />

          {/* Routes for Fungicides */}
          <Route path="/fungicides/:productId" component={ShowProduct} />
          <Route path="/fungicides" component={BestFungicides} />

          <Route path="/insecticide/:productId" component={ShowInsecticide} />
          <Route path="/insecticide" component={BestInsecticides} />

          {/* This is for organic product */}
          <Route path="/organicproduct/:productId" component={ShowOrganic} />
          <Route path="/organicproduct" component={Organic} />

          {/* This is for Micro Nutrients */}
          <Route path="/micro-nutrients/:productId" component={ShowMicroProduct} />
          <Route path="/micro-nutrients" component={Micronutrients} />

          {/* Route for Buy Now */}
          <Route path="/BuyNow" component={BuyNow} />

          {/* Route for Log In */}
          <Route path="/LogIn" component={LogIn} />
        </Switch>

        {/* Common components rendered only on the home page */}
        <Route
          render={({ location }) => {
            if (location.pathname === "/") {
              return (
                <>
                  <Collection />
                  <Sliders />
                  <Product />
                  <OrganicFront />
                  <Blogposts />
                  <Insecticide />
                  <Recentlyviewed />
                </>
              );
            }
          }}
        />

        {/* Footer rendered on all pages */}
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default AppRoutes;