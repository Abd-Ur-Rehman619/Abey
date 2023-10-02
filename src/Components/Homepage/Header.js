import React from "react";
import "./Header.css";
import Clear_Space from "../../Assets/Clear_Space.png";
import Product from "../../Assets/Product.png";
import FindStock from "../../Assets/FindStock.png";
import Cart from "../../Assets/Cart.png";
import Heart from "../../Assets/Heart.png";
import Profile from "../../Assets/Profile.png";
import Search from "../../Assets/Search.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const SecondaryNavbarStartBtn = [
    {
      id: 1,
      name: "PRODUCTS",
      icon: Product,
      link: "",
    },
    {
      id: 2,
      name: "ABEY SHOWS",
      icon: "",
      link: "",
    },
    {
      id: 3,
      name: "FIND A STOCKIST",
      icon: FindStock,
      link: "",
    },
  ];
  const SecondaryNavbarEndBtns = [
    {
      id: 1,
      name: "",
      icon: Cart,
      link: "/cart",
    },
    {
      id: 2,
      name: "",
      icon: Heart,
      link: "",
    },
    {
      id: 3,
      name: "",
      icon: Profile,
      link: "/userauthentication",
    },
    {
      id: 4,
      name: "",
      icon: Search,
      link: "",
    },
    {
      id: 5,
      name: "More",
      icon: Product,
      link: "",
    },
  ];
  const SecondaryNavbarBtn = {
    color: "#f8fafc",
    fontWeight: "bold",
  };
  return (
    <>
      <div className="Header">
        <div className="AbeyNavbar">
          <div className="AbeyNavbarComponents">
            <img src={Clear_Space} alt="Logo"></img>
          </div>
          <div className="AbeyNavbarComponents">
            <div className="AbeyNavbarBreadcrumbs">
              <NavLink to="/discover" className="text-[orange] font-medium">
                DISCOVER
              </NavLink>
              <Breadcrumbs separator="|" aria-label="breadcrumb">
                <NavLink className="text-[black] font-medium" to="/abeytrade">
                  ABY TRADE
                </NavLink>
                <NavLink
                  className="text-[black] font-medium"
                  to="/abeyspecifier"
                >
                  ABY SPECIFIER
                </NavLink>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <div className="SecondaryNavbar">
          <div className="SecondaryNavbarStartBtn">
            {SecondaryNavbarStartBtn.map((btns) => (
              <Button
                style={SecondaryNavbarBtn}
                key={btns.id}
                startIcon={<img src={btns.icon} alt="" />}
              >
                {btns.name}
              </Button>
            ))}
          </div>
          <div className="SecondaryNavbarEndBtns">
            {SecondaryNavbarEndBtns.map((btns) => (
              <Link to={btns.link}>
                <Button
                  style={SecondaryNavbarBtn}
                  key={btns.id}
                  startIcon={<img src={btns.icon} alt="icon" />}
                >
                  {btns.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
