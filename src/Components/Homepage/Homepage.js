import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./Homepage.css";
import { Route, Routes } from "react-router-dom";
import AbeySpecifier from "./components/AbeySpecifier/AbeySpecifier";
import UserAuthentication from "./UserAuthentication/UserAuthentication";
import AccountDetails from "../AuthenticUser/accountDetails";
import PageNotFound from "../PageNotFound";
import Cart from "./components/Cart/Cart";
import AbeyTrade from "./components/AbeyTrade/AbeyTrade";
import Discover from "./components/Discover/Discover";

export default function Homepage() {
  return (
    <div className="homePage">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/abeyspecifier" element={<AbeySpecifier />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/abeytrade" element={<AbeyTrade />} />
        <Route path="/userauthentication" element={<UserAuthentication />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/userdetail" element={<AccountDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
