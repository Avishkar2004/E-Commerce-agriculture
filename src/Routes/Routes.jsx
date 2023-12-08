import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Pages/Header";
import Navigation from "../Pages/Navigation";
import Collection from "../Pages/Collection";
import Sliders from "../Pages/Slider";
import Product from "../Pages/Product";
import OrganicProduct from "../Pages/OrganicProduct";
import Blogposts from "../Pages/Blogposts";
import BestFungicides from "../Pages/BestFungicides";
import BestInsecticides from "../Pages/BestInsecticides";
import Recentlyviewed from "../Pages/Recentlyviewed";
import Footer from "../Pages/Footer";
import PlantGrowthRegulator from "../Pages/Collection/PlantGrowthRegulator";
import Organicproduct from "../Pages/Collection/Organicproduct";
import micronutrients from "../Pages/Collection/micronutrients";
import Insecticide from "../Pages/Collection/Insecticide";
import TopFungi from "../Pages/Collection/TopFungi";
import Sonata from "../Pages/Collection/PGRProduct/Sonata";
import Planofix from "../Pages/Collection/PGRProduct/Planofix";
import CuttingAid from "../Pages/Collection/PGRProduct/CuttingAid";
import Booster2 from "../Pages/Collection/PGRProduct/Booster2";
import TataRalligold2 from "../Pages/Collection/PGRProduct/TataRalligold2";
import Lihocin from "../Pages/Collection/PGRProduct/Lihocin";
import FloraMax from "../Pages/Collection/PGRProduct/FloraMax";
import TagBumper from "../Pages/Collection/PGRProduct/TagBumper";
import Double from "../Pages/Collection/PGRProduct/Double";
import Stabilizer from "../Pages/Collection/PGRProduct/Stabilizer";
import Taboli from "../Pages/Collection/PGRProduct/Taboli";
import Kasub from "../Pages/Collection/PGRProduct/Kasub";
import Dhanvarsha from "../Pages/Collection/PGRProduct/DhanvarshaOrganic";
import Atomic from "../Pages/Collection/PGRProduct/Atomic";
import Theeta from "../Pages/Collection/OrganicProduct/Theeta";
import SonataOrganic from "../Pages/Collection/OrganicProduct/SonataOrganic";
import Kaka from "../Pages/Collection/OrganicProduct/KakaOrganic";
import BiovitaxOrganic from "../Pages/Collection/OrganicProduct/BiovitaxOrganic";
import ThrillOrganic from "../Pages/Collection/OrganicProduct/ThrillOrganic";
import BarrixOrganic from "../Pages/Collection/OrganicProduct/BarrixOrganic";
import TataRalligoldOrganic from "../Pages/Collection/OrganicProduct/TataRalligoldOrganic";
import AmbitionOrganic from "../Pages/Collection/OrganicProduct/AmbitionOrganic";
import BarrixCatchOrganic from "../Pages/Collection/OrganicProduct/BarrixCatchOrganic";
import BahaarOrganic from "../Pages/Collection/OrganicProduct/BahaarOrganic";
import ActivePlusOrganic from "../Pages/Collection/OrganicProduct/ActivePlusOrganic";
import BoneMeal from "../Pages/Collection/OrganicProduct/BoneMeal";
import VermicompostOrganic from "../Pages/Collection/OrganicProduct/VermicompostOrganic";
import Mobomin2Micro from "../Pages/Collection/MicroNutrients/Mobomin2Micro";
import AgrominMax from "../Pages/Collection/MicroNutrients/AgrominMax";
import AllwinGoldSuper from "../Pages/Collection/MicroNutrients/AllwinGoldSuper";
import AgrominGold from "../Pages/Collection/MicroNutrients/AgrominGold";
import AriesBoron from "../Pages/Collection/MicroNutrients/AriesBoron";
import Chelafer from "../Pages/Collection/MicroNutrients/Chelafer";
import Nutriclick from "../Pages/Collection/MicroNutrients/Nutriclick";
import Combical from "../Pages/Collection/MicroNutrients/Combical";
import AgromminFoliar from "../Pages/Collection/MicroNutrients/AgromminFoliar";
import AllwinTopPlus from "../Pages/Collection/MicroNutrients/AllwinTopPlus";
import Phosphocop from "../Pages/Collection/MicroNutrients/Phosphocop";
import AriesAntox from "../Pages/Collection/MicroNutrients/AriesAntox";
import Horticab from "../Pages/Collection/MicroNutrients/Horticab";
import Mnchel from "../Pages/Collection/MicroNutrients/Mnchel";
import FantacPlus from "../Pages/Collection/MicroNutrients/FantacPlus";
import Prozinc from "../Pages/Collection/MicroNutrients/Prozinc";
import Surplus from "../Pages/Collection/MicroNutrients/Surplus";
import Chealacop from "../Pages/Collection/MicroNutrients/Chealacop";
import Confidor from "../Pages/Collection/Insecticides/Confidor";
import Pegasus from "../Pages/Collection/Insecticides/Pegasus";
import Titamide from "../Pages/Collection/Insecticides/Titamide";
import Oberon from "../Pages/Collection/Insecticides/Oberon";
import Admire from "../Pages/Collection/Insecticides/Admire";
import Hamla from "../Pages/Collection/Insecticides/Hamla";
import Monocil from "../Pages/Collection/Insecticides/Monocil";
import Ustaad from "../Pages/Collection/Insecticides/Ustaad";
import Omite from "../Pages/Collection/Insecticides/Omite";
import Kingdoxa from "../Pages/Collection/Insecticides/Kingdoxa";
import Osheen from "../Pages/Collection/Insecticides/Osheen";
import Jump from "../Pages/Collection/Insecticides/Jump";
import Ulala from "../Pages/Collection/Insecticides/Ulala";
import Movento from "../Pages/Collection/Insecticides/Movento";
import Kite from "../Pages/Collection/Insecticides/Kite";
import Missile from "../Pages/Collection/Insecticides/Missile";
import Saaf from "../Pages/Collection/Fungicides/Saaf";
import Ridomil from "../Pages/Collection/Fungicides/Ridomil";
import Bavistin from "../Pages/Collection/Fungicides/Bavistin";
import Indofil from "../Pages/Collection/Fungicides/Indofil";
import Tatablitox from "../Pages/Collection/Fungicides/Tatablitox";
import TataMaster from "../Pages/Collection/Fungicides/TataMaster";
import ContafPlus from "../Pages/Collection/Fungicides/ContafPlus";
import Roko from "../Pages/Collection/Fungicides/Roko";
import Kavach from "../Pages/Collection/Fungicides/Kavach";
import Profexsuper from "../Pages/Collection/Fungicides/Profexsuper";
import FoliogoldFungi from "../Pages/Collection/Fungicides/FoliogoldFungi";
import FlickSuper from "../Pages/Collection/Fungicides/FlickSuper";
import Indofilz from "../Pages/Collection/Fungicides/Indofilz";
import Baan from "../Pages/Collection/Fungicides/Baan";
import Safety from "../Pages/Collection/Fungicides/Safety";
import Conika from "../Pages/Collection/Fungicides/Conika";
import Sivic from "../Pages/Collection/Fungicides/Sivic";
import Syngenta from "../Pages/Collection/Insecticides/Syngenta";
import Ekalux from "../Pages/Collection/Insecticides/Ekalux";
import Matador from "../Pages/Collection/Insecticides/Matador";
import Macrofert from "../Pages/Collection/Products/Macrofert";
import Fertimax from "../Pages/Collection/Products/Fertimax";
import FertimaxK from "../Pages/Collection/Products/FertimaxK";
import FertimaxNK from "../Pages/Collection/Products/FertimaxNK";
import FertimaxPK from "../Pages/Collection/Products/FertimaxPK";
import FertimaxCN from "../Pages/Collection/Products/FertimaxCN";
import FertimaxNPK from "../Pages/Collection/Products/FertimaxNPK";
import MarinoGold from "../Pages/Collection/Products/MarinoGold";
import HydropPro from "../Pages/Collection/Products/HydropPro";
import Trishool from "../Pages/Collection/Products/Trishool";
import Zincomix from "../Pages/Collection/Products/Zincomix";
import Payment from "../Pages/Payment";
// import CreditCard from "../Pages/CreditCard";
const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Collection />
      <Switch>
        {/* PGR Start */}
        <Route path="/Plantgrowthregulator/super-sonata" component={Sonata} />
        <Route path="/Plantgrowthregulator/planofix" component={Planofix} />
        <Route path="/Plantgrowthregulator/cuttingAid" component={CuttingAid} />
        <Route path="/Plantgrowthregulator/booster2" component={Booster2} />
        <Route
          path="/Plantgrowthregulator/tataralligold2"
          component={TataRalligold2}
        />
        <Route path="/Plantgrowthregulator/lihocin" component={Lihocin} />
        <Route path="/Plantgrowthregulator/floraMax" component={FloraMax} />
        <Route path="/Plantgrowthregulator/tagbumper" component={TagBumper} />
        <Route path="/Plantgrowthregulator/double" component={Double} />
        <Route path="/Plantgrowthregulator/stabilizer" component={Stabilizer} />
        <Route path="/Plantgrowthregulator/taboli" component={Taboli} />
        <Route path="/Plantgrowthregulator/kasub" component={Kasub} />
        <Route path="/Plantgrowthregulator/dhanvarsha" component={Dhanvarsha} />
        <Route path="/Plantgrowthregulator/atomic" component={Atomic} />
        <Route path="/Plantgrowthregulator" component={PlantGrowthRegulator} />
        {/* PGR Done */}

        {/* Organic start */}
        <Route path="/OrganicProduct/theeta" component={Theeta} />
        <Route path="/OrganicProduct/sonata" component={SonataOrganic} />
        <Route path="/OrganicProduct/kaka" component={Kaka} />
        <Route path="/OrganicProduct/biovitax" component={BiovitaxOrganic} />
        <Route path="/OrganicProduct/thrill" component={ThrillOrganic} />
        <Route path="/OrganicProduct/barrix" component={BarrixOrganic} />
        <Route
          path="/OrganicProduct/tataralligold"
          component={TataRalligoldOrganic}
        />
        <Route path="/OrganicProduct/ambition" component={AmbitionOrganic} />
        <Route
          path="/OrganicProduct/barrixcatch"
          component={BarrixCatchOrganic}
        />
        <Route path="/OrganicProduct/tatabahar" component={BahaarOrganic} />
        <Route
          path="/OrganicProduct/activeplus"
          component={ActivePlusOrganic}
        />
        <Route path="/OrganicProduct/bonemeal" component={BoneMeal} />
        <Route path="/OrganicProduct/soil" component={VermicompostOrganic} />

        <Route path="/OrganicProduct" component={Organicproduct} />
        {/* Organic End */}

        {/* Micor nutrients start */}
        <Route path="/micro-nutrients/mobomin2" component={Mobomin2Micro} />
        <Route path="/micro-nutrients/agrominMax" component={AgrominMax} />
        <Route
          path="/micro-nutrients/allwingoldSuper"
          component={AllwinGoldSuper}
        />
        <Route path="/micro-nutrients/agromingold" component={AgrominGold} />
        <Route path="/micro-nutrients/ariesboron" component={AriesBoron} />
        <Route path="/micro-nutrients/chelafer" component={Chelafer} />
        <Route path="/micro-nutrients/nutriclick" component={Nutriclick} />
        <Route path="/micro-nutrients/combical" component={Combical} />
        <Route
          path="/micro-nutrients/agromminFoliar"
          component={AgromminFoliar}
        />
        <Route
          path="/micro-nutrients/allwinTopPlus"
          component={AllwinTopPlus}
        />
        <Route path="/micro-nutrients/phosphocop" component={Phosphocop} />
        <Route path="/micro-nutrients/ariestantox" component={AriesAntox} />
        <Route path="/micro-nutrients/horticab" component={Horticab} />
        <Route path="/micro-nutrients/mnchel" component={Mnchel} />
        <Route path="/micro-nutrients/fantaplus" component={FantacPlus} />
        <Route path="/micro-nutrients/prozinc" component={Prozinc} />
        <Route path="/micro-nutrients/surplus" component={Surplus} />
        <Route
          path="/micro-nutrients/dhanvarshaOrganic"
          component={Dhanvarsha}
        />
        <Route path="/micro-nutrients/surplus" component={Surplus} />
        <Route path="/micro-nutrients/chealacop" component={Chealacop} />

        <Route path="/micro-nutrients" component={micronutrients} />

        {/* Micro nutrients end */}

        {/* Insectide Start */}
        <Route path="/Insecticide/theetaInsect" component={Theeta} />
        <Route path="/Insecticide/kaka" component={Kaka} />
        <Route path="/Insecticide/confidor" component={Confidor} />
        <Route path="/Insecticide/pegasus" component={Pegasus} />
        <Route path="/Insecticide/titamide" component={Titamide} />
        <Route path="/Insecticide/oberon" component={Oberon} />
        <Route path="/Insecticide/admire" component={Admire} />
        <Route path="/Insecticide/hamla" component={Hamla} />
        <Route path="/Insecticide/monocil" component={Monocil} />
        <Route path="/Insecticide/ustaad" component={Ustaad} />
        <Route path="/Insecticide/omite" component={Omite} />
        <Route path="/Insecticide/kingdoxa" component={Kingdoxa} />
        <Route path="/Insecticide/osheen" component={Osheen} />
        <Route path="/Insecticide/jump" component={Jump} />
        <Route path="/Insecticide/ulala" component={Ulala} />
        <Route path="/Insecticide/movento" component={Movento} />
        <Route path="/Insecticide/kite" component={Kite} />
        <Route path="/Insecticide/missile" component={Missile} />
        <Route path="/Insecticide/syngenta" component={Syngenta} />
        <Route path="/Insecticide/ekalux" component={Ekalux} />
        <Route path="/Insecticide/matador" component={Matador} />

        <Route path="/Insecticide" component={Insecticide} />
        {/* Insectice end  */}

        {/* Fungicide start */}

        <Route path="/fungicides/saaf" component={Saaf} />
        <Route path="/fungicides/ridomil" component={Ridomil} />
        <Route path="/fungicides/bavistin" component={Bavistin} />
        <Route path="/fungicides/indofil" component={Indofil} />
        <Route path="/fungicides/tatablitox" component={Tatablitox} />
        <Route path="/fungicides/tatamaster" component={TataMaster} />
        <Route path="/fungicides/contafplus" component={ContafPlus} />
        <Route path="/fungicides/roko" component={Roko} />
        <Route path="/fungicides/kavach" component={Kavach} />
        <Route path="/fungicides/profexsuper" component={Profexsuper} />
        <Route path="/fungicides/foliogold" component={FoliogoldFungi} />
        <Route path="/fungicides/indofilz" component={Indofilz} />
        <Route path="/fungicides/flickSuper" component={FlickSuper} />
        <Route path="/fungicides/baan" component={Baan} />
        <Route path="/fungicides/safety" component={Safety} />
        <Route path="/fungicides/kasub" component={Kasub} />
        <Route path="/fungicides/conika" component={Conika} />
        <Route path="/fungicides/sivic" component={Sivic} />
        <Route path="/fungicides" component={TopFungi} />

        {/* Fungicide end */}

        <Route path="/product/macrofert" component={Macrofert} />
        <Route path="/product/fertimax" component={Fertimax} />
        <Route path="/product/fertimaxK" component={FertimaxK} />
        <Route path="/product/fertimaxNK" component={FertimaxNK} />
        <Route path="/product/fertimaxPK" component={FertimaxPK} />
        <Route path="/product/fertimaxCN" component={FertimaxCN} />
        <Route path="/product/fertimaxNPK" component={FertimaxNPK} />
        <Route path="/product/marinogold" component={MarinoGold} />
        <Route path="/product/hydropPro" component={HydropPro} />
        <Route path="/product/trishool" component={Trishool} />
        <Route path="/product/zincomix" component={Zincomix} />
      <Route path="/payment" component={Payment} />

      </Switch>
      {/* <Route path="/payment/creditcard" component={CreditCard} /> */}
      

      <Route
        render={({ location }) => {
          if (location.pathname === "/") {
            // Render the common components only on the home page
            return (
              <>
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
