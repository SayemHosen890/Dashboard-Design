import React from 'react'
import { FaArrowLeft, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Verify = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white !p-10  rounded-2xl shadow-lg">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2 !p-5 text-center">Set a new password</h2>
                <p className="text-gray-500 text-sm mb-6 text-center !p-5">
                    Create a new password. Ensure it differs from
                    previous ones for security
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
                            New Password
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
                            Confirm Password
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

                {/* Sign In Button */}
                <Link to="/logout">
                    <button className="w-full !py-3 !mt-7 bg-black text-white font-semibold rounded-full  transition-shadow shadow-sm ">
                        Reset Password
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Verify