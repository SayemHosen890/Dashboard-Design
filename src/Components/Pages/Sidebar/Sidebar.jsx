import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAuctionLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
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

  // Highlight logic for main menu items (exact match)
  const isMainMenuActive = (path) => {
    return location.pathname === path;
  };

  // Highlight logic for submenu items (exact or starts with)
  const isSubmenuActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Get styles for main menu buttons
  const getButtonStyles = (path) => {
    const baseStyles = "flex !justify-start gap-x-3 text-white w-full px-4 py-4 rounded-none transition";
    return isMainMenuActive(path)
      ? `${baseStyles} bg-blue-700 border-l-4 border-blue-400 font-bold`
      : `${baseStyles} hover:bg-blue-900`;
  };

  // Get styles for submenu items
  const getSubmenuItemStyles = (path) => {
    return isSubmenuActive(path)
      ? "text-white font-bold pl-12 pr-4 py-2 bg-gray-800"
      : "text-gray-300 hover:text-white pl-12 pr-4 py-2";
  };

  // Get styles for parent menu buttons (support/settings)
  const getParentButtonStyles = (path) => {
    const baseStyles = "flex !justify-start gap-x-3 text-white w-full px-4 py-4 rounded-none transition";
    return isSubmenuActive(path)
      ? `${baseStyles} bg-blue-700 border-l-4 border-blue-400 font-bold`
      : `${baseStyles} hover:bg-blue-900`;
  };

  // Auto-open submenus when their items are active
  useEffect(() => {
    if (location.pathname.startsWith("/support")) {
      setOpenSupport(true);
    }
    if (location.pathname.startsWith("/setting")) {
      setOpenSettings(true);
    }
  }, [location.pathname]);

  return (
    <div className="bg-black h-screen">
      <ul className="flex flex-col gap-3 p-6 bg-black !mt-5">
        {/* Dashboard */}
        <li>
          <Link to="/dashboard">
            <Button className={getButtonStyles("/dashboard")}>
              <span className="text-lg text-white">
                <LuLayoutDashboard />
              </span>
              <span className="text-white normal-case text-lg">Dashboard</span>
            </Button>
          </Link>
        </li>

        {/* Auction Management */}
        <li>
          <Link to="/auction">
            <Button className={getButtonStyles("/auction")}>
              <span className="text-lg text-white">
                <RiAuctionLine />
              </span>
              <span className="text-white normal-case text-lg">
                Auction Management
              </span>
            </Button>
          </Link>
        </li>

        {/* User Management */}
        <li>
          <Link to="/userManage">
            <Button className={getButtonStyles("/userManage")}>
              <span className="text-lg text-white">
                <FaRegUserCircle />
              </span>
              <span className="text-white normal-case text-lg">
                User Management
              </span>
            </Button>
          </Link>
        </li>

        {/* Partner Management */}
        <li>
          <Link to="/partnerManage">
            <Button className={getButtonStyles("/partnerManage")}>
              <span className="text-lg text-white">
                <FaUserShield />
              </span>
              <span className="text-white normal-case text-lg">
                Partner Management
              </span>
            </Button>
          </Link>
        </li>

        {/* Transaction */}
        <li>
          <Link to="/transaction">
            <Button className={getButtonStyles("/transaction")}>
              <span className="text-lg text-white">
                <TrendingUpRoundedIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Transaction
              </span>
            </Button>
          </Link>
        </li>

        {/* Category Management */}
        <li>
          <Link to="/firstCategory">
            <Button className={getButtonStyles("/firstCategory")}>
              <span className="text-lg text-white">
                <CategoryRoundedIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Category Management
              </span>
            </Button>
          </Link>
        </li>

        {/* Variable Management */}
        <li>
          <Link to="/variable">
            <Button className={getButtonStyles("/variable")}>
              <span className="text-lg text-white">
                <TbCodeVariablePlus />
              </span>
              <span className="text-white normal-case text-lg">
                Variable Management
              </span>
            </Button>
          </Link>
        </li>

        {/* Review Conversation */}
        <li>
          <Link to="/conversation">
            <Button className={getButtonStyles("/conversation")}>
              <span className="text-lg text-white">
                <MdOutlineMessage />
              </span>
              <span className="text-white normal-case text-lg">
                Review Conversation
              </span>
            </Button>
          </Link>
        </li>

        {/* Bank Transfer */}
        <li>
          <Link to="/bankTransfer">
            <Button className={getButtonStyles("/bankTransfer")}>
              <span className="text-lg text-white">
                <AccountBalanceIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Bank Transfer
              </span>
            </Button>
          </Link>
        </li>

        {/* Make Admin */}
        <li>
          <Link to="/makeAdmin">
            <Button className={getButtonStyles("/makeAdmin")}>
              <span className="text-lg text-white">
                <PersonAddAltIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Make Admin
              </span>
            </Button>
          </Link>
        </li>

        {/* Supervision Dashboard */}
        <li>
          <Link to="/supervisionDashboard">
            <Button className={getButtonStyles("/supervisionDashboard")}>
              <span className="text-lg text-white">
                <ListAltIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Supervision Dashboard
              </span>
            </Button>
          </Link>
        </li>

        {/* Activity Log */}
        <li>
          <Link to="/activityLogs">
            <Button className={getButtonStyles("/activityLogs")}>
              <span className="text-lg text-white">
                <HistoryToggleOffIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Activity Log
              </span>
            </Button>
          </Link>
        </li>

        {/* Audit Dashboard */}
        <li>
          <Link to="/auditDashboard">
            <Button className={getButtonStyles("/auditDashboard")}>
              <span className="text-lg text-white">
                <BarChartIcon />
              </span>
              <span className="text-white normal-case text-lg">
                Audit Dashboard
              </span>
            </Button>
          </Link>
        </li>

        {/* Support Menu */}
        <li>
          <div className="flex !justify-start justify-between w-full">
            <Button
              className={getParentButtonStyles("/support")}
              onClick={() => setOpenSupport(!openSupport)}
            >
              <span className="text-lg text-white">
                <MdSupport />
              </span>
              <span className="text-white normal-case text-lg">Support</span>
            </Button>
            <span
              className="cursor-pointer px-2 text-white text-lg flex items-center"
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
              <ul className="flex flex-col gap-1 text-center">
                <li>
                  <Link to="/support/file-claim">
                    <div className={getSubmenuItemStyles("/support/file-claim")}>
                      File Claim
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/support/ticket">
                    <div className={getSubmenuItemStyles("/support/ticket")}>
                      Ticket
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        {/* Settings Menu */}
        <li>
          <div className="flex !justify-start justify-between w-full">
            <Button
              className={getParentButtonStyles("/setting")}
              onClick={() => setOpenSettings(!openSettings)}
            >
              <span className="text-lg text-white">
                <SettingsIcon />
              </span>
              <span className="text-white normal-case text-lg">Settings</span>
            </Button>
            <span
              className="cursor-pointer px-2 text-white text-lg flex items-center"
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
              <ul className="flex flex-col gap-1 text-center">
                <Link to="/setting/condition">
                  <li className={getSubmenuItemStyles("/setting/condition")}>
                    Terms & Conditions
                  </li>
                </Link>
                <Link to="/setting/privacy">
                  <li className={getSubmenuItemStyles("/setting/privacy")}>
                    Privacy Policy
                  </li>
                </Link>
                <Link to="/setting/contactUs">
                  <li className={getSubmenuItemStyles("/setting/contactUs")}>
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </li>

        {/* Profile */}
        <li>
          <Link to="/profile">
            <Button className={getButtonStyles("/profile")}>
              <span className="text-lg text-white">
                <CgProfile />
              </span>
              <span className="text-white normal-case text-lg">Profile</span>
            </Button>
          </Link>
        </li>

        {/* Logout */}
        <div className="!mt-15">
          <li>
            <Link to="/logout">
              <Button className={getButtonStyles("/logout")}>
                <span className="text-lg text-white">
                  <LogoutIcon />
                </span>
                <span className="text-white normal-case text-lg">Log out</span>
              </Button>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;