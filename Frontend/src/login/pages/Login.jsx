import React, { useState } from "react";

import "./Login.css";

import { Button } from "@mui/material";
const Login = () => {
  const [toggle, SetToggle] = useState(false);

  const ToggleHandler = (event) => {
    event.preventDefault();
    console.log("Over");
    SetToggle((prev) => {
      return !prev;
    });
  };

  return (
    <div className="LoginModalStyle">
      <div class={toggle ? "cont s--signup" : "cont"}>
        <div class="form sign-in">
          <h2 className="LoginHeader">
            <p>WELCOME</p>
          </h2>
          <label className="Login_Email">
            <span className="FormLables">Email</span>
            <input className="LoginInputs Email" type="email" />
          </label>
          <label className="Login_Password">
            <span className="FormLables">Password</span>
            <input className="LoginInputs" type="password" />
          </label>
          <p class="forgot-pass  FormLables">Forgot password?</p>
          <div className="SignInBTN">
            <button type="button" class="submit">
              Sign Up
            </button>
          </div>
        </div>

        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <p>Don't have an account? Please Sign up!</p>
            </div>
            <div class="img__text m--in">
              <p>If you already have an account, just sign in.</p>
            </div>

            <div class="SwitchStyle">
              <Button href="/" onClick={ToggleHandler} class="SwitchStyle">
                {toggle ? "Sign In" : "Sign Up"}
              </Button>
            </div>
          </div>

          <div
            class="form sign-up"
            style={{ width: toggle ? "700px" : "700px" }}
          >
            <h2 className="SignUpHeader">
              <b>CREATE YOUR ACCOUNT</b>
            </h2>
            <label className="SignUp_Name">
              <span className="FormLables">Name</span>
              <input className="LoginInputs" type="text" />
            </label>
            <label className="SignUp_Email">
              <span className="FormLables">Email</span>
              <input className="LoginInputs" type="email" />
            </label>
            <div className="Signup_Password_Phone">
              <label className="SignUp_Password">
                <span className="FormLables">Password</span>
                <input className="LoginInputs" type="password" />
              </label>
              <label className="SignUp_Phone">
                <span className="FormLables">Phone</span>
                <input className="LoginInputs" type="text" />
              </label>
            </div>
            <div className="SignUpBTN">
              <button type="button" class="submit">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
