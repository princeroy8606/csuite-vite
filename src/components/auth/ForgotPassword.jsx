import React, { useState } from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "@firebase/auth";
import { isValidEmail } from "../../utils/validityCheck";
import { toast } from "react-toastify";

const ForgotPassword = ({ toggleSlide, updateEmail }) => {
  const [userEmail, setUserEmail] = useState("");

  const handleRequestOtp = async () => {
    if (isValidEmail(userEmail)) {
      try {
        const response = await sendPasswordResetEmail(auth, userEmail);
        console.log(response);
        updateEmail(userEmail);
        toggleSlide("email-response");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Enter valid Email")
    }
  };
  return (
    <div className="auth-content-right">
      <div className="fgrt-pswrd-top-cnt">
        <div className="auth-logo-cnt">
          <img
            src={assets.Images.CSuiteLogo}
            alt="logo"
            className="auth-logo-img"
          />
        </div>
        <div className="frgt-pswrd-center-cnt">
          <h1 className="msg-title-text">Forgot Password ?</h1>
          <img
            src={assets.Images.Lock}
            alt="forgot-password"
            className="auth-mail-img"
          />
          <h2 className="msg-content-text">
            Don't worry , it happens to the best of us <br /> Type your email to
            reset your password
          </h2>
          <div className="login-input-cnt">
            <input
              type="text"
              placeholder="Enter your email"
              className="login-input"
            />
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="input-absolute-img"
            />
          </div>
          <div className="fgrt-pswrd-btn" onClick={() => handleRequestOtp()}>
            <p>Sent</p>
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="input-absolute-img"
            />
          </div>
        </div>
      </div>
      <div className="mail-sent-msg-cnt" style={{ justifySelf: "flex-end" }}>
        <h2 className="msg-content-text signup">
          Remember Password ? <a onClick={() => toggleSlide("login")}>Log in</a>
        </h2>
      </div>
    </div>
  );
};

export default ForgotPassword;
