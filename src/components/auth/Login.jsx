import React from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = ({ toggleSlide }) => {
  const handleLogin = async()=>{
    try {
      const response = await signInWithEmailAndPassword(auth,'princeroy8606@gmail.com',"123456") 
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="auth-content-right">
      <div className="auth-logo-cnt">
        <img
          src={assets.Images.CSuiteLogo}
          alt="logo"
          className="auth-logo-img"
        />
      </div>
      <div className="login-form-container">
        <h2>Hello Again!</h2>
        <p className="msg-content-text login-form-container-text">
          Empower Your Journey:Where Professionalism <br /> Meets Progress
        </p>
        <form className="login-form">
          <div className="login-input-cnt">
            <input
              type="text"
              placeholder="Phone number, email or username"
              className="login-input"
            />
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="input-absolute-img"
            />
          </div>
          <div className="login-input-cnt">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <img
              src={assets.Images.Lock_Vector}
              alt="mail-icon"
              className="input-absolute-img"
            />
          </div>
          <div className="login-options">
            <label className="login-options-flex">
              <input type="checkbox" className="checkbox" />
              <p>Remember me</p>
            </label>
            <a href="#" onClick={() => toggleSlide("forgot-password")}>
              Forgot Password?
            </a>
          </div>
          <div className="fgrt-pswrd-btn" onClick={()=>handleLogin()}>
            <p>Login</p>
          </div>
        </form>
        <div className="line-cnt login-or">
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
        <div className="signup">
          Don’t have an account?{" "}
          <a href="#" onClick={() => toggleSlide("signup")}>
            Sign up.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
