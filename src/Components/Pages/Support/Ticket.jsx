import React, { useState } from "react";
import { FaArrowLeft, FaEye, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { HiReply } from "react-icons/hi";
import { BsX } from "react-icons/bs";

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
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
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
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
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

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  // const [chatContent, setChatContent] = useState("This is editable content");

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          // backgroundColor: "white",
          padding: "24px",
          // borderRadius: "8px",
          // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          // border: "1px solid #e5e7eb",
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
            <FaArrowLeft className="text-[#007BFF]"
              onClick={() => navigate(-1)}
              style={{
                fontSize: "18px",
                // color: "black",
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
          <table style={{ width: "100%" }}>
            <thead>
              <tr style={{}}>
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
                    // borderBottom: "1px solid #f3f4f6",
                    transition: "background-color 0.2s",
                  }}
                  // onMouseOver={(e) =>
                  //   (e.target.parentElement.style.backgroundColor = "#f9fafb")
                  // }
                  // onMouseOut={(e) =>
                  // (e.target.parentElement.style.backgroundColor =
                  //   "transparent")
                  // }
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
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "8px",
                        borderRadius: "15%",
                        cursor: "pointer",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={openChatModal}
                    >
                      <FaEye size={20} />
                    </button>
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <button
                      style={{
                        backgroundColor: "#FF5454",
                        color: "white",
                        padding: "8px",
                        borderRadius: "15%",
                        cursor: "pointer",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      <HiReply size={20} />
                    </button>
                  </td>
                  {isModalOpen && (
                                      <div
                                        style={{
                                          position: "fixed",
                                          top: 0,
                                          left: 0,
                                          right: 0,
                                          bottom: 0,
                                          backgroundColor: "transparent", // fully visible background
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          zIndex: 1000,
                                        }}
                                      >
                                        <div
                                          style={{
                                            backgroundColor: "white",
                                            borderRadius: "8px",
                                            width: "90%",
                                            maxWidth: "800px",
                                            boxShadow: "0 4px 4px rgba(0,0,0,0.04)",
                                            // boxShadow:"5px",
                                            overflow: "hidden",
                                          }}
                                        >
                                          {/* Modal Header */}
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "space-between",
                                              alignItems: "center",
                                              backgroundColor: "white",
                                              color: "black",
                                              padding: "10px",
                                            }}
                                          >
                                            <h3
                                              style={{
                                                margin: 0,
                                                fontSize: "18px",
                                                fontWeight: "600",
                                              }}
                                            >
                                              {/* Modal Title */}
                                            </h3>
                                            <button
                                              onClick={() => setIsModalOpen(false)}
                                              style={{
                                                background: "none",
                                                border: "none",
                                                color: "black",
                                                cursor: "pointer",
                                                padding: "5px",
                                              }}
                                            >
                                              <BsX size={24} />
                                            </button>
                                          </div>
                  
                                          {/* Modal Content */}
                                          <div className="!px-20 !mb-5 text-gray-600">
                                            <h2 className="text-lg items-center flex justify-center">
                                              Reply
                                            </h2>
                                  
                                            <h3>Reply of the issue</h3>
                                            <div className="text-left">
                                              {/* <input type="button" value="value" className="w-30 h-30 border"/> */}
                                              <input 
                                                type="text"
                                                id="fname"
                                                name="fname"
                                                value="Type Here"
                                                className="w-full h-50 shadow border border-gray-300  rounded-sm"
                                              />
                                            </div>
                                            <button
                                              style={{
                                                width: "100%",
                                                // marginLeft:"40px",
                                                padding: "10px 50px",
                                                // paddingInline:"30px",
                                                backgroundColor: "#111827",
                                                color: "white",
                                                border: "none",
                                                alignItems: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                borderRadius: "30px",
                                                marginTop: "15px",
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                cursor: "pointer",
                                                transition: "background-color 0.2s",
                                              }}
                                              onMouseOver={(e) =>
                                                (e.target.style.backgroundColor = "#1f2937")
                                              }
                                              onMouseOut={(e) =>
                                                (e.target.style.backgroundColor = "#111827")
                                              }
                                            >
                                              Submit
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    )}
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
      {isChatModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "700px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                {/* Conversation Overview */}
              </h3>
              <button
                onClick={closeChatModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "black",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                <BsX size={24} className="!ml-40" />
              </button>
            </div>

            <div className="!mb-7 !px-10 !py-5">
              <h3 className="text-center">Ticket Details</h3>
            </div>
            <div className="!px-10 !mb-5">
              <div className="flex justify-between items-center !py-1">
                <div>
                  <h2>Ticket ID:</h2>
                </div>
                <div>
                  <h2>#325345636</h2>
                </div>
              </div>
              <div className="flex justify-between items-center !py-1">
                <div>
                  <h2>Date:</h2>
                </div>
                <div>
                  <h2>12/08/24</h2>
                </div>
              </div>
              <div className="flex justify-between items-center !py-1">
                <div>
                  <h2>User/Partner Name:</h2>
                </div>
                <div>
                  <h2>Devon Lane</h2>
                </div>
              </div>
              <div className="flex justify-between items-center !py-1">
                <div>
                  <h2>Phone Number:</h2>
                </div>
                <div>
                  <h2>(201) 555-0124</h2>
                </div>
              </div>
              <div className="flex justify-between items-center !py-1">
                <div>
                  <h2>Status:</h2>
                </div>
                <div>
                  <h2>In-progress</h2>
                </div>
              </div>
              <div className="justify-start items-center !py-1">
                <div>
                  <h2>Description of the issue:</h2>
                </div>
                <div>
                  <h2>
                    I am writing to express my dissatisfaction with the service
                    provided by XYZ Transport on October 10, 2024. I had
                    scheduled a pickup for my household goods to be transported
                    to my new residence. Unfortunately, the service was far
                    below my expectations.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ticket;
