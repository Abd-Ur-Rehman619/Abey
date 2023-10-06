import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSignIn = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find((u) => u.Email === email);

    if (!user || user.Password !== password) {
      setError("Invalid email or password.");
    } else {
      navigate("/userdetail");
    }
  };

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
              type="email"
              value={email}
              onChange={handleEmailChange}
              endAdornment={<InputAdornment position="start" />}
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
          <div className="userPassword mb-8">
            <InputLabel className="mb-2">Password</InputLabel>
            <OutlinedInput
              size="small"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="start">
                  <button>
                    <VisibilityOutlined />
                  </button>
                </InputAdornment>
              }
            />
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>

          <div className="SubmitInfo mb-10">
            <Button onClick={handleSignIn}>SIGN IN</Button>
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
