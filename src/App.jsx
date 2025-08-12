import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";
import ProductShowcase from "./pages/products_show/Products";
import DealsAndOffers from "./pages/deals_and_offers/DealsAndOffers";
import HomeAndOutdoor from "./pages/home_and_outdoor/HomeAndOutdoor";
import ElectronicAndGadgets from "./pages/electronics_and_gadgets/ElectronicsAndGadgets";
import Home from "./pages/home/Home";
import MobileProducts from "./pages/mobile/MobileProducts";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/mobile-products"
          element={
            <>
              <Navbar />
              <MobileProducts />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
