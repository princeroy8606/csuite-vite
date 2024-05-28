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
    <div className="w-full h-full bg-white rounded-r-2xl flex flex-col items-center justify-around p-4">
      <div className="w-20 h-20 rounded-full p-4 bg-light-gray flex items-center justify-center tablet-h:w-14 tablet-h:h-14 laptop-h:w-20 laptop-h:h-20">
        <img
          src={assets.Images.CSuiteLogo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-[2.5rem] font-semibold mb-4 md:mb-0 tablet-h:text-[1.5rem] laptop-h:text-[2.5rem]">
        Sign Up
      </h2>
      <p className="text-[1rem] font-medium text-gray-600 text-center mb-4 tablet-h:text-[0.8rem] laptop-h:text-lg  laptop-h:mb-4">
        Let’s get started with your account
      </p>
      <form className="w-[90%] laptop-h:w-[70%] laptop-w:w-[70%]">
        <div className="relative w-full min-h-10 h-[6.5vh] max-h-[3rem] mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-full px-4 py-2 border-2 border-gray-300 bg-blue-50 rounded-md font-normal md:font-semibold md:text-base text-black focus:outline-none"
            style={{
              borderColor: errorArray?.includes("name") ? "red" : "#C7C7C7",
            }}
            onChange={(e) =>
              handleValueChange(
                "name",
                e.target.value,
                isValidName(e.target.value)
              )
            }
          />
          {errorArray?.includes("name") && (
            <p className="text-[.7rem] text-red-500 font-medium">
              Enter valid Name
            </p>
          )}
        </div>
        <div className="relative w-full min-h-10 h-[6.5vh] max-h-[3rem] mb-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full h-full px-4 py-2 border-2 border-gray-300 bg-blue-50 rounded-md font-normal md:font-semibold md:text-base text-black focus:outline-none"
            style={{
              borderColor: errorArray?.includes("email") ? "red" : "#C7C7C7",
            }}
            onChange={(e) =>
              handleValueChange(
                "email",
                e.target.value,
                isValidEmail(e.target.value)
              )
            }
          />
          {errorArray?.includes("email") && (
            <p className="text-[.7rem] text-red-500 font-medium">
              Enter valid Email
            </p>
          )}
          <img
            src={assets.Images.mail_icon}
            alt="mail-icon"
            className="input-absolute-img"
          />
        </div>
        <div className="relative w-full min-h-10 h-[6.5vh] max-h-[3rem] mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full h-full px-4 py-2 border-2 border-gray-300 bg-blue-50 rounded-md font-normal md:font-semibold md:text-base text-black focus:outline-none"
            style={{
              borderColor: errorArray?.includes("password") ? "red" : "#C7C7C7",
            }}
            onChange={(e) =>
              handleValueChange(
                "password",
                e.target.value,
                isStrongPassword(e.target.value)
              )
            }
          />
          {errorArray?.includes("password") && (
            <p className="text-[.7rem] text-red-500 font-medium">
              Enter strong password with at least 8 characters
            </p>
          )}
          <img
            src={assets.Images.Lock_Vector}
            alt="mail-icon"
            className="input-absolute-img"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <div className="relative w-full min-h-10 h-[6.5vh] max-h-[3rem] mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Conform password"
            className="w-full h-full px-4 py-2 border-2 border-gray-300 bg-blue-50 rounded-md font-normal md:font-semibold md:text-base text-black focus:outline-none"
          />
          <img
            src={assets.Images.Lock_Vector}
            alt="mail-icon"
            className="input-absolute-img"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </form>
      <div
        className="w-[90%] laptop-w:w-[70%] laptop-h:w-[70%] h-[5rem] max-h-11 rounded-md relative flex items-center justify-center cursor-pointer text-xl font-medium text-white bg-[var(--card-bg-blue)] py-6 tablet-h:py-3 laptop-h:py-6"
        onClick={() => handleSignUp()}
      >
        <p>Sign Up</p>
      </div>
      <div className="mt-5 text-gray-600">
        Already have an account?{" "}
        <a
          onClick={() => toggleSlide("login")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          Log in
        </a>
      </div>
      <div className="w-3/5 flex items-center justify-between mt-5 text-[#666666]">
        <div className="w-[40%] h-[1.5px] bg-gray-600" />{" "}
        <p className="font-semibold"> or </p>{" "}
        <div className="w-[40%] h-[1.5px] bg-gray-600" />{" "}
      </div>
      <div className="w-full laptop-w:w-[70%]  flex items-center justify-around gap-2">
        <div className="max-w-12 max-h-12 h-[6.5vh] m-1 bg-transparent border-2 border-gray-300 rounded-md text-base font-medium cursor-pointer">
          <img
            src={assets.Images.Google}
            alt="Google"
            className="w-full h-full object-contain p-3"
          />
        </div>
        <div className="max-w-12 max-h-12 h-[6.5vh] m-1  bg-transparent border-2 border-gray-300 rounded-md text-base font-medium cursor-pointer">
          <img
            src={assets.Images.Microsoft}
            alt="Microsoft"
            className="w-full h-full object-contain p-3"
          />
        </div>
        <div className="max-w-12 max-h-12 h-[6.5vh] m-1 bg-transparent border-2 border-gray-300 rounded-md font-normal md:font-semibold md:text-base cursor-pointer">
          <img
            src={assets.Images.Apple}
            alt="Apple"
            className="w-full h-full object-contain p-3"
          />
        </div>
        <div className="max-w-12 max-h-12 h-[6.5vh] m-1 bg-transparent border-2 border-gray-300 rounded-md font-normal md:font-semibold md:text-base cursor-pointer">
          <img
            src={assets.Images.LinkedIn}
            alt="LinkedIn"
            className="w-full h-full object-contain p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
