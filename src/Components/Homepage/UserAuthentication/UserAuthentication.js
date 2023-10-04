import React from "react";
import { Modal, Box } from "@mui/material";
import "./UserAuthentication.css";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
export default function UserAuthentication() {
  const open = true;

  return (
    <>
      <div>
        <Modal open={open} className="UserAuthenticationModal">
          <Box className="UserAuthenticationBox">
            <SignIn />
            <CreateAccount />
          </Box>
        </Modal>
      </div>
    </>
  );
}
