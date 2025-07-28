import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAuctionLine } from "react-icons/ri";
// import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";





const Sidebar = () => {
    const [openSupport, setOpenSupport] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);



    return (
        <div>
            <div className='bg-black mt-100 h-screen'>
                <ul className='flex flex-col gap-4 p-6 mt-5'>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white hover:bg-gray-800 w-full px-3 py-2 rounded transition'>
                            <span><LuLayoutDashboard /></span>
                            Dashboard
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white hover:bg-gray-800 w-full px-3 py-2 rounded transition'>
                            <span><RiAuctionLine /></span>
                            Auction Management
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><FaRegUserCircle /></span>
                            User Management
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><FaUserShield /></span>
                            Partner Management
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Transaction
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Category Management
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Variable Management
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Review Conversation
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Bank Transfer
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Make Admin
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Supervision Dashboard
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Activity Log
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Audit Dashboard
                        </Button>
                    </li>
                    <li>
                        <div className='flex items-center justify-between w-full'>
                            <Button
                                className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'
                                onClick={() => setOpenSupport(!openSupport)}
                            >
                                <span><LuLayoutDashboard /></span>
                                Support
                            </Button>
                            <span
                                className='cursor-pointer px-2 text-white'
                                onClick={() => setOpenSupport(!openSupport)}
                            >
                                <MdOutlineArrowForwardIos className={`transition-transform duration-200 ${openSupport ? 'rotate-90' : ''}`} />
                            </span>
                        </div>
                        {openSupport && (
                            <div className="submenuwrapper flex justify-center ml-0 mt-2">
                                <ul className="flex flex-col gap-2 items-center">
                                    <li className="text-white hover:text-gray-400 cursor-pointer">File Claim</li>
                                    <li className="text-white hover:text-gray-400 cursor-pointer">Ticket</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div className='flex items-center justify-between w-full'>
                            <Button
                                className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'
                                onClick={() => setOpenSettings(!openSettings)}
                            >
                                <span><LuLayoutDashboard /></span>
                                Settings
                            </Button>
                            <span
                                className='cursor-pointer px-2 text-white'
                                onClick={() => setOpenSettings(!openSettings)}
                            >
                                <MdOutlineArrowForwardIos className={`transition-transform duration-200 ${openSettings ? 'rotate-90' : ''}`} />
                            </span>
                        </div>
                        {openSettings && (
                            <div className="submenuwrapper flex justify-center ml-0 mt-2">
                                <ul className="flex flex-col gap-2 items-center">
                                    <li className="text-white hover:text-gray-400 cursor-pointer">Terms & Conditions</li>
                                    <li className="text-white hover:text-gray-400 cursor-pointer">Privacy Policy</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* ...rest of your menu... */}
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Profile
                        </Button>
                    </li>
                    <li>
                        <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><LuLayoutDashboard /></span>
                            Log Out
                        </Button>
                    </li>
                </ul>
            </div>
        </div >
        // <div>
        //     <div className='bg-black mt-100 h-screen'>
        //         <ul className='flex flex-col gap-4 p-6 mt-5'>
        //             <li>
        //                 <Button className='flex items-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Dashboard
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><RiAuctionLine /></span>
        //                     Auction Management
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     User Management
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Partner Management
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Transaction
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Category Management
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Variable Management
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Review Conversation
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Bank Transfer
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Make Admin
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Supervision Dashboard
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Activity Log
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Audit Dashboard
        //                 </Button>
        //             </li>
        //             <li>
        //                 <div className='flex items-center justify-between w-full'>
        //                     <Button
        //                         className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'
        //                         onClick={() => setOpenSupport(!openSupport)}
        //                     >
        //                         <span><LuLayoutDashboard /></span>
        //                         Support
        //                     </Button>
        //                     <span
        //                         className='cursor-pointer px-2 text-white'
        //                         onClick={() => setOpenSupport(!openSupport)}
        //                     >
        //                         <MdOutlineArrowForwardIos className={`transition-transform duration-200 ${openSupport ? 'rotate-90' : ''}`} />
        //                     </span>
        //                 </div>
        //                 {openSupport && (
        //                     <div className="submenuwrapper flex justify-center ml-0 mt-2">
        //                         <ul className="flex flex-col gap-2 items-center">
        //                             <li className="text-white hover:text-gray-400 cursor-pointer">File Claim</li>
        //                             <li className="text-white hover:text-gray-400 cursor-pointer">Ticket</li>
        //                         </ul>
        //                     </div>
        //                 )}
        //             </li>
        //             <li>
        //                 <div className='flex items-center justify-between w-full'>
        //                     <Button
        //                         className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'
        //                         onClick={() => setOpenSettings(!openSettings)}
        //                     >
        //                         <span><LuLayoutDashboard /></span>
        //                         Settings
        //                     </Button>
        //                     <span
        //                         className='cursor-pointer px-2 text-white'
        //                         onClick={() => setOpenSettings(!openSettings)}
        //                     >
        //                         <MdOutlineArrowForwardIos className={`transition-transform duration-200 ${openSettings ? 'rotate-90' : ''}`} />
        //                     </span>
        //                 </div>
        //                 {openSettings && (
        //                     <div className="submenuwrapper flex justify-center ml-0 mt-2">
        //                         <ul className="flex flex-col gap-2 items-center">
        //                             <li className="text-white hover:text-gray-400 cursor-pointer">Terms & Conditions</li>
        //                             <li className="text-white hover:text-gray-400 cursor-pointer">Privacy Policy</li>
        //                         </ul>
        //                     </div>
        //                 )}
        //             </li>
        //             {/* ...rest of your menu... */}
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Profile
        //                 </Button>
        //             </li>
        //             <li>
        //                 <Button className='flex items-center gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
        //                     <span><LuLayoutDashboard /></span>
        //                     Log Out
        //                 </Button>
        //             </li>
        //         </ul>
        //     </div>
        // </div >
    )
}

export default Sidebar