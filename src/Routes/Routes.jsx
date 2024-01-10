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

// Buy Now Page
import BuyNow from "../Pages/BuyNow";
import LogIn from "../Pages/LogIn";
import MainProduct from "../Pages/MainProduct";
import ShowProduct from "../Pages/ShowProduct";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* PGR Start */}
        <Route path="/Plantgrowthregulator/:productId" component={PlantGrowthRegulator} />
        <Route path="/Plantgrowthregulator/" component={ShowProduct} />

        {/* fungicides start */}
        <Route path="/fungicides" component={BestFungicides} />
        <Route path="/fungicides/:productId" component={ShowProduct} />
        {/* Buy Now Route */}
        <Route path="/BuyNow" component={BuyNow} />
        <Route path="/LogIn" component={LogIn} />
      </Switch>
      <Route
        render={({ location }) => {
          if (location.pathname === "/") {
            // Render the common components only on the home page
            return (
              <>
                <Collection />
                <Sliders />
                <Product />
                <OrganicProduct />
                <Blogposts />
                <BestFungicides />
                <BestInsecticides />
                <Recentlyviewed />
              </>
            );
          }
        }}
      />
      <Footer />
    </Router>
  );
};

export default AppRoutes;