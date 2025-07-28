import React from 'react'
import logo from "../../../assets/logo.png"
import logo1 from "../../../assets/logo1.png"
import { FaRegBell } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 py-3'>
            <div className='ml-6'>
                <img className='h-28 w-60 bg-white mr-10' src={logo} alt="" />
            </div>
            <div className='flex items-center gap-x-6 mr-10'>
                <div>
                    <FaRegBell className='bg-white p-20 text-2xl rounded-full h-12 w-12'/>
                </div>
                <div className='flex items-center gap-x-3'>
                    <img className='h-12 w-12 rounded-full' src={logo1} alt="" />
                    <h2 className='text-base font-medium text-white'>Robert Smith</h2>
                </div>
            </div>
            {/* ...existing code... */}
        </div>
    )
}

export default Header