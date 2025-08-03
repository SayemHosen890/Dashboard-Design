import React from "react";
import { FaEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const data = [
  {
    id: 1,
    name: "Kathryn Murphy",
    role: "Partner",
    userImg: "https://randomuser.me/api/portraits/women/1.jpg",
    requestAmount: "$24.00",
    totalBalance: "$24.00",
    accountNo: "435634636",
    status: "Pending",
  },
  {
    id: 2,
    name: "Devon Lane",
    role: "User",
    userImg: "https://randomuser.me/api/portraits/men/2.jpg",
    requestAmount: "$20.00",
    totalBalance: "$20.00",
    accountNo: "534534535",
    status: "Completed",
  },
  {
    id: 3,
    name: "Foysal Rahman",
    role: "User",
    userImg: "https://randomuser.me/api/portraits/men/3.jpg",
    requestAmount: "$45.00",
    totalBalance: "$45.00",
    accountNo: "453453425",
    status: "Pending",
  },
  {
    id: 4,
    name: "Hari Danang",
    role: "Partner",
    userImg: "https://randomuser.me/api/portraits/men/4.jpg",
    requestAmount: "$35.00",
    totalBalance: "$35.00",
    accountNo: "546745656",
    status: "Completed",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "User",
    userImg: "https://randomuser.me/api/portraits/women/5.jpg",
    requestAmount: "$30.00",
    totalBalance: "$30.00",
    accountNo: "123456789",
    status: "Pending",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Partner",
    userImg: "https://randomuser.me/api/portraits/men/6.jpg",
    requestAmount: "$50.00",
    totalBalance: "$50.00",
    accountNo: "987654321",
    status: "Completed",
  },
  {
    id: 7,
    name: "Emily Davis",
    role: "User",
    userImg: "https://randomuser.me/api/portraits/women/7.jpg",
    requestAmount: "$28.00",
    totalBalance: "$28.00",
    accountNo: "456789123",
    status: "Pending",
  },
  {
    id: 8,
    name: "David Wilson",
    role: "Partner",
    userImg: "https://randomuser.me/api/portraits/men/8.jpg",
    requestAmount: "$42.00",
    totalBalance: "$42.00",
    accountNo: "789123456",
    status: "Completed",
  },
  {
    id: 9,
    name: "Lisa Brown",
    role: "User",
    userImg: "https://randomuser.me/api/portraits/women/9.jpg",
    requestAmount: "$38.00",
    totalBalance: "$38.00",
    accountNo: "321654987",
    status: "Pending",
  },
  {
    id: 10,
    name: "Robert Taylor",
    role: "Partner",
    userImg: "https://randomuser.me/api/portraits/men/10.jpg",
    requestAmount: "$55.00",
    totalBalance: "$55.00",
    accountNo: "654987321",
    status: "Completed",
  },
];

const statusColor = {
  Pending: {
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    borderColor: "#2563eb",
  },
  Completed: {
    color: "#059669",
    backgroundColor: "#ecfdf5",
    borderColor: "#059669",
  },
};

const BankTransfer = () => {
  return (
    <div>
      <div
        style={{
          padding: "24px",
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
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
              }}
            >
               <FaArrowLeft/>
            </button>
            <h1
              style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}
            >
              Bank Transfer
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
              <IoSearch className="text-xl"/>
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
                  Name
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Role
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Request Amount
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Total Balance
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Account No.
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Status
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
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
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
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontWeight: "500" }}>{item.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ color: "#374151" }}>{item.role}</span>
                  </td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>
                    {item.requestAmount}
                  </td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>
                    {item.totalBalance}
                  </td>
                  <td style={{ padding: "16px" }}>{item.accountNo}</td>
                  <td style={{ padding: "16px" }}>
                    <span
                      style={{
                        border: `1px solid ${
                          statusColor[item.status].borderColor
                        }`,
                        padding: "6px 12px",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: statusColor[item.status].color,
                        backgroundColor:
                          statusColor[item.status].backgroundColor,
                        display: "inline-block",
                        minWidth: "80px",
                        textAlign: "center",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaEye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </div>
  );
};

export default BankTransfer;
