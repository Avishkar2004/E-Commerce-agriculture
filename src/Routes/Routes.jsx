import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header";
import Collection from "../Pages/Collection";
import Sliders from "../Pages/Slider";
import Product from "../Pages/ProductFea";
import OrganicProduct from "../Pages/OrganicProduct";
import Blogposts from "../Pages/Blogposts";
import BestFungicides from "../Pages/BestFungicides";
import BestInsecticides from "../Pages/BestInsecticides";
import Recentlyviewed from "../Pages/Recentlyviewed";
import Footer from "../Pages/Footer";
import PlantGrowthRegulator from "../Pages/Collection/PlantGrowthRegulator";
import BuyNow from "../Pages/BuyNow";
import LogIn from "../Pages/LogIn";
// import MainProduct from "../Pages/MainProduct";
import ShowProduct from "../Pages/ShowProduct";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Routes for Plant Growth Regulator */}
        <Route path="/Plantgrowthregulator/:productId" component={PlantGrowthRegulator} />
        <Route path="/Plantgrowthregulator/" component={ShowProduct} />

        {/* Routes for Fungicides */}
        <Route path="/fungicides/:productId" component={ShowProduct} />
        <Route path="/fungicides" component={BestFungicides} />

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
                <OrganicProduct />
                <Blogposts />
                <BestInsecticides />
                <Recentlyviewed />
              </>
            );
          }
        }}
      />

      {/* Footer rendered on all pages */}
      <Footer />
    </Router>
  );
};

export default AppRoutes;
