import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import axios from "axios";
import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/Appcontext.context";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState(0);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  axios.defaults.withCredentials = true;

  const inputRefs = useRef([]);
  const { backendUrl, isLoggedIn, userData, getUserData } =
    useContext(AppContext);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((item, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = item;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-resent-otp",
        { email }
      );

      data.success ? toast.success(data.message) : toast.error(data.message);

      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmitted(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/reset-password",
        { email, otp, newPassword }
      );

      data.success ? toast.success(data.message) : toast.error(data.message);

      data.success && navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className=" flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      {" "}
      <h1
        onClick={() => navigate("/")}
        className=" absolute top-0 left-5 text-blue-500 text-md font-bold cursor-pointer "
      >
        My App
      </h1>
      {!isEmailSent && (
        <form
          onSubmit={onSubmitEmail}
          className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
        >
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            Reset password
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Enter your registered email address.
          </p>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.mail_icon} alt="" />
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="bg-transparent outline-none text-white"
            />
          </div>
          <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3">
            Submit
          </button>
        </form>
      )}
      {!isOtpSubmitted && isEmailSent && (
        <form
          onSubmit={onSubmitOtp}
          className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
        >
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            Reset password OTP
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Enter the 6-digit code sent to your email id.
          </p>
          <div className="flex justify-between mb-8" onPaste={handlePaste}>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  className="w-12 h-12 bg-[#333a5c] text-white text-center text-xl rounded-md"
                  type="text"
                  maxLength="1"
                  key={index}
                  ref={(e) => {
                    inputRefs.current[index] = e;
                  }}
                  onInput={(e) => {
                    handleInput(e, index);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  required
                />
              ))}
          </div>
          <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full">
            Submit
          </button>
        </form>
      )}
      {isOtpSubmitted && isEmailSent && (
        <form
          onSubmit={onSubmitNewPassword}
          className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
        >
          <h1 className="text-white text-2xl font-semibold text-center mb-4">
            New password
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Enter the new password below.
          </p>
          <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
            <img src={assets.lock_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              required
              className="bg-transparent outline-none text-white"
            />
          </div>
          <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
