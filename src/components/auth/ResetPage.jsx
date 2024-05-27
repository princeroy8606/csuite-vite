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
    <div className="flex flex-col items-center justify-around w-full h-full bg-white rounded-r-2xl p-8">
    <div className="w-20 h-20 rounded-full p-4 bg-gray-100 flex items-center justify-center mb-8">
      <img
        src={assets.Images.CSuiteLogo}
        alt="logo"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex flex-col items-center justify-around w-full text-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h1>
      <form className="w-4/5">
        <div className="relative w-full h-12 mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-full p-4 border-2 border-gray-600 bg-blue-50 rounded-lg font-semibold text-black outline-none"
            onChange={(e) => handleValueChange("email", e.target.value)}
          />
          <img
            src={assets.Images.mail_icon}
            alt="mail-icon"
            className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
          />
        </div>
        <div className="relative w-full h-12 mb-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full h-full p-4 border-2 border-gray-600 bg-blue-50 rounded-lg font-semibold text-black outline-none"
            onChange={(e) => handleValueChange("newPassword", e.target.value)}
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="lock-icon"
            className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
          />
        </div>
        <div className="relative w-full h-12 mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full h-full p-4 border-2 border-gray-600 bg-blue-50 rounded-lg font-semibold text-black outline-none"
            onChange={(e) => handleValueChange("confirmPassword", e.target.value)}
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="lock-icon"
            className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
          />
        </div>
        <div
          className="w-full h-11 rounded-lg flex items-center justify-center cursor-pointer text-xl text-white font-medium bg-blue-500 p-6 mb-6"
          onClick={handleChangePassword}
        >
          <p>Update Now</p>
        </div>
      </form>
      {message && <p className="text-red-600">{message}</p>}
    </div>
  </div>
  );
};

export default ResetPage;
