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
import { useDispatch } from "react-redux";
import { getIsLogin, getSuccess, setLogin } from "./store/userAccount/actions";
import Contact from "./components/Footer/Contact/Contact";
import { useEffect, useState } from "react";
import Checkout from "./views/Checkout/Checkout";
import Entry from "./views/Entry/Entry";
import Profile from "./components/Cabinet/Profile/Profile";
import History from "./components/Cabinet/History/History";
import Wishlist from "./components/Cabinet/Wishlist/Wishlist";
import Address from "./components/Cabinet/Address/Address";
import { setAuthToken } from "./api/getCustomers";

const App = () => {
  const dispatch = useDispatch();
  const token = setAuthToken(localStorage.getItem("login"));

  useEffect(() => {
    token
      ? getSuccess({ success: true, token: token }, dispatch)
      : dispatch(getIsLogin(false)) && dispatch(setLogin({}));
  }, []);

  const [statusOpenBurger, setStatusOpenBurger] = useState(false);

  useEffect(() => {
    statusOpenBurger
      ? document.body.classList.add("hiddenScroll")
      : document.body.classList.remove("hiddenScroll");

    // return () => {
    //   document.body.classList.remove("hiddenScroll");
    // };
  });

  const handleBurger = () => {
    setStatusOpenBurger(!statusOpenBurger);
  };

  const closeBurger = () => {
    setStatusOpenBurger(false);
  };
  return (
    <>
      <div className="full-wrapper">
        <Header
          statusOpenBurger={statusOpenBurger}
          handleBurger={handleBurger}
          closeBurger={closeBurger}
        />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/man" element={<Man />} />
            <Route path="/woman" element={<Woman />} />
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-account/user" element={<MyAccount />} />
            <Route path="/my-account/entry" element={<Entry />} />
            <Route path="/product/:itemNo" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-account/profile" element={<Profile />} />
            <Route path="/my-account/history" element={<History />} />
            <Route path="/my-account/wishlist" element={<Wishlist />} />
            <Route path="/my-account/address-book" element={<Address />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
