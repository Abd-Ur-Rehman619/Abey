import React from "react";
import "./Body.css";
import { Button } from "@mui/material";
import { Image } from "@mui/icons-material";

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
            <Button startIcon={<img src="" alt="icon" />}>DISCOVER MORE</Button>
          </div>
          <div className="elips-logo">
            <img src="" alt="" />
          </div>
          <div className="message-icon">
            <Image />
          </div>
        </div>
      </div>
    </>
  );
}
