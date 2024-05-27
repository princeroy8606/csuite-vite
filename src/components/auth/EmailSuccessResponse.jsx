import React from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const EmailSuccessResponse = ({ toggleSlide, email }) => {
  const navigate = useNavigate();
  const handleRedirectToMail = () => {
    window.location.href = `mailto:${email}`
  };
  return (
    <div className="w-full h-full bg-white rounded-r-2xl flex flex-col items-center justify-around pt-8">
      <div className="w-20 h-20 rounded-full p-4 bg-light-gray flex items-center justify-center">
        <img
          src={assets.Images.CSuiteLogo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
      <img src={assets.Images.MailSent} alt="logo" className="max-w-[50%] h-[25%] object-contain md:mt-8" />
      <div className="mail-sent-msg-cnt">
        <h2 className="msg-title-text">Email Sent</h2>
        <h2 className="msg-content-text">
          We have sent an email to <br /> username@gmail.com with a link to
          reset <br />
          your password
        </h2>
      </div>
      {/* button --> to ---> gmail */}
      <div className="gmail-button" onClick={() => handleRedirectToMail()}>
        <h3>Open my gmail</h3>
      </div>
      <div className="mail-sent-msg-cnt">
        <h2 className="msg-content-text">
          Please use the link that sent to <br /> username@gmail.com to <br />
          reset your password
        </h2>
      </div>
    </div>
  );
};

export default EmailSuccessResponse;
