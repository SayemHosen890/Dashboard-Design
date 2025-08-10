import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Modal, Button } from "antd";
// import React from "react";
// import { useState } from "react";

const data = [
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Completed",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Claimed",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Assigned",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Completed",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Completed",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Assigned",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Completed",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "In-progress",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Completed",
    viewChart: "View Chart",
  },
  {
    id: "#1233",
    date: "12/06/24",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    partner: "Hari Danang",
    partnerImg: "https://randomuser.me/api/portraits/men/11.jpg",
    itemType: "Goods",
    category: "Furniture",
    bid: "$24.00",
    action: "Action",
    status: "Claimed",
    viewChart: "View Chart",
  },
  // Add more sample rows here...
];

const statusColor = {
  Completed: {
    color: "#24b587ff",
    backgroundColor: "#ecfdf5",
    borderColor: "#2b4f44ff",
  },
  Assigned: {
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    borderColor: "#2563eb",
  },
  "In-progress": {
    color: "#d97706",
    backgroundColor: "#fffbeb",
    borderColor: "#d97706",
  },
  Claimed: {
    color: "#e06565ff",
    backgroundColor: "#fef2f2",
    borderColor: "#b78e8eff",
  },
};

const Auction = () => {
  // const [anchorEl, setAnchorEl] = React.useState (null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        style={{
          padding: "4px",
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft />
            </button>
            <h1
              style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}
            >
              Auction Management
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search here..."
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "256px",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <button
              style={{
                padding: "8px 24px",
                backgroundColor: "#000000",
                color: "white",
                width: "80px",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
            >
              All
            </button>
            <button
              style={{
                padding: "8px 24px",
                backgroundColor: "#000000",
                color: "white",
                width: "80px",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
            >
              Move
            </button>
            <button
              style={{
                padding: "8px 24px",
                backgroundColor: "#000000",
                color: "white",
                width: "80px",
                borderRadius: "9999px",
                cursor: "pointer",
              }}
            >
              Sell
            </button>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <select
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "192px",
                color: "#6b7280",
                outline: "none",
              }}
            >
              <option>Item Types</option>
            </select>
            <select
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "192px",
                color: "#6b7280",
                outline: "none",
              }}
            >
              <option>Categories</option>
            </select>
            <select
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "192px",
                color: "#6b7280",
                outline: "none",
              }}
            >
              <option>Statuses</option>
            </select>
          </div>
        </div>

        <div
          style={{
            overflow: "hidden",
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
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                    // marginRight:"100px"
                  }}
                >
                  SL no.
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  User
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Assigned Partner
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Item Type
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Category
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Win Bid
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Action
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                    // marginRight:"50px"
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  View Chart
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "16px" }}>{item.id}</td>
                  <td style={{ padding: "16px" }}>{item.date}</td>
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
                  <td style={{ padding: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={item.partnerImg}
                        alt="partner"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontWeight: "500" }}>{item.partner}</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>{item.itemType}</td>
                  <td style={{ padding: "16px" }}>{item.category}</td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>
                    {item.bid}
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        border: "1px solid #f87171",
                        color: "#dc2626",
                        padding: "8px 16px",
                        borderRadius: "9999px",
                        fontSize: "14px",
                        fontWeight: "500",
                        cursor: "pointer",
                      }}
                      onClick={handleClick}
                    >
                      Refund
                    </button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Box sx={{ borderRadius: "2px" }}>
                        <div className=" mx-auto !p-7 bg-white shadow rounded-md !mr-140">
                          {/* Profile Picture */}
                          <h1 className="text-center !py-5">
                            Are you want to refund ?
                          </h1>
                          <h3 className="text-center !py-5">
                            Win Bid amount will be refund to the user/partner.
                          </h3>
                          <div className="flex justify-evenly items-center gap-4 !py-3">
                            <div>
                              <button
                                style={{
                                  border: "1px solid black",
                                  color: "white",
                                  padding: "8px 40px",
                                  borderRadius: "9999px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                  backgroundColor: "black",
                                  margin: "0px 5px",
                                }}
                              >
                                Refund
                              </button>
                            </div>
                            <div>
                              <button
                                style={{
                                  border: "1px solid black",
                                  color: "black",
                                  padding: "8px 40px",
                                  borderRadius: "9999px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                  margin: "0px 5px",
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Popper>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        border: `1px solid ${
                          statusColor[item.status].borderColor
                        }`,
                        padding: "8px 40px",
                        borderRadius: "9999px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: statusColor[item.status].color,
                        backgroundColor:
                          statusColor[item.status].backgroundColor,
                      }}
                      onClick={handleClick}
                    >
                      {item.status}
                    </button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Box sx={{ borderRadius: "2px" }}>
                        <div className=" mx-auto !p-7 bg-white shadow rounded-md !mr-140">
                          {/* Profile Picture */}
                          <h1 className="text-center !py-5">
                            Are you sure want to change the status to
                            “Completed”?
                          </h1>
                          <h3 className="text-center !py-5">
                            Win Bid amount will be send to the user/partner.
                          </h3>
                          <div className="flex justify-evenly items-center gap-4 !py-3">
                            <div>
                              <button
                                style={{
                                  border: "1px solid black",
                                  color: "white",
                                  padding: "8px 40px",
                                  borderRadius: "9999px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                  backgroundColor: "black",
                                  margin: "0px 5px",
                                }}
                              >
                                Confirm
                              </button>
                            </div>
                            <div>
                              <button
                                style={{
                                  border: "1px solid black",
                                  color: "black",
                                  padding: "8px 40px",
                                  borderRadius: "9999px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  cursor: "pointer",
                                  margin: "0px 5px",
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Popper>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ padding: 16, verticalAlign: "top" }}>
                              <div style={{ display: "flex", gap: 8 }}>
                                <button
                                  style={{
                                    backgroundColor: "#3b82f6",
                                    color: "white",
                                    padding: 8,
                                    borderRadius: "25%",
                                    cursor: "pointer",
                                    border: "none",
                                  }}
                                  onClick={() => navigate("/auctionDetails")}
                                >
                                  <FaEye size={20} />
                                </button>
                                <button
                                  style={{
                                    backgroundColor: "#F2AA00",
                                    color: "white",
                                    padding: 8,
                                    borderRadius: "25%",
                                    cursor: "pointer",
                                    border: "none",
                                  }}
                                  onClick={() => setIsModalOpen(true)}
                                >
                                  <BsChatLeftText size={20} />
                                </button>
                                <Modal
                                  title="Chat Popup"
                                  centered
                                  open={isModalOpen}
                                  onCancel={() => setIsModalOpen(false)}
                                  footer={[
                                    <Button
                                      key="close"
                                      onClick={() => setIsModalOpen(false)}
                                    >
                                      Close
                                    </Button>,
                                  ]}
                                >
                                  <p>This is your chat popup content.</p>
                                  {/* You can put your chat form or component here */}
                                </Modal>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-evenly items-center !mt-6 text-sm text-gray-600">
          <span>Showing 1-11 out of 1239</span>
          <div className="flex items-center gap-2">
            <button className="px-2">Previous</button>
            <button className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded text-xs">
              1
            </button>
            <button className="w-6 h-6 flex items-center justify-center border rounded text-xs">
              2
            </button>
            <span>...</span>
            <button className="w-6 h-6 flex items-center justify-center border rounded text-xs">
              100
            </button>
            <button className="px-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
