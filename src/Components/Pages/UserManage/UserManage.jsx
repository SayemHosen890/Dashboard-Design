import React from "react";
import { FaCommentDots, FaEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { MdOutlineArticle } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Button, ConfigProvider, Flex, Popconfirm } from "antd";
import { GoSearch } from "react-icons/go";

const text = "Are you sure to delete this task?";
const description = "Delete the task";
const buttonWidth = 80;

const data = [
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  // Add more sample rows here...
];

const UserManage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          padding: "24px",
          backgroundColor: "#f9fafb",
          height: "100vh",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft />
            </button>
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}
            >
              User Management
            </h1>
          </div>
          <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          placeholder="Search here..."
                          style={{
                            border: "1px solid #d1d5db",
                            padding: "8px 16px 8px 40px",
                            borderRadius: "6px",
                            width: "256px",
                            outline: "none",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            left: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "#6b7280",
                          }}
                        >
                          <GoSearch className="text-xl" />
                        </div>
                      </div>
        </div>

        <div
          style={{
            overflow: "auto",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <table style={{ minWidth: "100%", fontSize: "14px" }}>
            <thead style={{ backgroundColor: "#f3f4f6", color: "#374151" }}>
              <tr>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  SL no.
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  User's Name
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Contact Number
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Location
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Action
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  View Details
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Notice
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Chat
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "16px" }}>{item.id}</td>
                  <td style={{ padding: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={item.userImg}
                        alt="user"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontWeight: "500" }}>{item.user}</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>{item.email}</td>
                  <td style={{ padding: "16px" }}>{item.contactNumber}</td>
                  <td style={{ padding: "16px" }}>{item.location}</td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        // border: "1px solid #f87171",
                        // color: "#dc2626",
                        // padding: "8px 16px",
                        // borderRadius: "9999px",
                        fontSize: "14px",
                        // fontWeight: "500",
                        cursor: "pointer",
                      }}
                    >
                      <Switch {...label} defaultChecked />
                    </button>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <div>
                      <button
                        aria-describedby={id}
                        type="button"
                        style={{
                          backgroundColor: "#3b82f6",
                          color: "white",
                          padding: "8px",
                          borderRadius: "25%",
                          cursor: "pointer",
                        }}
                        onClick={handleClick}
                      >
                        <FaEye size={20} />
                      </button>
                      <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box sx={{ borderRadius: "2px" }}>
                          <div className=" mx-auto !p-8 bg-white shadow rounded-md !mr-140">
                            {/* Profile Picture */}
                            <div className="flex justify-center mb-4">
                              <img
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="Profile"
                                className="w-15 h-15 rounded-full object-cover"
                              />
                            </div>
                            <div className="text-center !my-4">
                              <div>Robert Smith</div>
                              <div>robertsmith34@gmail.com</div>
                            </div>
                            <div className="!px-5 !mt-5">
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Phone Number:</h3>
                                </div>
                                <div>+3489 9999 9778</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Location:</h3>
                                </div>
                                <div>
                                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                                </div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Wallet Balance:</h3>
                                </div>
                                <div>$354</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Bank Info</h3>
                                </div>
                                {/* <div>
                                  +3489 9999 9778
                                </div> */}
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Account Holder Name:</h3>
                                </div>
                                <div>Dianne Russell</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Account Holder Type:</h3>
                                </div>
                                <div>Personal</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Account Number:</h3>
                                </div>
                                <div>6575675678676</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Routing Number:</h3>
                                </div>
                                <div>5474574575467</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Phone Number:</h3>
                                </div>
                                <div>(201) 555-0124</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Date of Birth:</h3>
                                </div>
                                <div>23/06/99</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Business Name:</h3>
                                </div>
                                <div>Governance structures,</div>
                              </div>
                              <div className="flex justify-between gap-90 !py-2">
                                <div>
                                  <h3>Website:</h3>
                                </div>
                                <div>https://www.vip.com/</div>
                              </div>
                              <div className="flex justify-between gap-90">
                                <div>
                                  <h3>City:</h3>
                                </div>
                                <div>San Juan</div>
                              </div>
                            </div>
                          </div>
                        </Box>
                      </Popper>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    {/* <button
                      style={{
                        backgroundColor: "#e96755ff",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                    >
                      <MdOutlineArticle size={20} className="" />
                    </button> */}
                    <ConfigProvider
                      button
                      style={{
                        backgroundColor: "#e96755ff",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                    >
                      <Flex
                        vertical
                        justify="center"
                        align="center"
                        className="demo"
                      >
                        <Flex
                          justify="center"
                          align="center"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <Popconfirm>
                            <MdOutlineArticle size={20} className="" />
                          </Popconfirm>
                        </Flex>
                      </Flex>
                    </ConfigProvider>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        backgroundColor: "#F2AA00",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                    >
                      <BsChatLeftText size={20} className="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "24px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          <span>Showing 1-11 out of 1239</span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              style={{
                padding: "4px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              1
            </button>
            <button
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              2
            </button>
            <span>...</span>
            <button
              style={{
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              100
            </button>
            <button
              style={{
                padding: "4px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
