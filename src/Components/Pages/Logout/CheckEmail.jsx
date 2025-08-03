import React from 'react'
import { FaArrowLeft, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';

const CheckEmail = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-lg bg-white !p-10  rounded-2xl shadow-lg">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2 !p-5 text-center">Check Your Email</h2>
                <p className="text-gray-500 text-sm mb-6 text-center !p-5">
                    We sent a reset link to contact@dscode...com enter 5 digit code that mentioned in the email
                </p>

                {/* Email Field */}

                <div className="flex gap-4 flex items-center justify-evenly !py-5">
                    <button className="w-8 h-8 flex items-center justify-center border text-xl font-semibold rounded !p-5">
                        1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border text-xl font-semibold rounded !p-5">
                        2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border text-xl font-semibold rounded !p-5">
                        3
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border text-xl font-semibold rounded !p-5">
                        
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border text-xl font-semibold rounded !p-5">
                        
                    </button>
                    
                </div>


                {/* Sign In Button */}
                <Link to="/verify">
                    <button className="w-full !py-3 !mt-7 bg-black text-white font-semibold rounded-full  transition-shadow shadow-sm ">
                        Verify
                    </button>
                </Link>

                <div className='text-center !py-6 !mt-5'>
                    <h2>You have not received the email?  
                        <button className='!ml-2 underline'>Resend</button>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CheckEmail