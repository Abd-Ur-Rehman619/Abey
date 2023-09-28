import React from "react";
import "./Body.css";
import { Button } from "@mui/material";
import { Image } from "@mui/icons-material";
import Discover from "../../Assets/discover.png";
import Ellipse from "../../Assets/Ellipse.png";
import Message from "../../Assets/message.png";

export default function Body() {
  return (
    <>
      <div className="home-body">
        <div className="body-content">
          <div className="body-text">
            <p>Push the limits of creativity and design</p>
            <p>Providing our clients with unique and innovative solutions</p>
          </div>
          <div className="body-button">
            <Button>Explore Kitchen CollectionS</Button>
          </div>
        </div>
        <div className="body-footer">
          <div className="footer-btn">
            <Button startIcon={<img src={Discover} alt="icon" />}>
              DISCOVER MORE
            </Button>
          </div>
          <div className="ellipse-logo">
            <img src={Ellipse} alt="" />
          </div>
          <div className="message-icon">
            <img src={Message} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
