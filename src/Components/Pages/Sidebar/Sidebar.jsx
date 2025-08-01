import Button from "@mui/material/Button";
import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAuctionLine } from "react-icons/ri";
import { Link, useLocation } from "react-router";
// import { IoIo    sArrowDown } from "react-icons/io";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { CgProfile } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import {
  MdOutlineArrowForwardIos,
  MdOutlineMessage,
  MdSupport,
} from "react-icons/md";
import { TbCodeVariablePlus } from "react-icons/tb";

const Sidebar = () => {
  const [openSupport, setOpenSupport] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const location = useLocation();

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to get button styles based on active state
  const getButtonStyles = (path) => {
    const baseStyles =
      "flex !justify-start gap-x-3 text-white w-full px-4 py-4 rounded-none transition";
    return isActive(path)
      ? `${baseStyles} bg-gray-700 hover:bg-gray-600`
      : `${baseStyles} hover:bg-gray-800`;
  };

  // Debug: Log current location
  console.log("Current location:", location.pathname);

  // const navitems = [{
  //     id: 1,
  //     icon: <LuLayoutDashboard />,
  //     name: 'dashboard',
  //     path: '/dashboard',
  // }]

  return (
    <div>
      <div className="bg-gray-900 h-screen">
        <ul className="flex flex-col gap-3 p-6 bg-gray-900">
          <li>
            <Link to="/dashboard">
              <Button className={getButtonStyles("/dashboard")}>
                <span className="text-lg text-white">
                  <LuLayoutDashboard />
                </span>
                <span className="text-white">Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/auction">
              <Button className={getButtonStyles("/auction")}>
                <span className="text-lg text-white">
                  <RiAuctionLine />
                </span>
                <span className="text-white">Auction Management</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/userManage">
              <Button className={getButtonStyles("/userManage")}>
                <span className="text-lg text-white">
                  <FaRegUserCircle />
                </span>
                <span className="text-white">User Management</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/partnerManage">
              <Button className={getButtonStyles("/partnerManage")}>
                <span className="text-lg text-white">
                  <FaUserShield />
                </span>
                <span className="text-white">Partner Management</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/transaction">
              <Button className={getButtonStyles("/transaction")}>
                <span className="text-lg text-white">
                  <TrendingUpRoundedIcon />
                </span>
                <span className="text-white">Transaction</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/firstCategory">
              <Button className={getButtonStyles("/firstCategory")}>
                <span className="text-lg text-white">
                  <CategoryRoundedIcon />
                </span>
                <span className="text-white">Category Management</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/variable">
              <Button className={getButtonStyles("/variable")}>
                <span className="text-lg text-white">
                  <TbCodeVariablePlus />
                </span>
                <span className="text-white">Variable Management</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/conversation">
              <Button className={getButtonStyles("/conversation")}>
                <span className="text-lg text-white">
                  <MdOutlineMessage />
                </span>
                <span className="text-white">Review Conversation</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/bankTransfer">
              <Button className={getButtonStyles("/bankTransfer")}>
                <span className="text-lg text-white">
                  <AccountBalanceIcon />
                </span>
                <span className="text-white">Bank Transfer</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/makeAdmin">
              <Button className={getButtonStyles("/makeAdmin")}>
                <span className="text-lg text-white">
                  <PersonAddAltIcon />
                </span>
                <span className="text-white">Make Admin</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/supervisionDashboard">
              <Button className={getButtonStyles("/supervisionDashboard")}>
                <span className="text-lg text-white">
                  <ListAltIcon />
                </span>
                <span className="text-white">Supervision Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/activityLogs">
              <Button className={getButtonStyles("/activityLogs")}>
                <span className="text-lg text-white">
                  <HistoryToggleOffIcon />
                </span>
                <span className="text-white">Activity Log</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/auditDashboard">
              <Button className="flex !justify-start gap-x-3 text-white hover:bg-gray-800 w-full px-4 py-4 rounded-none transition">
                <span className="text-lg text-white">
                  <BarChartIcon />
                </span>
                <span className="text-white">Audit Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>
            <div className="flex !justify-start justify-between w-full">
              <Button
                className="flex !justify-start gap-x-3 text-white hover:bg-gray-800 w-full px-4 py-4 rounded-none transition"
                onClick={() => setOpenSupport(!openSupport)}
              >
                <span className="text-lg text-white">
                  <MdSupport />
                </span>
                <span className="text-white">Support</span>
              </Button>
              <span
                className="cursor-pointer px-2 text-white text-lg"
                onClick={() => setOpenSupport(!openSupport)}
              >
                <MdOutlineArrowForwardIos
                  className={`transition-transform duration-200 ${
                    openSupport ? "rotate-90" : ""
                  }`}
                />
              </span>
            </div>
            {openSupport && (
              <div className="ml-0 mt-1">
                <ul className="flex flex-col gap-1">
                  <li>
                    <Link to="/support/file-claim">
                      <div className="text-gray-300 hover:text-white cursor-pointer text-sm pl-12 pr-4 py-2">
                        File Claim
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support/ticket">
                      <div className="text-gray-300 hover:text-white cursor-pointer text-sm pl-12 pr-4 py-2">
                        Ticket
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <div className="flex !justify-start justify-between w-full">
              <Button
                className="flex !justify-start gap-x-3 text-white hover:bg-gray-800 w-full px-4 py-4 rounded-none transition"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <span className="text-lg text-white">
                  <SettingsIcon />
                </span>
                <span className="text-white">Settings</span>
              </Button>
              <span
                className="cursor-pointer px-2 text-white text-lg"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <MdOutlineArrowForwardIos
                  className={`transition-transform duration-200 ${
                    openSettings ? "rotate-90" : ""
                  }`}
                />
              </span>
            </div>
            {openSettings && (
              <div className="ml-0 mt-1">
                <ul className="flex flex-col gap-1">
                  <li className="text-gray-300 hover:text-white cursor-pointer text-sm pl-12 pr-4 py-2">
                    Terms & Conditions
                  </li>
                  <li className="text-gray-300 hover:text-white cursor-pointer text-sm pl-12 pr-4 py-2">
                    Privacy Policy
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link to="/profile">
              <Button className="flex !justify-start gap-x-3 text-white hover:bg-gray-800 w-full px-4 py-4 rounded-none transition">
                <span className="text-lg text-white">
                  <CgProfile />
                </span>
                <span className="text-white">Profile</span>
              </Button>
            </Link>
          </li>
          <div className="mt-12">
            <li>
              <Button className="flex !justify-start gap-x-3 text-white hover:bg-gray-800 w-full px-4 py-4 rounded-none transition">
                <span className="text-lg text-white">
                  <LogoutIcon />
                </span>
                <span className="text-white">Log Out</span>
              </Button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
