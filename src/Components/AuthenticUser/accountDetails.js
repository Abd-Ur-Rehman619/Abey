import {
  Avatar,
  Box,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  InputAdornment,
  InputLabel,
  ListItem,
  Modal,
  OutlinedInput,
  Stack,
  FormGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "./accountDetails.css";
import {
  CheckBox,
  EditOutlined,
  RadioButtonCheckedOutlined,
  RadioButtonUncheckedOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

export default function AccountDetails() {
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
          <div className="account-details">
            <div className="accountDetail-form">
              <h2>ACCOUNT DETAILS</h2>
              <div className="detail-form">
                <Stack direction="row" className="fullName">
                  <div className="firstName">
                    <InputLabel>First name</InputLabel>
                    <OutlinedInput
                      size="small"
                      endAdornment={
                        <InputAdornment position="start">
                          <EditOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="lastName">
                    <InputLabel className="lasstName">Last name</InputLabel>
                    <OutlinedInput
                      size="small"
                      endAdornment={
                        <InputAdornment position="start">
                          <EditOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                </Stack>

                <Stack className="email-password">
                  <div className="accountName">
                    <InputLabel>Account name</InputLabel>
                    <OutlinedInput
                      size="small"
                      endAdornment={
                        <InputAdornment position="start">
                          <EditOutlined />
                        </InputAdornment>
                      }
                    />
                    <FormHelperText className="opacity-80 text-[15px]">
                      This will be how your name will be displayed in the
                      account section and in reviews
                    </FormHelperText>
                  </div>
                  <div className="email">
                    <InputLabel>Account name</InputLabel>
                    <OutlinedInput
                      size="small"
                      type="email"
                      endAdornment={
                        <InputAdornment position="start">
                          <EditOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="currentPassword">
                    <InputLabel>Current password</InputLabel>
                    <OutlinedInput
                      size="small"
                      type="password"
                      endAdornment={
                        <InputAdornment position="start">
                          <VisibilityOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                </Stack>
              </div>

              <Stack className="forgotPassword-stack">
                <div className="forgotPassword">
                  <h2>Change password</h2>
                  <div className="newPassword">
                    <InputLabel>New Password</InputLabel>
                    <OutlinedInput
                      size="small"
                      type="password"
                      endAdornment={
                        <InputAdornment position="start">
                          <VisibilityOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div className="confirmPassword">
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                      size="small"
                      type="password"
                      endAdornment={
                        <InputAdornment position="start">
                          <VisibilityOutlined />
                        </InputAdornment>
                      }
                    />
                  </div>
                </div>
              </Stack>

              <Stack className="subscriber-checkbox">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        icon={<RadioButtonUncheckedOutlined />}
                        checkedIcon={<RadioButtonCheckedOutlined />}
                      />
                    }
                    label="Subscribe to our newsletter"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedOutlined />}
                        checkedIcon={<RadioButtonCheckedOutlined />}
                      />
                    }
                    label="Unsubscribe from our newsletter"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedOutlined />}
                        checkedIcon={<RadioButtonCheckedOutlined />}
                      />
                    }
                    label="Receive Order Updates"
                  />
                </FormGroup>
              </Stack>
              <div className="saveChanges">
                <Button variant="contained">SAVE CHANGES</Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
