import React, { useState } from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {
  isStrongPassword,
  isValidEmail,
  isValidName,
} from "../../utils/validityCheck";

const SignUp = ({ toggleSlide }) => {
  const [form, setForm] = useState({
    email: "",
    password: null,
    name: "",
    phoneNumber: "",
  });
  const [ispasswordConformed, setIspasswordConformed] = useState(false);
  const [errorArray, setErrorArray] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const handleValueChange = (type, value, isvalid) => {
    console.log(isvalid);
    let newArray = [...errorArray];
    setForm({ ...form, [type]: value });
    if (isvalid && newArray?.includes(type)) {
      newArray.splice(type, 1);
      setErrorArray(newArray);
    }
    if (!isvalid && !newArray?.includes(type)) {
      newArray.push(type);
      setErrorArray(newArray);
    }
  };

  console.log(errorArray);

  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        form?.email,
        form?.password
      );
      console.log(response);
    } catch (err) {
      console.log(err);
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
      <p className="text-gray-600 mb-6">
        Let’s get started with your account
      </p>
      <form className="w-full max-w-sm">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`w-full h-12 p-4 border-2 rounded-lg outline-none ${
              errorArray?.includes("name") ? "border-red-500" : "border-gray-300"
            }`}
            onChange={(e) =>
              handleValueChange("name", e.target.value, isValidName(e.target.value))
            }
          />
          {errorArray?.includes("name") && (
            <p className="text-xs text-red-500 mt-1">Enter valid Name</p>
          )}
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Email"
            className={`w-full h-12 p-4 border-2 rounded-lg outline-none ${
              errorArray?.includes("email") ? "border-red-500" : "border-gray-300"
            }`}
            onChange={(e) =>
              handleValueChange("email", e.target.value, isValidEmail(e.target.value))
            }
          />
          {errorArray?.includes("email") && (
            <p className="text-xs text-red-500 mt-1">Enter valid Email</p>
          )}
          <img
            src={assets.Images.mail_icon}
            alt="mail-icon"
            className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
          />
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`w-full h-12 p-4 border-2 rounded-lg outline-none ${
              errorArray?.includes("password") ? "border-red-500" : "border-gray-300"
            }`}
            onChange={(e) =>
              handleValueChange("password", e.target.value, isStrongPassword(e.target.value))
            }
          />
          {errorArray?.includes("password") && (
            <p className="text-xs text-red-500 mt-1">
              Enter strong password with at least 8 characters
            </p>
          )}
          <img
            src={assets.Images.Lock_Vector}
            alt="lock-icon"
            className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full h-12 p-4 border-2 border-gray-300 rounded-lg outline-none"
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="lock-icon"
            className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div
          className="w-full h-12 rounded-lg flex items-center justify-center cursor-pointer text-lg text-white font-medium bg-blue-500 mb-6"
          onClick={handleSignUp}
        >
          <p>Sign Up</p>
        </div>
      </form>
      <div className="text-gray-600">
        Already have an account?{" "}
        <a className="text-blue-500 cursor-pointer" onClick={() => toggleSlide("login")}>
          Log in
        </a>
      </div>
      <div className="flex items-center my-4">
        <div className="w-1/4 border-t border-gray-300" />
        <p className="mx-4 text-gray-600">or</p>
        <div className="w-1/4 border-t border-gray-300" />
      </div>
      <div className="flex justify-around w-full max-w-xs">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
          <img
            src={assets.Images.Google}
            alt="Google"
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
          <img
            src={assets.Images.Microsoft}
            alt="Microsoft"
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
          <img
            src={assets.Images.Apple}
            alt="Apple"
            className="w-6 h-6 object-contain"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
          <img
            src={assets.Images.LinkedIn}
            alt="LinkedIn"
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
