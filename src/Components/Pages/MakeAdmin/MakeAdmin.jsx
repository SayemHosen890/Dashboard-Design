import React from "react";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";

const data = [
  {
    id: "#1233",
    name: "Kathryn Murp",
    userImg: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "bockely@att.com",
    contactNumber: "(201) 555-0124",
    hasAccessTo: "User Management",
  },
  {
    id: "#1233",
    name: "Devon Lane",
    userImg: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "csilvers@rizon.com",
    contactNumber: "(219) 555-0114",
    hasAccessTo: "Auction Management",
  },
  {
    id: "#1233",
    name: "Foysal Rahman",
    userImg: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "qamaho@mail.com",
    contactNumber: "(316) 555-0116",
    hasAccessTo: "Partner Management",
  },
  {
    id: "#1233",
    name: "Hari Danang",
    userImg: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "xterris@gmail.com",
    contactNumber: "(201) 555-0124",
    hasAccessTo: "Variable Management",
  },
  {
    id: "#1233",
    name: "Floyd Miles",
    userImg: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "floyd@example.com",
    contactNumber: "(219) 555-0114",
    hasAccessTo: "Review Conversation",
  },
  {
    id: "#1233",
    name: "Eleanor Pena",
    userImg: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "eleanor@example.com",
    contactNumber: "(316) 555-0116",
    hasAccessTo: "Bank Transfer",
  },
  {
    id: "#1233",
    name: "Sarah Johnson",
    userImg: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "sarah@example.com",
    contactNumber: "(201) 555-0124",
    hasAccessTo: "Transaction",
  },
  {
    id: "#1233",
    name: "Michael Chen",
    userImg: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "michael@example.com",
    contactNumber: "(219) 555-0114",
    hasAccessTo: "Support",
  },
  {
    id: "#1233",
    name: "Emily Davis",
    userImg: "https://randomuser.me/api/portraits/women/9.jpg",
    email: "emily@example.com",
    contactNumber: "(316) 555-0116",
    hasAccessTo: "Category Management",
  },
];

const MakeAdmin = () => {
  const navigate = useNavigate();
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
              Make Admin
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
              <FiSearch className="text-lg"/>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <button
            style={{
              backgroundColor: "#000000",
              color: "white",
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            + Make Admin
          </button>
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
                  Admin Name
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
                  Has Access to
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
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontWeight: "500" }}>{item.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>{item.email}</td>
                  <td style={{ padding: "16px" }}>{item.contactNumber}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ color: "#374151" }}>{item.hasAccessTo}</span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        style={{
                          backgroundColor: "#3b82f6",
                          color: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <MdOutlineModeEditOutline size={20} />
                        
                      </button>
                      <button
                        style={{
                          backgroundColor: "#ef4444",
                          color: "white",
                          padding: "8px",
                          borderRadius: "4px",
                          cursor: "pointer",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <RiDeleteBin6Line size={20} />
                      </button>
                    </div>
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
            gap: "16px",
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
                backgroundColor: "white",
                color: "#6b7280",
                fontSize: "14px",
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
                border: "none",
                cursor: "pointer",
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
                backgroundColor: "white",
                color: "#374151",
              }}
            >
              2
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
                backgroundColor: "white",
                color: "#374151",
              }}
            >
              3
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
                backgroundColor: "white",
                color: "#374151",
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
                backgroundColor: "white",
                color: "#6b7280",
                fontSize: "14px",
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

export default MakeAdmin;
