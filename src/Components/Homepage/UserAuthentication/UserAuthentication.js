import React from "react";
import CloseBtn from "../../../Assets/CloseBtn.png";
import {
  Modal,
  Box,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  Checkbox,
} from "@mui/material";
import {
  VisibilityOutlined,
  RadioButtonCheckedOutlined,
  RadioButtonUncheckedOutlined,
} from "@mui/icons-material";
import "./UserAuthentication.css";
import { NavLink } from "react-router-dom";
export default function UserAuthentication() {
  const open = true;

  return (
    <>
      <div>
        <Modal open={open} className="UserAuthenticationModal">
          <Box className="UserAuthenticationBox">
            <div className="SignIn">
              <div className="InfoSection mt-32">
                <div>
                  <h2>SIGN IN</h2>
                </div>
                <div className="userEmail mb-8">
                  <InputLabel className="mb-2">
                    Username or email address
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    endAdornment={<InputAdornment position="start" />}
                  />
                </div>
                <div className="userPassword mb-8">
                  <InputLabel className="mb-2">Password</InputLabel>
                  <OutlinedInput
                    size="small"
                    endAdornment={
                      <InputAdornment position="start">
                        <button>
                          <VisibilityOutlined />
                        </button>
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="SubmitInfo mb-10">
                  <Button>SIGN IN</Button>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedOutlined />}
                        checkedIcon={<RadioButtonCheckedOutlined />}
                      />
                    }
                    label="Remember me"
                  />
                </div>
                <div>
                  <NavLink className="text-[#45434280]">
                    Forget your password?
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="CreateNewAccount">
              <div className="flex justify-end">
                <NavLink to="/">
                  <Button>
                    <img src={CloseBtn} alt="Close" />
                  </Button>
                </NavLink>
              </div>
              <div className="InfoSection mt-20 pt-2">
                <div>
                  <h2>CREATE NEW ACCOUNT</h2>
                </div>
                <div className="userEmail mb-8">
                  <InputLabel className="mb-2">
                    Username or email address
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    endAdornment={<InputAdornment position="start" />}
                  />
                </div>
                <div className="userPassword mb-8">
                  <InputLabel className="mb-2">Password</InputLabel>
                  <OutlinedInput
                    size="small"
                    endAdornment={
                      <InputAdornment position="start">
                        <button>
                          <VisibilityOutlined />
                        </button>
                      </InputAdornment>
                    }
                  />
                </div>
                <div className="mb-5">
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedOutlined />}
                        checkedIcon={<RadioButtonCheckedOutlined />}
                      />
                    }
                    label="Subscribe to our newsletter"
                  />
                </div>
                <div className="PersonalInfo mb-5">
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span>
                      <NavLink className="text-[orange]">
                        privacy policy.
                      </NavLink>
                    </span>
                  </p>
                </div>
                <div className="SubmitInfo">
                  <Button>REGISTER</Button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
