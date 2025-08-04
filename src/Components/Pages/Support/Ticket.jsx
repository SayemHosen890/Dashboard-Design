import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaReply, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

const Ticket = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for tickets
  const ticketsData = [
    {
      ticketId: "#12333",
      date: "12/06/24",
      userName: "Hari Danang",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      description: "No-show at scheduled pic...",
      email: "bockely@att.com",
      contactNumber: "(555) 123-4567",
      status: "Pending",
    },
    {
      ticketId: "#12333",
      date: "10/06/24",
      userName: "Devon Lane",
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      description: "No-show at scheduled pic...",
      email: "csilvers@rizon.com",
      contactNumber: "(555) 234-5678",
      status: "Replied",
    },
    {
      ticketId: "#12333",
      date: "05/06/24",
      userName: "Floyd Miles",
      userImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      description: "No-show at scheduled pic...",
      email: "qamaho@gmail.com",
      contactNumber: "(555) 345-6789",
      status: "Pending",
    },
    {
      ticketId: "#12333",
      date: "04/06/24",
      userName: "Kathryn Murp",
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      description: "No-show at scheduled pic...",
      email: "xterris@gmail.com",
      contactNumber: "(555) 456-7890",
      status: "Replied",
    },
    {
      ticketId: "#12333",
      date: "03/06/24",
      userName: "Foysal Rahman",
      userImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      description: "No-show at scheduled pic...",
      email: "foysal@example.com",
      contactNumber: "(555) 567-8901",
      status: "Pending",
    },
    {
      ticketId: "#12333",
      date: "02/06/24",
      userName: "Eleanor Pena",
      userImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      description: "No-show at scheduled pic...",
      email: "eleanor@example.com",
      contactNumber: "(555) 678-9012",
      status: "Replied",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return {
          backgroundColor: "white",
          color: "#3b82f6",
          border: "1px solid #3b82f6",
        };
      case "Replied":
        return {
          backgroundColor: "white",
          color: "#16a34a",
          border: "1px solid #16a34a",
        };
      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#6b7280",
          border: "1px solid #d1d5db",
        };
    }
  };
const navigate = useNavigate ();
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
            onClick={() => navigate(-1)}
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
              Support
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

        {/* Tickets Table */}
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
                  Ticket ID
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
                  Description of the issue
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
                  Email
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
                  Contact Number
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
                  Reply
                </th>
              </tr>
            </thead>
            <tbody>
              {ticketsData.map((ticket, index) => (
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
                    {ticket.ticketId}
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {ticket.date}
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
                        src={ticket.userImage}
                        alt={ticket.userName}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontSize: "14px", color: "#374151" }}>
                        {ticket.userName}
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
                    {ticket.description}
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {ticket.email}
                  </td>
                  <td
                    style={{
                      padding: "16px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {ticket.contactNumber}
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500",
                        ...getStatusStyle(ticket.status),
                      }}
                    >
                      {ticket.status}
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
                        borderRadius: "4px",
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
                      <FaReply style={{ fontSize: "12px" }} />
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
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Showing 1-11 out of 1239
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaArrowLeft style={{ fontSize: "12px" }} />
              Previous
            </button>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #3b82f6",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </button>
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "white",
                  color: "#374151",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                2
              </button>
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "white",
                  color: "#374151",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                3
              </button>
              <span
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ...
              </span>
              <button
                style={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "white",
                  color: "#374151",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Next
              <FaArrowLeft
                style={{
                  fontSize: "12px",
                  transform: "rotate(180deg)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
