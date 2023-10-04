import React from "react";
import { NavLink } from "react-router-dom";
import {
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
export default function SignIn() {
  return (
    <>
      <div className="SignIn">
        <div className="InfoSection mt-32">
          <div>
            <h2>SIGN IN</h2>
          </div>
          <div className="userEmail mb-8">
            <InputLabel className="mb-2">Username or email address</InputLabel>
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
    </>
  );
}
