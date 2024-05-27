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
      toast.error("Enter valid Email");
    }
  };
  return (
    <div className="w-full h-full bg-white rounded-r-2xl flex flex-col items-center justify-around pt-8">
      <div className="w-full h-7/10 flex flex-col items-center justify-between">
        <div className="w-20 h-20 rounded-full p-4 bg-light-gray flex items-center justify-center">
          <img
            src={assets.Images.CSuiteLogo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="md:max-w-[80%] max-w-[90%] h-4/5 flex flex-col items-center justify-between">
          <h1 className="text-[2rem] font-semibold mb-4 md:mb-0 md:text-[2.5rem]">
            Forgot Password ?
          </h1>
          <img
            src={assets.Images.Lock}
            alt="forgot-password"
            className="max-w-[50%] h-[25%] object-contain md:mt-8"
          />
          <h2 className="text-[1rem] font-medium text-gray-600 text-center mb-4 md:text-lg  md:mb-0">
            Don't worry , it happens to the best of us <br /> Type your email to
            reset your password
          </h2>
          <div className="relative w-full h-12 mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-full px-4 py-2 border-2 border-gray-500 bg-blue-100 rounded-md font-semibold text-base text-black focus:outline-none"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
            />
          </div>
          <div
            className="w-full h-[2.8rem] rounded-lg relative flex items-center justify-center cursor-pointer text-[1.5rem] font-medium text-white bg-[#2250AE] "
            onClick={() => handleRequestOtp()}
          >
            <p>Sent</p>
            <img
              src={assets.Images.mail_icon}
              alt="mail-icon"
              className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
            />
          </div>
        </div>
      </div>
      <div
        className="w-[70%] h-auto flex flex-col items-center justify-around"
        style={{ justifySelf: "flex-end" }}
      >
        <h2 className="text-[1rem] font-medium text-gray-600 text-center mb-4 md:text-lg  md:mb-0 signup">
          Remember Password ?{" "}
          <a
            onClick={() => toggleSlide("login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Log in
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ForgotPassword;
