import { Avatar, Box, ListItem, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import "./userDetails.css";

export default function UserDetails() {
  const [open, setOpen] = useState(true);
  return (
    <div className="user-details">
      <Modal open={open}>
        <Box className="modal-box">
          <div className="userInfo-bar">
            <div className="username">
              <Avatar />
              <p>
                <span style={{ color: "#D98736" }}>Hello</span> Tahir Mehmood
              </p>
            </div>
            <div className="user-details">
              <Stack>
                <ListItem style={{ color: "#D98736" }}>
                  Account details
                </ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>My addresses</ListItem>
                <ListItem>Payment methods</ListItem>
                <ListItem style={{ border: "none" }}>Logout</ListItem>
              </Stack>
            </div>
          </div>
          <div className="userInfo-form"></div>
        </Box>
      </Modal>
    </div>
  );
}
