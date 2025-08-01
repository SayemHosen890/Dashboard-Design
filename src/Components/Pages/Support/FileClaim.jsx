import React, { useState } from "react";
import { FaArrowLeft, FaEdit, FaEye, FaSearch } from "react-icons/fa";

const FileClaim = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for claims
  const claimsData = [
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "12/06/24",
      userName: "Hari Danang",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      complain: "No-show at scheduled...",
      complainAgainst: "Kathryn Murphy",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "10/06/24",
      userName: "Devon Lane",
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      complain: "Service not provided...",
      complainAgainst: "Floyd Miles",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Resolved",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "05/06/24",
      userName: "Foysal Rahman",
      userImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      complain: "Incomplete delivery...",
      complainAgainst: "Eleanor Pena",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      status: "In-progress",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "04/06/24",
      userName: "Leslie Alexander",
      userImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      complain: "Damaged goods received...",
      complainAgainst: "Jacob Jones",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "03/06/24",
      userName: "Brooklyn Simmons",
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      complain: "Wrong item delivered...",
      complainAgainst: "Darlene Robertson",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      status: "Resolved",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "#dbeafe",
          color: "#1d4ed8",
        };
      case "Resolved":
        return {
          backgroundColor: "#dcfce7",
          color: "#16a34a",
        };
      case "In-progress":
        return {
          backgroundColor: "#fed7aa",
          color: "#ea580c",
        };
      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#6b7280",
        };
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FaArrowLeft
              style={{
                fontSize: "18px",
                color: "#6b7280",
                cursor: "pointer",
              }}
            />
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
              }}
            >
              File Claim
            </h1>
          </div>
          <div style={{ position: "relative" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
                fontSize: "14px",
              }}
            />
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: "10px 12px 10px 36px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                width: "250px",
                backgroundColor: "#f9fafb",
              }}
            />
          </div>
        </div>

        {/* File New Claim Button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "24px",
          }}
        >
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
          >
            File New Claim
          </button>
        </div>

        {/* Claims Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Complain ID
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Order ID
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  User/Partner Name
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Complain
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Complain Against
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  View
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "16px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Penalty
                </th>
              </tr>
            </thead>
            <tbody>
              {claimsData.map((claim, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #f3f4f6",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.parentElement.style.backgroundColor = "#f9fafb")
                  }
                  onMouseOut={(e) =>
                    (e.target.parentElement.style.backgroundColor =
                      "transparent")
                  }
                >
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: "500",
                    }}
                  >
                    {claim.complainId}
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: "500",
                    }}
                  >
                    {claim.orderId}
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {claim.date}
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={claim.userImage}
                        alt={claim.userName}
                        style={{
                          width: "40px",
                          height: "30px",
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontSize: "14px", color: "#374151" }}>
                        {claim.userName}
                      </span>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                      maxWidth: "200px",
                    }}
                  >
                    {claim.complain}
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={claim.complainAgainstImage}
                        alt={claim.complainAgainst}
                        style={{
                          width: "40px",
                          height: "30px",
                          borderRadius: "4px",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontSize: "14px", color: "#374151" }}>
                        {claim.complainAgainst}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500",
                        ...getStatusStyle(claim.status),
                      }}
                    >
                      {claim.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#3b82f6",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#2563eb")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#3b82f6")
                      }
                    >
                      <FaEye style={{ fontSize: "12px" }} />
                    </button>
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <button
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#ef4444",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#dc2626")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#ef4444")
                      }
                    >
                      <FaEdit style={{ fontSize: "12px" }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "24px",
            gap: "16px",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              border: "1px solid #d1d5db",
              backgroundColor: "white",
              color: "#374151",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Previous
          </button>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #3b82f6",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              1
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                color: "#374151",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              2
            </button>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                color: "#374151",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              3
            </button>
            <span style={{ color: "#6b7280", fontSize: "14px" }}>...</span>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                backgroundColor: "white",
                color: "#374151",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              100
            </button>
          </div>
          <button
            style={{
              padding: "8px 16px",
              border: "1px solid #d1d5db",
              backgroundColor: "white",
              color: "#374151",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Next
          </button>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "12px",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          Showing 1-5 out of 1239
        </div>
      </div>
    </div>
  );
};

export default FileClaim;
