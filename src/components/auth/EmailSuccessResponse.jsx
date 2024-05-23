import React from "react";
import assets from "../assets/assets";

const EmailSuccessResponse = ({toggleSlide}) => {
  return (
    <div className="auth-content-right">
      <div className="auth-logo-cnt">
        <img
          src={assets.Images.CSuiteLogo}
          alt="logo"
          className="auth-logo-img"
        />
      </div>
      <img src={assets.Images.MailSent} alt="logo" className="auth-mail-img" />
      <div className="mail-sent-msg-cnt">
        <h2 className="msg-title-text">Email Sent</h2>
        <h2 className="msg-content-text">
          We have sent an email to <br /> username@gmail.com with a link to
          reset <br />
          your password
        </h2>
      </div>
      {/* button --> to ---> gmail */}
      <div className="gmail-button">
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
