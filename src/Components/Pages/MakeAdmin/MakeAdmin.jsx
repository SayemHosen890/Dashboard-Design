import React, { useState } from "react";
import { BsX } from "react-icons/bs";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

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

const conversations = [
  {
    name: "John Smith & Mike Bond",
    image1: "https://randomuser.me/api/portraits/men/11.jpg",
    image2: "https://randomuser.me/api/portraits/men/12.jpg",
    messages: [
      {
        from: "John Smith",
        text: "Hi Mike, have you finished the quarterly report?",
        time: "10:30 AM",
      },
      {
        from: "Mike Bond",
        text: "Almost done! Just need to add the sales figures from last week.",
        time: "10:32 AM",
      },
      {
        from: "John Smith",
        text: "Great! Send it over when you're ready for review.",
        time: "10:35 AM",
      },
      {
        from: "Mike Bond",
        text: "Almost done! Just need to add the sales figures from last week.",
        time: "10:32 AM",
      },
      {
        from: "John Smith",
        text: "Great! Send it over when you're ready for review.",
        time: "10:35 AM",
      },
      {
        from: "Mike Bond",
        text: "Almost done! Just need to add the sales figures from last week.",
        time: "10:32 AM",
      },
      {
        from: "John Smith",
        text: "Great! Send it over when you're ready for review.",
        time: "10:35 AM",
      },
      {
        from: "Mike Bond",
        text: "Almost done! Just need to add the sales figures from last week.",
        time: "10:32 AM",
      },
      {
        from: "John Smith",
        text: "Great! Send it over when you're ready for review.",
        time: "10:35 AM",
      },
      {
        from: "Mike Bond",
        text: "Almost done! Just need to add the sales figures from last week.",
        time: "10:32 AM",
      },
    ],
  },
];

const MakeAdmin = () => {
  const navigate = useNavigate();

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openTheModal = () => setIsModalOpen(true);
  const closeTheModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        style={{
          padding: "24px",
          backgroundColor: "#fff",
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
                fontSize: "18px",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft className="text-[#007BFF]" />
            </button>
            <h1
              style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}
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
              <FiSearch className="text-lg" />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <button
            style={{
              backgroundColor: "#000000",
              color: "white",
              padding: "12px 24px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={openChatModal}
                className="flex justify-center items-center gap-2"
              >
                <div>
                  <IoMdAdd size={20} />
                </div>
                <div>
                  <h3>Make Admin</h3>
                </div>
              </button>
            </div>
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
            <thead style={{ backgroundColor: "#fff", color: "#374151" }}>
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
                <tr key={i} style={{}}>
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
                        onClick={openTheModal}
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
        {isModalOpen && (
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
                width: "90%",
                maxWidth: "800px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                overflow: "hidden",
                // marginBottom:"20px"
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
                  onClick={closeTheModal}
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
                <h3 className="text-center !mb-1">Edit</h3>
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                    alt="Profile"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid #e5e7eb",
                    }}
                  />
                </div>
                <div className="!px-30">
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "8px",
                      }}
                    >
                      Name of the Admin
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "8px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                  {/* Email Field */}
                  <div style={{ marginBottom: "20px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "8px",
                      }}
                    >
                      Contact No
                    </label>
                    <input
                      type="email"
                      placeholder="+880 123445566"
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: "32px" }}>
                    <label
                      style={{
                        // width:"100%",
                        display: "block",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "8px",
                      }}
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your password"
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                        fontSize: "14px",
                        backgroundColor: "white",
                      }}
                    />
                  </div>
                </div>
                <div className="!px-30 !mb-5">
                  <h1 className="!mb-2">Give Access To</h1>
                  <div className="flex justify-start items-center gap-2 ">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>Dashboard</h2>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>Auction Management</h2>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>User Management</h2>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 ">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>Partner Management</h2>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>Transaction</h2>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 ">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>Category Management</h2>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2 ">
                    <div>
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <h2>Variable Management</h2>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                >
                  <button
                    style={{
                      width: "70%",
                      padding: "10px 50px",
                      // paddingInline:"30px",
                      backgroundColor: "#111827",
                      color: "white",
                      border: "none",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "6px",
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
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
              width: "90%",
              maxWidth: "800px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              overflow: "hidden",
              // marginBottom:"20px"
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
              <h3 className="text-center !mb-1">Make Admin</h3>
              <div className="flex justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                  alt="Profile"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #e5e7eb",
                  }}
                />
              </div>
            </div>
            <div className="!px-30">
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Name of the Admin
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
              </div>
              {/* Email Field */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Contact No
                </label>
                <input
                  type="email"
                  placeholder="+880 123445566"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div style={{ marginBottom: "32px" }}>
                <label
                  style={{
                    // width:"100%",
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                    marginBottom: "8px",
                  }}
                >
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Enter your password"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
              </div>
            </div>
            <div className="!px-30 !mb-5">
              <h1 className="!mb-2">Give Access To</h1>
              <div className="flex justify-start items-center gap-2 ">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>Dashboard</h2>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>Auction Management</h2>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>User Management</h2>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 ">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>Partner Management</h2>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>Transaction</h2>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 ">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>Category Management</h2>
                </div>
              </div>
              <div className="flex justify-start items-center gap-2 ">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <div>
                  <h2>Variable Management</h2>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5px",
              }}
            >
              <button
                style={{
                  width: "70%",
                  padding: "10px 50px",
                  // paddingInline:"30px",
                  backgroundColor: "#111827",
                  color: "white",
                  border: "none",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1f2937")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#111827")}
              >
                Make
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;

