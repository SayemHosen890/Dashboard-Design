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
                className="cursor-pointer px-2 text-white text-lg flex items-center"
                onClick={() => setOpenSupport(!openSupport)}
              >
                <MdOutlineArrowForwardIos
                  className={`transition-transform duration-200 ${openSupport ? "rotate-90" : ""
                    }`}
                />
              </span>
            </div>
            {openSupport && (
              <div className="ml-0 mt-1">
                <ul className="flex flex-col gap-1 text-center">
                  <li>
                    <Link to="/support/file-claim">
                      <div className="text-gray-300 hover:text-white cursor-pointer text-md pl-12 pr-4 py-2">
                        File Claim
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support/ticket">
                      <div className="text-gray-300 hover:text-white cursor-pointer text-md pl-12 pr-4 py-2">
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
                className="cursor-pointer px-2 text-white text-lg flex items-center"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <MdOutlineArrowForwardIos
                  className={`transition-transform duration-200 relative ${openSettings ? "rotate-90" : ""
                    }`}
                />
                {/* <MdOutlineArrowForwardIos
                  className={`transition-transform duration-200 flex text-center ${
                    openSettings ? "rotate-90" : ""
                  }`}
                /> */}
              </span>
            </div>
            {openSettings && (
              <div className="ml-0 mt-1">
                <ul className="flex flex-col gap-1 text-center">
                  <Link to="/setting/condition">
                    <li className="text-gray-300 hover:text-white cursor-pointer text-md pl-12 pr-4 py-2">
                      Terms & Conditions
                    </li>
                  </Link>
                  <Link to="/setting/privacy">
                    <li className="text-gray-300 hover:text-white cursor-pointer text-md pl-12 pr-4 py-2">
                      Privacy Policy
                    </li>
                  </Link>
                  <Link to="/setting/contactUs">
                    <li className="text-gray-300 hover:text-white cursor-pointer text-md pl-12 pr-4 py-2">
                      Contact Us
                    </li>
                  </Link>
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
          <div className="!mt-15">
            
            <li>
              <Link to="/logout">
              <Button className="flex !justify-start gap-x-3 text-white hover:bg-gray-800 w-full px-4 py-4 rounded-none transition">
                <span className="text-lg text-white">
                  <LogoutIcon />
                </span>
                <span className="text-white">Log out</span>
              </Button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

{/* Card 3 - Events Creation Rate Chart */ }
// <div
//   style={{
//     backgroundColor: "white",
//     padding: "24px",
//     borderRadius: "8px",
//     // height:"200px",
//     // width:"70%",
//     // marginLeft:"150px",
//     boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//     border: "1px solid #e5e7eb",
//   }}
// >
// <div
//   style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}
// >
//   Events Creation Rate:
// </div>

// {/* Dropdowns */}
// <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
//   <div style={{ position: "relative" }}>
//     <select
//       style={{
//         padding: "8px 32px 8px 12px",
//         border: "1px solid #d1d5db",
//         borderRadius: "4px",
//         fontSize: "12px",
//         backgroundColor: "white",
//         minWidth: "100px",
//         appearance: "none",
//       }}
//     >
//       <option>September</option>
//     </select>
//     <FaChevronDown
//       style={{
//         position: "absolute",
//         right: "8px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         color: "#6b7280",
//         fontSize: "10px",
//         pointerEvents: "none",
//       }}
//     />
//   </div>

//   <div style={{ position: "relative" }}>
//     <select
//       style={{
//         padding: "8px 32px 8px 12px",
//         border: "1px solid #d1d5db",
//         borderRadius: "4px",
//         fontSize: "12px",
//         backgroundColor: "white",
//         minWidth: "80px",
//         appearance: "none",
//       }}
//     >
//       <option>2024</option>
//     </select>
//     <FaChevronDown
//       style={{
//         position: "absolute",
//         right: "8px",
//         top: "50%",
//         transform: "translateY(-50%)",
//         color: "#6b7280",
//         fontSize: "10px",
//         pointerEvents: "none",
//       }}
//     />
//   </div>
// </div>

// {/* Donut Chart */}
// <div
//   style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: "16px",
//   }}
// >
//   <div
//     style={{ position: "relative", width: "120px", height: "120px" }}
//   >
//     <svg width="120" height="120" viewBox="0 0 120 120">
//       {/* Background circle */}
//       <circle
//         cx="60"
//         cy="60"
//         r="50"
//         fill="none"
//         stroke="#e5e7eb"
//         strokeWidth="8"
//       />
//       {/* Goods (blue) - largest segment */}
//       <circle
//         cx="60"
//         cy="60"
//         r="50"
//         fill="none"
//         stroke="#3b82f6"
//         strokeWidth="8"
//         strokeDasharray={`${2 * Math.PI * 50 * 0.45} ${
//           2 * Math.PI * 50
//         }`}
//         strokeDashoffset={-2 * Math.PI * 50 * 0.275}
//         transform="rotate(-90 60 60)"
//       />
//       {/* Waste (red) */}
//       <circle
//         cx="60"
//         cy="60"
//         r="50"
//         fill="none"
//         stroke="#ef4444"
//         strokeWidth="8"
//         strokeDasharray={`${2 * Math.PI * 50 * 0.3} ${
//           2 * Math.PI * 50
//         }`}
//         strokeDashoffset={-2 * Math.PI * 50 * 0.725}
//         transform="rotate(-90 60 60)"
//       />
//       {/* Recyclable materials (orange) */}
//       <circle
//         cx="60"
//         cy="60"
//         r="50"
//         fill="none"
//         stroke="#f59e0b"
//         strokeWidth="8"
//         strokeDasharray={`${2 * Math.PI * 50 * 0.2} ${
//           2 * Math.PI * 50
//         }`}
//         strokeDashoffset={-2 * Math.PI * 50 * 0.025}
//         transform="rotate(-90 60 60)"
//       />
//       {/* Second-hand items (green) - smallest segment */}
//       <circle
//         cx="60"
//         cy="60"
//         r="50"
//         fill="none"
//         stroke="#10b981"
//         strokeWidth="8"
//         strokeDasharray={`${2 * Math.PI * 50 * 0.05} ${
//           2 * Math.PI * 50
//         }`}
//         strokeDashoffset={-2 * Math.PI * 50 * 0.225}
//         transform="rotate(-90 60 60)"
//       />
//     </svg>
//   </div>
// </div>

//           {/* Legend */}
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: "4px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//               <div
//                 style={{
//                   width: "8px",
//                   height: "8px",
//                   backgroundColor: "#3b82f6",
//                   borderRadius: "1px",
//                 }}
//               ></div>
//               <span style={{ fontSize: "11px", color: "#374151" }}>Goods</span>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//               <div
//                 style={{
//                   width: "8px",
//                   height: "8px",
//                   backgroundColor: "#ef4444",
//                   borderRadius: "1px",
//                 }}
//               ></div>
//               <span style={{ fontSize: "11px", color: "#374151" }}>Waste</span>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//               <div
//                 style={{
//                   width: "8px",
//                   height: "8px",
//                   backgroundColor: "#f59e0b",
//                   borderRadius: "1px",
//                 }}
//               ></div>
//               <span style={{ fontSize: "11px", color: "#374151" }}>
//                 Recyclable materials
//               </span>
//             </div>
//             <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//               <div
//                 style={{
//                   width: "8px",
//                   height: "8px",
//                   backgroundColor: "#10b981",
//                   borderRadius: "1px",
//                 }}
//               ></div>
//               <span style={{ fontSize: "11px", color: "#374151" }}>
//                 Second-hand items
//               </span>
//             </div>
//           </div>
//         </div>





// <div
//         style={{
//           marginBottom: "32px",
//           // backgroundColor:'red',
//           width: '60%'
//         }}
//       >
//         {/* Most Events Created By Users Table */}
//         <div
//           style={{
//             backgroundColor: "white",
//             padding: "24px",
//             borderRadius: "8px",
//             boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//             border: "1px solid #e5e7eb",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginBottom: "20px",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 color: "#111827",
//                 margin: 0,
//               }}
//             >
//               Most Events Created By Users
//             </h3>
//             <a
//               href="#"
//               style={{
//                 fontSize: "14px",
//                 color: "#3b82f6",
//                 textDecoration: "none",
//                 fontWeight: "500",
//               }}
//             >
//               View all
//             </a>
//           </div>

//           <div style={{ overflowX: "auto" }}>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//               <thead>
//                 <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "12px 0",
//                       fontSize: "12px",
//                       fontWeight: "600",
//                       color: "#6b7280",
//                     }}
//                   >
//                     SL no.
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "12px 0",
//                       fontSize: "12px",
//                       fontWeight: "600",
//                       color: "#6b7280",
//                     }}
//                   >
//                     User Name
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "12px 0",
//                       fontSize: "12px",
//                       fontWeight: "600",
//                       color: "#6b7280",
//                     }}
//                   >
//                     Email
//                   </th>
//                   <th
//                     style={{
//                       textAlign: "left",
//                       padding: "12px 0",
//                       fontSize: "12px",
//                       fontWeight: "600",
//                       color: "#6b7280",
//                     }}
//                   >
//                     Events Created
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {eventsData.map((event, index) => (
//                   <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }}>
//                     <td
//                       style={{
//                         padding: "12px 0",
//                         fontSize: "14px",
//                         color: "#374151",
//                       }}
//                     >
//                       {event.sl}
//                     </td>
//                     <td style={{ padding: "12px 0" }}>
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "12px",
//                         }}
//                       >
//                         <img
//                           src={event.user.image}
//                           alt={event.user.name}
//                           style={{
//                             width: "36px",
//                             height: "36px",
//                             borderRadius: "50%",
//                             objectFit: "cover",
//                           }}
//                         />
//                         <span style={{ fontSize: "14px", color: "#374151" }}>
//                           {event.user.name}
//                         </span>
//                       </div>
//                     </td>
//                     <td
//                       style={{
//                         padding: "12px 0",
//                         fontSize: "14px",
//                         color: "#374151",
//                       }}
//                     >
//                       {event.user.email}
//                     </td>
//                     <td
//                       style={{
//                         padding: "12px 0",
//                         fontSize: "14px",
//                         color: "#374151",
//                       }}
//                     >
//                       {event.eventsCreated}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

