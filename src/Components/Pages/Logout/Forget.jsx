import React from 'react'
import { FaArrowLeft, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';

const Forget = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white !p-10  rounded-2xl shadow-lg">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2 !p-5 text-center">Forget Password?</h2>
                <p className="text-gray-500 text-sm mb-6 text-center !p-5">
                    Please enter your email to get verification code
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
                </div>
                
                {/* Sign In Button */}
                <Link to="/checkEmail">
                <button className="w-full !py-3 !mt-7 bg-black text-white font-semibold rounded-full  transition-shadow shadow-sm ">
                    Continue
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Forget