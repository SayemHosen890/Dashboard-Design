import React from 'react'
import { FaArrowLeft, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";

const Logout = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard"); // redirect after login
  };
  // const navigate = useNavigate ();

  // const handleLogin = () => {
  //   localStorage.setItem("isLoggedIn", "true"); // Simulated login
  //   navigate("/dashboard");
  // };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white !p-10  rounded-2xl shadow-lg">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 !p-5 text-center">Login to Account</h2>
        <p className="text-gray-500 text-sm mb-6 text-center !p-5">
          Please enter your email and password to continue
        </p>

        {/* Email Field */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Email address
            </label>
            <input
              type="email"
              placeholder="addressesteban_schiller@gmail.com"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                backgroundColor: "white",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                color: "#374151",
                marginBottom: "8px",
              }}
            >
              Password
            </label>

            {/* Input with Icon inside */}
            <div style={{ position: "relative" }}>
              <input
                type="password"
                placeholder="*********"
                style={{
                  width: "100%",
                  padding: "12px 40px 12px 12px", // extra right padding for icon
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  backgroundColor: "white",
                  boxSizing: "border-box",
                }}
              />
              <FaEyeSlash
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "20px",
                  color: "#6b7280",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

        </div>

        {/* Remember & Forget Password */}
        <div className="flex justify-between items-center mb-6 text-sm text-black">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-black" />
            Remember Password
          </label>
          <Link to="/forget">

            <button>Forget Password?</button>

          </Link>
        </div>

        {/* Sign In Button */}
        {/* <Link to="/dashboard"> */}
          <button
          onClick={handleLogin}
          className="w-full !py-3 !mt-7 bg-black text-white font-semibold rounded-full  transition-shadow shadow-sm ">
            Sign In
          </button>

        {/* </Link> */}
      </div>
    </div>


  )
}

export default Logout