import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { FaArrowLeft, FaEdit, FaEye, FaSearch } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import phn1 from "../../../assets/phn1.png";
import phn2 from "../../../assets/phn2.png";
import phn3 from "../../../assets/phn3.png";

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
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
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
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
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
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      complain: "Damaged goods received...",
      complainAgainst: "Jacob Jones",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "04/06/24",
      userName: "Leslie Alexander",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      complain: "Damaged goods received...",
      complainAgainst: "Jacob Jones",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "04/06/24",
      userName: "Leslie Alexander",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      complain: "Damaged goods received...",
      complainAgainst: "Jacob Jones",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "04/06/24",
      userName: "Leslie Alexander",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      complain: "Damaged goods received...",
      complainAgainst: "Jacob Jones",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "04/06/24",
      userName: "Leslie Alexander",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      complain: "Damaged goods received...",
      complainAgainst: "Jacob Jones",
      complainAgainstImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      status: "Pending",
    },
    {
      complainId: "#12333",
      orderId: "#12333",
      date: "04/06/24",
      userName: "Leslie Alexander",
      userImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
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
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
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
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  // const [chatContent, setChatContent] = useState("This is editable content");

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const navigate = useNavigate();

  // const [activeConversation, setActiveConversation] = useState(0);

  // const [isModalOpen, setIsModalOpen] = useState(false);
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
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                // textAlign:'center'
                margin: "0",
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

        {/* Claims Table */}
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
                  <td style={{ padding: "16px 2px" }}>
                    <button
                      style={{
                        width: "37px",
                        height: "37px",
                        borderRadius: "15%",
                        backgroundColor: "#3b82f6",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s",
                      }}
                      onClick={openChatModal}
                    >
                      <FaEye style={{ fontSize: "20px" }} />
                    </button>
                  </td>
                  <td style={{ padding: "16px 0" }}>
                    <button
                      style={{
                        width: "37px",
                        height: "37px",
                        borderRadius: "15%",
                        backgroundColor: "#ef4444",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.2s",
                      }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      <MdOutlineModeEdit style={{ fontSize: "20px" }} />
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
                            Penalty
                          </h2>
                          <div className="!py-3">
                            <h2>User/Partner Name</h2>
                            <input type="button" value="Type Here" className="border w-3/4 text-left h-8 rounded-sm"/>
                          </div>
                          <div  className="!py-3">
                            <h2>User/Partner Name</h2>
                            <input type="button" value="Type Here" className="border w-3/4 text-left h-8 rounded-sm" />
                            <h4 className="!py-1">** Percentage will be deduct from the service/ product fee.</h4>
                          </div>
                          <h3>Reason of Penalty</h3>
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
              <h3 className="text-center">Complain Details</h3>
            </div>
            <div className="!px-10 !mb-5">
              <div className="flex justify-between items-center !py-1">
                <div>
                  <h2>Complain ID:</h2>
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
                  <h2>Complain Against:</h2>
                </div>
                <div>
                  <h2>Robert Smith</h2>
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
                  <h2>Complain:</h2>
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
              <div>
                <h1 className="!py-2">Evidence :</h1>
                <div className="flex justify-start gap-4">
                  <img
                    src={phn1}
                    alt="Image 1"
                    className="w-43 h-40 object-cover rounded"
                  />
                  <img
                    src={phn2}
                    alt="Image 2"
                    className="w-43 h-40 object-cover rounded"
                  />
                  <img
                    src={phn3}
                    alt="Image 3"
                    className="w-43 h-40 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileClaim;
