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
    t1.to(
      "#animation-fromRight",
      { xPercent: -10, duration: 0.5, zIndex: 0 },
      0
    );
    t1.to(".auth-content-left", { xPercent: 150, duration: 0.5 }, 0);
    t1.to("#animation-fromLeft", { xPercent: 0, duration: 0.5, zIndex: 5 }, 0);
  };

  const toggleAnimationBack = () => {
    const t1 = gsap.timeline();
    t1.to("#animation-fromLeft", { xPercent: 10, duration: 0.5, zIndex: 0 }, 0);
    t1.to("#animation-fromRight", { xPercent: 0, duration: 0.5, zIndex: 5 }, 0);
    t1.to(".auth-content-left", { xPercent: 0, duration: 0.5 }, 0);
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
      return <SignUp toggleSlide={(slide) => handleSlideChage(slide)} />;
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

  useEffect(() => {
    const t2 = gsap.timeline();
    gsap.set(".auth-bg-svg", { autoAlpha: 1 });
    t2.to(
      ".auth-bg-svg",
      {
        xPercent: -110,
        duration: 1,
        stagger: { each: 2, repeat: -1, repeatDelay: 5 },
      },
      1
    );
    t2.to(
      ".auth-bg-svg",
      {
        xPercent: -210,
        duration: 1,
        stagger: { each: 2, repeat: -1, repeatDelay: 5 },
        delay: 2,
      },
      1
    );
  }, []);

  return (
    <div className="auth-container">
      <div className="auth-content-container">
        <div id="animation-fromLeft" className="auth-left-cnt">
          {renderLeftSlide()}
        </div>
        <div className="auth-content-left">
          <div className="auth-bg-svg-cnt">
            <img
              src={assets.Images.Auth_Marquee_1}
              alt="login-svg"
              className="auth-bg-svg"
            />
            <img
              src={assets.Images.Auth_Marquee_3}
              alt="login-svg"
              className="auth-bg-svg"
            />
            <img
              src={assets.Images.Auth_Marquee_2}
              alt="login-svg"
              className="auth-bg-svg"
            />
          </div>
        </div>
        <div id="animation-fromRight" className="auth-right-cnt">
          {renderRightSlide()}
        </div>
      </div>
    </div>
  );
};

export default Auth;
