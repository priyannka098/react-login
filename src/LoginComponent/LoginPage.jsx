import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [currState, setCurrState] = useState("LOGIN");

  const showSignup = () => {
    const confirmPwdBox = document.getElementById("cnfrm-pwd");
    confirmPwdBox.style.display = "block";
    setCurrState("SIGNUP!");
    const forgotPwdText = document.getElementById("forgot-pwd");
    forgotPwdText.style.display = "none";
  };

  const showLogin = () => {
    const confirmPwdBox = document.getElementById("cnfrm-pwd");
    confirmPwdBox.style.display = "none";
    setCurrState("LOGIN");
    const forgotPwdText = document.getElementById("forgot-pwd");
    forgotPwdText.style.display = "block";
  };

  return (
    <>
      <div>
        <div className="outer-container">
          <div className="image">
            <img src={require("../LoginComponent/ReactLogo.png")}></img>
          </div>
          <div className="passage leading-4 mt-4">
            <p>SOME RANDOM TEXT,SOME RANDOM</p>
            <p className="para2">TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
          </div>

          <div className="login-container">
            <div
              className={currState === "LOGIN" ? "focus-login" : "login"}
              id="login-tab"
            >
              <button onClick={showLogin}>Login</button>
            </div>
            <div
              className={currState === "SIGNUP!" ? "focus-signup" : "signup"}
              id="signup-tab"
            >
              <button onClick={showSignup}>Signup</button>
            </div>
          </div>

          <div className="login-form">
            <input
              name="email"
              type="email"
              className="box-styling abc p-5 h-12 "
              placeholder="Email Address"
            />
            <input
              type="password"
              className=" box-styling p-5  h-12"
              id="pwd"
              placeholder=" Password"
              name="pwd"
            />
            <input
              type="password"
              className=" box-styling p-5 h-12 hidden"
              id="cnfrm-pwd"
              placeholder=" Confirm Password"
              name="pwd"
            />
            <button className="box-styling submit h-12">{currState}</button>
          </div>

          <div className="psw-box">
            <p className="psw" id="forgot-pwd">
              Forgot Password?
            </p>
          </div>

          <div className="text-box mb-4 mt-6">
            <p className="text">or login with</p>
          </div>

          <div className="icons-image-box">
            <div className="circle">
              <img
                src={require("../images/google.png")}
                className="img-icon"
              ></img>
            </div>
            <div className="circle">
              <img
                src={require("../images/facebook.png")}
                className="img-icon"
              ></img>
            </div>
            <div className="circle">
              <img
                src={require("../images/twitter.png")}
                className="img-icon"
              ></img>
            </div>
          </div>
          <div className="create-acnt-box my-5">
            <p className="create-act">
              Don't have an account?{" "}
              <span className="text-[#E70B89]">Create new now!</span>
            </p>
          </div>
          <div className="terms-box">
            <p className=" terms">
              By signing up, you agree with our{" "}
              <span className="text-[#E70B89] underline underline-offset-1">
                Terms & Conditions
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
