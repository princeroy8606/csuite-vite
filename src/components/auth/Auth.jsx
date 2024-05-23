import React, { useEffect, useState } from "react";
import "./auth.css";
import assets from "../assets/assets";
import EmailSuccessResponse from "./EmailSuccessResponse";
import gsap from "gsap";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
  const [currentRightSlide, setCurrentRightSlide] = useState("login");
  const [currentLeftSlide, setCurrentLeftSlide] = useState("forgot-password");

  const toggleAnimation = () => {
    const t1 = gsap.timeline();
    t1.to("#animation-fromRight", { xPercent: -10, duration: 0.5, zIndex: 0 },0);
    t1.to(".auth-content-left", { xPercent: 150, duration: 0.5 },0);
    t1.to("#animation-fromLeft", { xPercent: 0, duration: 0.5, zIndex: 5 },0);
  };

  const toggleAnimationBack = () => {
    const t1 = gsap.timeline();
    t1.to("#animation-fromLeft", { xPercent: 10, duration: 0.5, zIndex: 0 },0);
    t1.to("#animation-fromRight", { xPercent: 0, duration: 0.5, zIndex: 5 },0);
    t1.to(".auth-content-left", { xPercent: 0, duration: 0.5 },0);
  };

  const handleSlideChage = (slide) => {
    if (slide === "login" || slide === "email-response") {
      toggleAnimationBack();
      setCurrentRightSlide(slide);
    }
    if (slide === "signup" || slide === "forgot-password") {
      toggleAnimation();
      setCurrentLeftSlide(slide);
    }
  };

  const renderLeftSlide = () => {
    if (currentLeftSlide === "forgot-password")
      return (
        <ForgotPassword toggleSlide={(slide) => handleSlideChage(slide)} />
      );
    if (currentLeftSlide === "signup")
      return (
        <SignUp
          toggleSlide={(slide) => handleSlideChage(slide)}
        />
      );
  };

  const renderRightSlide = () => {
    if (currentRightSlide === "login")
      return <Login toggleSlide={(slide) => handleSlideChage(slide)} />;
    if (currentRightSlide === "email-response")
      return (
        <EmailSuccessResponse
          toggleSlide={(slide) => handleSlideChage(slide)}
        />
      );
  };

  return (
    <div className="auth-container">
      <div className="auth-content-container">
        <div id="animation-fromLeft" className="auth-left-cnt">
          {renderLeftSlide()}
        </div>
        <div className="auth-content-left">
          <img
            src={assets.Images.LoginSvg}
            alt="login-svg"
            className="auth-bg-svg"
          />
        </div>
        <div id="animation-fromRight" className="auth-right-cnt">
          {renderRightSlide()}
        </div>
      </div>
    </div>
  );
};

export default Auth;
