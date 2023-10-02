import React from "react";
import { Modal, Box } from "@mui/material";
import { useSelector } from "react-redux";
export default function UserAuthentication() {
  const open = true;
  const abeyVariable = useSelector((state) => state.abeystore);
  return (
    <>
      <div>
        <Modal open={open}>
          <Box>
            <h1>{abeyVariable}</h1>
          </Box>
        </Modal>
      </div>
    </>
  );
}
