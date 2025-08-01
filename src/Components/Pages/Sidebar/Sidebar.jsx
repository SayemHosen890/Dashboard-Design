import React from 'react'
import { useState } from 'react';
import { Link } from "react-router";
import Button from '@mui/material/Button';
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAuctionLine } from "react-icons/ri";
// import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { TbCodeVariablePlus } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import BarChartIcon from '@mui/icons-material/BarChart';
import { MdSupport } from "react-icons/md";
import SettingsIcon from '@mui/icons-material/Settings';
import { CgProfile } from "react-icons/cg";
import LogoutIcon from '@mui/icons-material/Logout';






const Sidebar = () => {
    const [openSupport, setOpenSupport] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);


    // const navitems = [{
    //     id: 1,
    //     icon: <LuLayoutDashboard />,
    //     name: 'dashboard',
    //     path: '/dashboard',
    // }]


    return (
        <div >
            <div className='!bg-white h-screen'>
                <ul className='flex flex-col gap-4 p-6 !bg-white'>
                    <li>
                        <Link to='/dashboard'>
                            <Button className='flex !justify-start gap-x-2 hover:bg-gray-800 w-full px-3 py-2 rounded transition'>
                                <span className='text-xl'><LuLayoutDashboard /></span>
                                Dashboard
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/auction">
                            <Button className='flex  !justify-start gap-x-2 text-white hover:bg-gray-800 w-full px-3 py-2 rounded transition'>
                                <span className='text-xl'><RiAuctionLine /></span>
                                Auction Management
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/userManage">
                            <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                                <span className='text-xl'><FaRegUserCircle /></span>
                                User Management
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/partnerManage">
                            <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                                <span className='text-xl'><FaUserShield /></span>
                                Partner Management
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/transaction">
                            <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                                <span className='text-xl'><TrendingUpRoundedIcon /></span>
                                Transaction
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/firstCategory">
                            <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                                <span className='text-xl'><CategoryRoundedIcon /></span>
                                Category Management
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/variable">
                            <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                                <span className='text-xl'><TbCodeVariablePlus /></span>
                                Variable Management
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/conversation">
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span className='text-xl'><MdOutlineMessage /></span>
                            Review Conversation
                        </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span className='text-xl'><AccountBalanceIcon /></span>
                            Bank Transfer
                        </Button>
                    </li>
                    <li>
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span className='text-xl'><PersonAddAltIcon /></span>
                            Make Admin
                        </Button>
                    </li>
                    <li>
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span className='text-xl'><ListAltIcon /></span>
                            Supervision Dashboard
                        </Button>
                    </li>
                    <li>
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span className='text-xl'><HistoryToggleOffIcon /></span>
                            Activity Log
                        </Button>
                    </li>
                    <li>
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span className='text-xl'><BarChartIcon /></span>
                            Audit Dashboard
                        </Button>
                    </li>
                    <li>
                        <div className='flex  !justify-start justify-between w-full'>
                            <Button
                                className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'
                                onClick={() => setOpenSupport(!openSupport)}
                            >
                                <span className='text-xl'><MdSupport /></span>
                                Support
                            </Button>
                            <span
                                className='cursor-pointer px-2 text-white text-xl'
                                onClick={() => setOpenSupport(!openSupport)}
                            >
                                <MdOutlineArrowForwardIos className={`transition-transform duration-200 ${openSupport ? 'rotate-90' : 'text-black'}`} />
                            </span>
                        </div>
                        {openSupport && (
                            <div className="flex  !justify-start ml-0 mt-2">
                                <ul className="flex flex-col gap-2 items-center">
                                    <li className="text-gray hover:text-gray-400 cursor-pointer">File Claim</li>
                                    <li className="text-gray hover:text-gray-400 cursor-pointer">Ticket</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div className='flex  !justify-start justify-between w-full'>
                            <Button
                                className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'
                                onClick={() => setOpenSettings(!openSettings)}
                            >
                                <span className='text-xl'><SettingsIcon /></span>
                                Settings
                            </Button>
                            <span
                                className='cursor-pointer px-2 text-white text-xl'
                                onClick={() => setOpenSettings(!openSettings)}
                            >
                                <MdOutlineArrowForwardIos className={`transition-transform duration-200 ${openSettings ? 'rotate-90' : 'text-black'}`} />
                            </span>
                        </div>
                        {openSettings && (
                            <div className=" flex !justify-start ml-0 mt-2">
                                <ul className="flex flex-col gap-2 items-center">
                                    <li className="text-gray hover:text-gray-400 cursor-pointer">Terms & Conditions</li>
                                    <li className="text-gray hover:text-gray-400 cursor-pointer">Privacy Policy</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* ...rest of your menu... */}
                    <li>
                        <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full'>
                            <span><CgProfile /></span>
                            Profile
                        </Button>
                    </li>
                    <div className='mt-10'>
                        <li>
                            <Button className='flex  !justify-start gap-x-2 text-white-700 hover:bg-gray-300 w-full' style={{ marginTop: 20 }}>
                                <span><LogoutIcon /></span>
                                Log Out
                            </Button>
                        </li>
                    </div>
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