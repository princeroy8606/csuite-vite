import React, { useState } from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "@firebase/auth";

const ResetPage = () => {
  const [form, setForm] = useState({
    email: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");

  const handleValueChange = (type, value) => {
    setForm({ ...form, [type]: value });
  };

  const handleChangePassword = async () => {
    if (form.newPassword !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    try {
      const user = auth.currentUser;

      const credential = EmailAuthProvider.credential(form.email, form.newPassword);

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, form.newPassword);

      setMessage("Password updated successfully!");

    } catch (err) {
      setMessage(`Error: ${err.message}`);
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
          <h1 className="msg-title-text">Change Password</h1>
          <img
            src={assets.Images.Lock}
            alt="forgot-password"
            className="auth-mail-img"
          />
      <form className="login-form signup-form">
        <div className="login-input-cnt signup-input-cnt">
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              onChange={(e) => handleValueChange("email", e.target.value)}
            />
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="input-absolute-img"
            />
          </div>
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="New Password"
              className="login-input"
              onChange={(e) => handleValueChange("newPassword", e.target.value)}
            />
            <img
              src={assets.Images.Lock_Vector}
              alt="lock-icon"
              className="input-absolute-img"
            />
          </div>
        </div>
        <div className="login-input-cnt signup-input-cnt">
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              className="login-input"
              onChange={(e) => handleValueChange("confirmPassword", e.target.value)}
            />
            <img
              src={assets.Images.Lock_Vector}
              alt="lock-icon"
              className="input-absolute-img"
            />
          </div>
        </div>
        <div className="fgrt-pswrd-btn" onClick={handleChangePassword}>
          <p>Update Now</p>
        </div>
      </form>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
    </div>
  );
};

export default ResetPage;
