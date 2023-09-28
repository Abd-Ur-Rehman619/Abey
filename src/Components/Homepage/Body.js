import React from "react";
import "./Body.css";
import { Button } from "@mui/material";

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
      </div>
    </>
  );
}
