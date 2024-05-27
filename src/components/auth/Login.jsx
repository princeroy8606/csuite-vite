import React from "react";
import assets from "../assets/assets";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "@firebase/auth";

const Login = ({ toggleSlide }) => {
  const handleLogin = async()=>{
    try {
      const response = await signInWithEmailAndPassword(auth,'princeroy8606@gmail.com',"123456") 
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
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
        <h2 className="text-2xl font-semibold text-gray-800">Hello Again!</h2>
        <p className="text-lg font-medium text-gray-600 mt-4 mb-6">
          Empower Your Journey: Where Professionalism <br /> Meets Progress
        </p>
        <form className="w-4/5">
          <div className="relative w-full h-12 mb-4">
            <input
              type="text"
              placeholder="Phone number, email or username"
              className="w-full h-full p-4 border-2 border-gray-600 bg-blue-50 rounded-lg font-semibold text-black outline-none"
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
              placeholder="Password"
              className="w-full h-full p-4 border-2 border-gray-600 bg-blue-50 rounded-lg font-semibold text-black outline-none"
            />
            <img
              src={assets.Images.Lock_Vector}
              alt="mail-icon"
              className="absolute w-6 h-full object-contain right-4 top-0 cursor-pointer p-1"
            />
          </div>
          <div className="flex justify-between mb-4 text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p>Remember me</p>
            </label>
            <a href="#" onClick={() => toggleSlide("forgot-password")} className="text-blue-700 cursor-pointer">
              Forgot Password?
            </a>
          </div>
          <div
            className="w-full h-11 rounded-lg flex items-center justify-center cursor-pointer text-xl text-white font-medium bg-blue-500 p-6 mb-6"
            onClick={handleLogin}
          >
            <p>Login</p>
          </div>
        </form>
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-0.5 bg-gray-400" />
          <p className="mx-4 text-gray-600">or</p>
          <div className="w-20 h-0.5 bg-gray-400" />
        </div>
        <div className="flex justify-around w-3/4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-lg cursor-pointer">
            <img
              src={assets.Images.Google}
              alt="Google"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-lg cursor-pointer">
            <img
              src={assets.Images.Microsoft}
              alt="Microsoft"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-lg cursor-pointer">
            <img
              src={assets.Images.Apple}
              alt="Apple"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-400 rounded-lg cursor-pointer">
            <img
              src={assets.Images.LinkedIn}
              alt="LinkedIn"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
        <div className="text-gray-600">
          Don’t have an account?{" "}
          <a href="#" onClick={() => toggleSlide("signup")} className="text-blue-700 cursor-pointer">
            Sign up.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
