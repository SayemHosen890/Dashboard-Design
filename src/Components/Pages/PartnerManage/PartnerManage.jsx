import React from "react";
import { BsChatLeftText } from "react-icons/bs";
import { FaArrowLeft, FaCommentDots, FaEye } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: "#1233",
    user: "John Smith",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "whatever@gmail.com",
    contactNumber: "(201) 555-4445",
    location: "Aurora, OR 97600",
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
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
    walletBalance: "$60.0",
    action: "Action",
    viewDetails: "Completed",
    notice: "notice",
    chat: "chat",
  },
  // Add more sample rows here...
];

const PartnerManage = () => {
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
              Partner Management
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
                  Partner's Name
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
                  Wallet Balance
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
                  <td style={{ padding: "16px", fontWeight: "500" }}>
                    {item.walletBalance}
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
                    >
                      Refund
                    </button>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                    >
                      <FaEye size={20} />
                    </button>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        backgroundColor: "#e96755ff",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                    >
                      <MdOutlineArticle size={20} className="" />
                    </button>
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

        {/* Pagination */}

        <div className="flex justify-evenly items-center !mb-3 !mt-6 text-sm text-gray-600">
          <span>Showing 1-11 out of 1239</span>
          <div className="flex items-center gap-2">
            <button className="px-2">Previous</button>
            <button className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded text-xs">1</button>
            <button className="w-6 h-6 flex items-center justify-center border rounded text-xs">2</button>
            <span>...</span>
            <button className="w-6 h-6 flex items-center justify-center border rounded text-xs">100</button>
            <button className="px-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerManage;
