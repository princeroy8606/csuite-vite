import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const EmailSuccessResponse = ({ toggleSlide, email }) => {
  const navigate = useNavigate();
  const handleRedirectToMail = () => {
    window.location.href = `mailto:${email}`
  };
  return (
    <div className="w-20 h-20 rounded-full p-4 bg-gray-100 flex items-center justify-center">
      <div className="w-20 h-20 rounded-full p-4 bg-gray-100 flex items-center justify-center">
        <img
          src={assets.Images.CSuiteLogo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
      <img src={assets.Images.MailSent} alt="logo" className="auth-mail-img" />
      <div className="flex flex-col items-center justify-around w-3/5">
      <h2 className="text-4xl font-bold text-black">Email Sent</h2>
      <h2 className="text-lg font-medium text-gray-600 text-center">
          We have sent an email to <br /> username@gmail.com with a link to
          reset <br />
          your password
        </h2>
      </div>
      {/* button --> to ---> gmail */}
      <div className="w-52 h-12 rounded-lg flex items-center justify-center bg-blue-500 text-white cursor-pointer" onClick={handleRedirectToMail}>
        <h3>Open my gmail</h3>
      </div>
      <div className="flex flex-col items-center justify-around w-3/5">
      <h2 className="text-lg font-medium text-gray-600 text-center">
          Please use the link that sent to <br /> username@gmail.com to <br />
          reset your password
        </h2>
      </div>
    </div>
  );
};

export default EmailSuccessResponse;
