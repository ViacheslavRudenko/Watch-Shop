import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Man from "./views/Man/Man";
import Woman from "./views/Woman/Woman";
import Accessory from "./views/Accessory/Accessory";
import Search from "./views/Search/Search";
import MyAccount from "./views/MyAccount/MyAccount";
import Cart from "./views/Cart";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/product/:itemNo" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
