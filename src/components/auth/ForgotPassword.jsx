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
    <div className="flex flex-col items-center justify-around w-full h-full bg-white rounded-r-2xl p-8">
      <div className="flex flex-col items-center justify-between w-full h-4/5">
        <div className="w-20 h-20 rounded-full p-4 bg-gray-100 flex items-center justify-center">
          <img
            src={assets.Images.CSuiteLogo}
            alt="logo"
            className="w-full h-full object-contain"          />
        </div>
        <div className="flex flex-col items-center justify-between w-11/12 h-4/5">
          <h1 className="text-4xl font-bold text-black">Forgot Password ?</h1>

          <img
            src={assets.Images.Lock}
            alt="forgot-password"
            className="max-w-1/2 h-1/5 object-contain mt-8"
          />
          <h2 className="text-lg font-medium text-gray-600 text-center">
            Don't worry , it happens to the best of us <br /> Type your email to
            reset your password
          </h2>
          <div className="relative w-full h-12 mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="login-input"
            />
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="w-full h-full p-4 border-2 border-gray-600 bg-blue-50 rounded-lg font-semibold text-black outline-none"
            />
          </div>
          <div
            className="w-full h-11 rounded-lg flex items-center justify-center cursor-pointer text-xl text-white font-medium bg-blue-500 p-6" onClick={handleRequestOtp}>            
            <p>SenD</p>
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around w-3/5" style={{ justifySelf: "flex-end" }}>
        <h2 className="text-lg font-medium text-gray-600 text-center">
          Remember Password?
          <a onClick={() => toggleSlide("login")} className="text-blue-700 cursor-pointer">Log in</a>
        </h2>
      </div>
    </div>
  );
};

export default ForgotPassword;
