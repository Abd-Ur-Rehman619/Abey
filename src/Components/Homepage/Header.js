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
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
export default function Header() {
  const SecondaryNavbarStartBtn = [
    {
      id: 1,
      name: "PRODUCTS",
      icon: Product,
    },
    {
      id: 2,
      name: "ABEYSHOWS",
      icon: "",
    },
    {
      id: 3,
      name: "FIND A STOCKIST",
      icon: FindStock,
    },
  ];
  const SecondaryNavbarEndBtns = [
    {
      id: 1,
      name: "",
      icon: Cart,
    },
    {
      id: 2,
      name: "",
      icon: Heart,
    },
    {
      id: 3,
      name: "",
      icon: Profile,
    },
    {
      id: 4,
      name: "",
      icon: Search,
    },
    {
      id: 5,
      name: "More",
      icon: Product,
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
          <div className="LogoImg p-10">
            <img src={Clear_Space} alt="Logo"></img>
          </div>
          <div className="AbeyNavbarLinks">
            <div className="AbeyNavbarBreadcrumbs">
              <Typography fontWeight="Medium" color="orange">
                DISCOVER
              </Typography>
              <Breadcrumbs separator="|" aria-label="breadcrumb">
                <Link color="black" underline="none" href="/">
                  ABY TRADE
                </Link>
                <Link color="black" underline="none" href="/">
                  ABY SPECIFIER
                </Link>
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
                startIcon={<img src={btns.icon} />}
              >
                {btns.name}
              </Button>
            ))}
          </div>
          <div className="SecondaryNavbarEndBtns">
            {SecondaryNavbarEndBtns.map((btns) => (
              <Button
                style={SecondaryNavbarBtn}
                key={btns.id}
                startIcon={<img src={btns.icon} alt="icon" />}
              >
                {btns.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
