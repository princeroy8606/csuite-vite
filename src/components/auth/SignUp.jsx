import React, { useState } from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {
  isStrongPassword,
  isValidEmail,
  isValidName,
} from "../../utils/validityCheck";

const SignUp = ({ toggleSlide }) => {
  const [form, setForm] = useState({
    email: "",
    password: null,
    name: "",
    phoneNumber: "",
  });
  const [ispasswordConformed, setIspasswordConformed] = useState(false);
  const [errorArray, setErrorArray] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleValueChange = (type, value, isvalid) => {
    console.log(isvalid);
    let newArray = [...errorArray];
    setForm({ ...form, [type]: value });
    if (isvalid && newArray?.includes(type)) {
      newArray.splice(type, 1);
      setErrorArray(newArray);
    }
    if (!isvalid && !newArray?.includes(type)) {
      newArray.push(type);
      setErrorArray(newArray);
    }
  };

  console.log(errorArray);

  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        form?.email,
        form?.password
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
            style={{
              borderColor: errorArray?.includes("name") ? "red" : "gray",
            }}
            onChange={(e) =>
              handleValueChange(
                "name",
                e.target.value,
                isValidName(e.target.value)
              )
            }
          />
          {errorArray?.includes("name") && (
            <p className="text-[.7rem] text-red-500 font-medium">
              Enter valid Name
            </p>
          )}
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            style={{
              borderColor: errorArray?.includes("email") ? "red" : "gray",
            }}
            onChange={(e) =>
              handleValueChange(
                "email",
                e.target.value,
                isValidEmail(e.target.value)
              )
            }
          />
          {errorArray?.includes("email") && (
            <p className="text-[.7rem] text-red-500 font-medium">
              Enter valid Email
            </p>
          )}
          <img
            src={assets.Images.mail_icon}
            alt="mail-icon"
            className="input-absolute-img"
          />
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="login-input"
            style={{
              borderColor: errorArray?.includes("password") ? "red" : "gray",
            }}
            onChange={(e) =>
              handleValueChange(
                "password",
                e.target.value,
                isStrongPassword(e.target.value)
              )
            }
          />
          {errorArray?.includes("password") && (
            <p className="text-[.7rem] text-red-500 font-medium">
              Enter strong password with at least 8 characters
            </p>
          )}
          <img
            src={assets.Images.Lock_Vector}
            alt="mail-icon"
            className="input-absolute-img"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Conform password"
            className="login-input"
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="mail-icon"
            className="input-absolute-img"
            onClick={() => setShowPassword(!showPassword)}
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
