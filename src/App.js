import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import AbeySpecifier from "./Components/NavComponents/AbeySpecifier";
import Discover from "./Components/NavComponents/Discover";
import AbeyTrade from "./Components/NavComponents/AbeyTrade";
import UserAuthentication from "./Components/UserAuthentication/UserAuthentication";
import Cart from "./Components/NavComponents/Cart";

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
      </Routes>
    </div>
  );
}

export default App;
