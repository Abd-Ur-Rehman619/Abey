import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import AbeySpecifier from "./Components/Homepage/components/AbeySpecifier/AbeySpecifier";
import UserAuthentication from "./Components/Homepage/UserAuthentication/UserAuthentication";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import PageNotFound from "./Components/PageNotFound";
import Discover from "./Components/Homepage/components/Discover/Discover";
import Cart from "./Components/Homepage/components/Cart/Cart";
import AbeyTrade from "./Components/Homepage/components/AbeyTrade/AbeyTrade";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/abeyspecifier" element={<AbeySpecifier />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/abeytrade" element={<AbeyTrade />} />
        <Route path="/userauthentication" element={<UserAuthentication />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/accountdetail" element={<AccountDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
