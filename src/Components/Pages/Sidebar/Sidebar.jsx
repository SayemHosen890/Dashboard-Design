import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiAuctionLine } from "react-icons/ri";
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

  // Highlight logic for main menu
  const isMainMenuActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  // Highlight logic for submenu
  const isSubmenuActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  // Main menu styles
  const getButtonStyles = (path) =>
    isMainMenuActive(path)
      ? "flex items-center gap-x-3 w-full px-4 py-5 rounded-none text-white font-bold bg-gray-700 "
      : "flex items-center gap-x-3 w-full px-4 py-5 rounded-none text-gray-300 hover:text-white ";

  // Parent menu (Support/Settings)
  const getParentButtonStyles = (path) =>
    isSubmenuActive(path)
      ? "flex items-center gap-x-3 w-full px-4 py-5 rounded-none text-white font-bold bg-gray-700 "
      : "flex items-center gap-x-3 w-full px-4 py-5 rounded-none text-gray-300 hover:text-white";

  // Submenu styles
  const getSubmenuItemStyles = (path) =>
    isSubmenuActive(path)
      ? "text-white font-bold pl-12 pr-4 py-2 bg-gray-700"
      : "text-gray-300 hover:text-white pl-12 pr-4 py-2";

  // Auto-open submenus
  useEffect(() => {
    if (location.pathname.startsWith("/support")) setOpenSupport(true);
    if (location.pathname.startsWith("/setting")) setOpenSettings(true);
  }, [location.pathname]);

  return (
    <div className="bg-black h-screen">
      <ul className="flex flex-col gap-3 !py-5 p-6 bg-black mt-5">
        {/* Dashboard */}
        <li>
          <Link to="/dashboard">
            <div className={getButtonStyles("/dashboard")}>
              <Button className="!py-1 !justify-start !text-inherit gap-3 !normal-case !w-full">
                <span className="text-lg">
                  <LuLayoutDashboard />
                </span>
                <span className="normal-case text-lg">Dashboard</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Auction Management */}
        <li>
          <Link to="/auction">
            <div className={getButtonStyles("/auction")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <RiAuctionLine />
                </span>
                <span className="normal-case text-lg">Auction Management</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* User Management */}
        <li>
          <Link to="/userManage">
            <div className={getButtonStyles("/userManage")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <FaRegUserCircle />
                </span>
                <span className="normal-case text-lg">User Management</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Partner Management */}
        <li>
          <Link to="/partnerManage">
            <div className={getButtonStyles("/partnerManage")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <FaUserShield />
                </span>
                <span className="normal-case text-lg">Partner Management</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Transaction */}
        <li>
          <Link to="/transaction">
            <div className={getButtonStyles("/transaction")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <TrendingUpRoundedIcon />
                </span>
                <span className="normal-case text-lg">Transaction</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Category Management */}
        <li>
          <Link to="/firstCategory">
            <div className={getButtonStyles("/firstCategory")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <CategoryRoundedIcon />
                </span>
                <span className="normal-case text-lg">Category Management</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Variable Management */}
        <li>
          <Link to="/variable">
            <div className={getButtonStyles("/variable")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <TbCodeVariablePlus />
                </span>
                <span className="normal-case text-lg">Variable Management</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Review Conversation */}
        <li>
          <Link to="/conversation">
            <div className={getButtonStyles("/conversation")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <MdOutlineMessage />
                </span>
                <span className="normal-case text-lg">Review Conversation</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Bank Transfer */}
        <li>
          <Link to="/bankTransfer">
            <div className={getButtonStyles("/bankTransfer")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <AccountBalanceIcon />
                </span>
                <span className="normal-case text-lg">Bank Transfer</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Make Admin */}
        <li>
          <Link to="/makeAdmin">
            <div className={getButtonStyles("/makeAdmin")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <PersonAddAltIcon />
                </span>
                <span className="normal-case text-lg">Make Admin</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Support Menu */}
        <li>
          <div
            className={
              getParentButtonStyles("/support") + " flex justify-between w-full"
            }
          >
            <Button
              className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full"
              onClick={() => setOpenSupport(!openSupport)}
            >
              <span className="text-lg">
                <MdSupport />
              </span>
              <span className="normal-case text-lg">Support</span>
            </Button>
            <span
              className="cursor-pointer px-2 text-lg flex items-center"
              onClick={() => setOpenSupport(!openSupport)}
            >
              <MdOutlineArrowForwardIos
                className={`transition-transform duration-200 text-white ${
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
                    <div
                      className={getSubmenuItemStyles("/support/file-claim")}
                    >
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
          <div
            className={
              getParentButtonStyles("/setting") +
              " flex justify-between w-full items-center"
            }
          >
            <Button
              className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full"
              onClick={() => setOpenSettings(!openSettings)}
            >
              <span className="text-lg">
                <SettingsIcon />
              </span>
              <span className="normal-case text-lg">Settings</span>
            </Button>

            <span
              className="cursor-pointer px-2 text-lg flex items-center"
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
            <div className={getButtonStyles("/profile")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <CgProfile />
                </span>
                <span className="normal-case text-lg">Profile</span>
              </Button>
            </div>
          </Link>
        </li>

        {/* Logout */}
        <li className="!mt-20">
          <Link to="/logout">
            <div className={getButtonStyles("/logout")}>
              <Button className="!py-1 !justify-start gap-3 !text-inherit !normal-case !w-full">
                <span className="text-lg">
                  <LogoutIcon />
                </span>
                <span className="normal-case text-lg">Log out</span>
              </Button>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
