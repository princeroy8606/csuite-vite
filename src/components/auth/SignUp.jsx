import React, { useState } from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp = ({ toggleSlide }) => {
  const [form, setForm] = useState({
    email: "",
    password: null,
    name: "",
    phoneNumber: "",
  });
  const [ispasswordConformed, setIspasswordConformed] = useState(false);
  const [errorArray, setErrorArray] = useState([]);

  const handleValueChange = (type, value) => {
    setForm({ ...form, [type]: value });
  };

  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth,form?.email,form?.password);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(form);

  return (
    <div className="auth-content-right">
      <div className="auth-logo-cnt">
        <img
          src={assets.Images.CSuiteLogo}
          alt="logo"
          className="auth-logo-img"
        />
      </div>
      <h2 className="msg-title-text">Sign Up</h2>
      <p className="msg-content-text">Let’s get started with your account</p>
      <form className="login-form signup-form">
        <div className="login-input-cnt signup-input-cnt">
          <input
            type="text"
            placeholder="Name"
            className="login-input"
            onChange={(e) => handleValueChange("name", e.target.value)}
          />
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <input
            type="text"
            placeholder="Phone number, email or username"
            className="login-input"
            onChange={(e) => handleValueChange("phone", e.target.value)}
          />
          <img
            src={assets.Images.mail_icon}
            alt="mail-icon"
            className="input-absolute-img"
          />
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => handleValueChange("password", e.target.value)}
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="mail-icon"
            className="input-absolute-img"
          />
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <input
            type="password"
            placeholder="Conform password"
            className="login-input"
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="mail-icon"
            className="input-absolute-img"
          />
        </div>
        <div className="fgrt-pswrd-btn" onClick={() => handleSignUp()}>
          <p>Sign Up</p>
        </div>
      </form>
      <div className="signup">
        Already have an account?{" "}
        <a onClick={() => toggleSlide("login")}>Log in</a>
      </div>
      <div className="line-cnt">
        <div className="line" /> <p> or </p> <div className="line" />{" "}
      </div>
      <div className="login-social">
        <div className="login-social-btn">
          <img
            src={assets.Images.Google}
            alt="Google"
            className="login-social-btn-img"
          />
        </div>
        <div className="login-social-btn">
          <img
            src={assets.Images.Microsoft}
            alt="Microsoft"
            className="login-social-btn-img"
          />
        </div>
        <div className="login-social-btn">
          <img
            src={assets.Images.Apple}
            alt="Apple"
            className="login-social-btn-img"
          />
        </div>
        <div className="login-social-btn">
          <img
            src={assets.Images.LinkedIn}
            alt="LinkedIn"
            className="login-social-btn-img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
