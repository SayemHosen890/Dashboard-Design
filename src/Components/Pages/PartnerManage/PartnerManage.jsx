import React, { useState } from "react";
import { BsChatLeftText, BsX } from "react-icons/bs";
import { FaArrowLeft, FaCommentDots, FaEye } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
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
  {
    name: "Guy Hawkins & Cooper",
    image1: "https://randomuser.me/api/portraits/men/21.jpg",
    image2: "https://randomuser.me/api/portraits/men/22.jpg",
    messages: [
      {
        from: "Guy Hawkins",
        text: "Did you see the client feedback?",
        time: "09:15 AM",
      },
      {
        from: "Cooper",
        text: "Yes, they loved the new design direction!",
        time: "09:20 AM",
      },
      {
        from: "Guy Hawkins",
        text: "Perfect! Let's schedule a follow-up meeting.",
        time: "09:22 AM",
      },
      {
        from: "Cooper",
        text: "Yes, they loved the new design direction!",
        time: "09:20 AM",
      },
      {
        from: "Guy Hawkins",
        text: "Perfect! Let's schedule a follow-up meeting.",
        time: "09:22 AM",
      },
      {
        from: "Cooper",
        text: "Yes, they loved the new design direction!",
        time: "09:20 AM",
      },
      {
        from: "Guy Hawkins",
        text: "Perfect! Let's schedule a follow-up meeting.",
        time: "09:22 AM",
      },
      {
        from: "Cooper",
        text: "Yes, they loved the new design direction!",
        time: "09:20 AM",
      },
      {
        from: "Guy Hawkins",
        text: "Perfect! Let's schedule a follow-up meeting.",
        time: "09:22 AM",
      },
      {
        from: "Cooper",
        text: "Yes, they loved the new design direction!",
        time: "09:20 AM",
      },
    ],
  },
  {
    name: "Esther Howard & Jenny",
    image1: "https://randomuser.me/api/portraits/women/31.jpg",
    image2: "https://randomuser.me/api/portraits/women/32.jpg",
    messages: [
      {
        from: "Esther Howard",
        text: "Jenny, are we still on for lunch?",
        time: "11:45 AM",
      },
      {
        from: "Jenny",
        text: "Absolutely! Meet you at the usual spot at 12:30?",
        time: "11:47 AM",
      },
      {
        from: "Esther Howard",
        text: "Perfect, see you then!",
        time: "11:50 AM",
      },
      {
        from: "Jenny",
        text: "Absolutely! Meet you at the usual spot at 12:30?",
        time: "11:47 AM",
      },
      {
        from: "Esther Howard",
        text: "Perfect, see you then!",
        time: "11:50 AM",
      },
      {
        from: "Jenny",
        text: "Absolutely! Meet you at the usual spot at 12:30?",
        time: "11:47 AM",
      },
      {
        from: "Esther Howard",
        text: "Perfect, see you then!",
        time: "11:50 AM",
      },
      {
        from: "Jenny",
        text: "Absolutely! Meet you at the usual spot at 12:30?",
        time: "11:47 AM",
      },
      {
        from: "Esther Howard",
        text: "Perfect, see you then!",
        time: "11:50 AM",
      },
      {
        from: "Jenny",
        text: "Absolutely! Meet you at the usual spot at 12:30?",
        time: "11:47 AM",
      },
    ],
  },
  {
    name: "Smith & Mike Bond",
    image1: "https://randomuser.me/api/portraits/men/41.jpg",
    image2: "https://randomuser.me/api/portraits/men/42.jpg",
    messages: [
      {
        from: "Smith",
        text: "The project deadline has been moved up to next Friday",
        time: "03:15 PM",
      },
      {
        from: "Mike Bond",
        text: "Understood. I'll adjust the schedule accordingly",
        time: "03:18 PM",
      },
      {
        from: "Smith",
        text: "Thanks. Let me know if you need additional resources",
        time: "03:20 PM",
      },
      {
        from: "Mike Bond",
        text: "Understood. I'll adjust the schedule accordingly",
        time: "03:18 PM",
      },
      {
        from: "Smith",
        text: "Thanks. Let me know if you need additional resources",
        time: "03:20 PM",
      },
      {
        from: "Mike Bond",
        text: "Understood. I'll adjust the schedule accordingly",
        time: "03:18 PM",
      },
      {
        from: "Smith",
        text: "Thanks. Let me know if you need additional resources",
        time: "03:20 PM",
      },
      {
        from: "Mike Bond",
        text: "Understood. I'll adjust the schedule accordingly",
        time: "03:18 PM",
      },
      {
        from: "Smith",
        text: "Thanks. Let me know if you need additional resources",
        time: "03:20 PM",
      },
      {
        from: "Mike Bond",
        text: "Understood. I'll adjust the schedule accordingly",
        time: "03:18 PM",
      },
    ],
  },
  {
    name: "John & Esther Howard",
    image1: "https://randomuser.me/api/portraits/women/51.jpg",
    image2: "https://randomuser.me/api/portraits/men/52.jpg",
    messages: [
      {
        from: "John",
        text: "Esther, did you review the contract terms?",
        time: "02:10 PM",
      },
      {
        from: "Esther Howard",
        text: "Yes, I have some suggestions. Can we meet tomorrow?",
        time: "02:15 PM",
      },
      {
        from: "John",
        text: "10 AM works for me. Conference room B?",
        time: "02:17 PM",
      },
      {
        from: "Esther Howard",
        text: "Yes, I have some suggestions. Can we meet tomorrow?",
        time: "02:15 PM",
      },
      {
        from: "John",
        text: "10 AM works for me. Conference room B?",
        time: "02:17 PM",
      },
      {
        from: "Esther Howard",
        text: "Yes, I have some suggestions. Can we meet tomorrow?",
        time: "02:15 PM",
      },
      {
        from: "John",
        text: "10 AM works for me. Conference room B?",
        time: "02:17 PM",
      },
      {
        from: "Esther Howard",
        text: "Yes, I have some suggestions. Can we meet tomorrow?",
        time: "02:15 PM",
      },
      {
        from: "John",
        text: "10 AM works for me. Conference room B?",
        time: "02:17 PM",
      },
      {
        from: "Esther Howard",
        text: "Yes, I have some suggestions. Can we meet tomorrow?",
        time: "02:15 PM",
      },
      {
        from: "John",
        text: "10 AM works for me. Conference room B?",
        time: "02:17 PM",
      },
    ],
  },
  {
    name: "Jerome Bell & Devon Lane",
    image1: "https://randomuser.me/api/portraits/men/61.jpg",
    image2: "https://randomuser.me/api/portraits/men/62.jpg",
    messages: [
      {
        from: "Jerome Bell",
        text: "Devon, the server migration is complete",
        time: "04:30 PM",
      },
      {
        from: "Devon Lane",
        text: "Great job! Any issues during the process?",
        time: "04:32 PM",
      },
      {
        from: "Jerome Bell",
        text: "Smooth sailing. All systems are operational",
        time: "04:35 PM",
      },
      {
        from: "Devon Lane",
        text: "Great job! Any issues during the process?",
        time: "04:32 PM",
      },
      {
        from: "Jerome Bell",
        text: "Smooth sailing. All systems are operational",
        time: "04:35 PM",
      },
      {
        from: "Devon Lane",
        text: "Great job! Any issues during the process?",
        time: "04:32 PM",
      },
      {
        from: "Jerome Bell",
        text: "Smooth sailing. All systems are operational",
        time: "04:35 PM",
      },
      {
        from: "Devon Lane",
        text: "Great job! Any issues during the process?",
        time: "04:32 PM",
      },
      {
        from: "Jerome Bell",
        text: "Smooth sailing. All systems are operational",
        time: "04:35 PM",
      },
      {
        from: "Devon Lane",
        text: "Great job! Any issues during the process?",
        time: "04:32 PM",
      },
    ],
  },
  {
    name: "Mike Bond & Marvin",
    image1: "https://randomuser.me/api/portraits/men/71.jpg",
    image2: "https://randomuser.me/api/portraits/men/72.jpg",
    messages: [
      {
        from: "Mike Bond",
        text: "Marvin, can you handle the client meeting tomorrow?",
        time: "01:15 PM",
      },
      {
        from: "Marvin",
        text: "Sure! I'll prepare the presentation tonight",
        time: "01:17 PM",
      },
      {
        from: "Mike Bond",
        text: "Appreciate it. They're important stakeholders",
        time: "01:20 PM",
      },
      {
        from: "Marvin",
        text: "Sure! I'll prepare the presentation tonight",
        time: "01:17 PM",
      },
      {
        from: "Mike Bond",
        text: "Appreciate it. They're important stakeholders",
        time: "01:20 PM",
      },
      {
        from: "Marvin",
        text: "Sure! I'll prepare the presentation tonight",
        time: "01:17 PM",
      },
      {
        from: "Mike Bond",
        text: "Appreciate it. They're important stakeholders",
        time: "01:20 PM",
      },
      {
        from: "Marvin",
        text: "Sure! I'll prepare the presentation tonight",
        time: "01:17 PM",
      },
      {
        from: "Mike Bond",
        text: "Appreciate it. They're important stakeholders",
        time: "01:20 PM",
      },
      {
        from: "Marvin",
        text: "Sure! I'll prepare the presentation tonight",
        time: "01:17 PM",
      },
    ],
  },
  {
    name: "Eleanor Pena & Theresa",
    image1: "https://randomuser.me/api/portraits/women/81.jpg",
    image2: "https://randomuser.me/api/portraits/women/82.jpg",
    messages: [
      {
        from: "Eleanor Pena",
        text: "Theresa, the marketing campaign is live!",
        time: "09:30 AM",
      },
      {
        from: "Theresa",
        text: "Fantastic! Let's monitor the analytics closely",
        time: "09:32 AM",
      },
      {
        from: "Eleanor Pena",
        text: "Already set up tracking. Initial numbers look promising",
        time: "09:35 AM",
      },
      {
        from: "Theresa",
        text: "Fantastic! Let's monitor the analytics closely",
        time: "09:32 AM",
      },
      {
        from: "Eleanor Pena",
        text: "Already set up tracking. Initial numbers look promising",
        time: "09:35 AM",
      },
      {
        from: "Theresa",
        text: "Fantastic! Let's monitor the analytics closely",
        time: "09:32 AM",
      },
      {
        from: "Eleanor Pena",
        text: "Already set up tracking. Initial numbers look promising",
        time: "09:35 AM",
      },
      {
        from: "Theresa",
        text: "Fantastic! Let's monitor the analytics closely",
        time: "09:32 AM",
      },
      {
        from: "Eleanor Pena",
        text: "Already set up tracking. Initial numbers look promising",
        time: "09:35 AM",
      },
      {
        from: "Theresa",
        text: "Fantastic! Let's monitor the analytics closely",
        time: "09:32 AM",
      },
    ],
  },
  {
    name: "John Smith & Henry",
    image1: "https://randomuser.me/api/portraits/men/91.jpg",
    image2: "https://randomuser.me/api/portraits/men/92.jpg",
    messages: [
      {
        from: "John Smith",
        text: "Henry, need your input on the budget proposal",
        time: "11:10 AM",
      },
      {
        from: "Henry",
        text: "I'll review it after lunch and send my notes",
        time: "11:12 AM",
      },
      {
        from: "John Smith",
        text: "Thanks! The board meeting is at 3 PM",
        time: "11:15 AM",
      },
      {
        from: "Henry",
        text: "I'll review it after lunch and send my notes",
        time: "11:12 AM",
      },
      {
        from: "John Smith",
        text: "Thanks! The board meeting is at 3 PM",
        time: "11:15 AM",
      },
      {
        from: "Henry",
        text: "I'll review it after lunch and send my notes",
        time: "11:12 AM",
      },
      {
        from: "John Smith",
        text: "Thanks! The board meeting is at 3 PM",
        time: "11:15 AM",
      },
      {
        from: "Henry",
        text: "I'll review it after lunch and send my notes",
        time: "11:12 AM",
      },
      {
        from: "John Smith",
        text: "Thanks! The board meeting is at 3 PM",
        time: "11:15 AM",
      },
      {
        from: "Henry",
        text: "I'll review it after lunch and send my notes",
        time: "11:12 AM",
      },
    ],
  },
];

const PartnerManage = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  // const [chatContent, setChatContent] = useState("This is editable content");

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const [activeConversation, setActiveConversation] = useState(0);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newPopOpen, setIsNewPopOpen] = useState(false);
  const openPop = () => setIsNewPopOpen(true);
  const closePop = () => setIsNewPopOpen(false);

  return (
    <div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          height: "100vh",
          fontFamily: "sans-serif",
          borderRadius: "8px",
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
              Partner Management
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
                      onClick={() => navigate("/partnerDetail")}
                    >
                      <FaEye size={20} />
                    </button>
                  </td>
                  <>
                    {/* Table Cell with Button */}
                    <td style={{ padding: "16px" }}>
                      <button
                        onClick={openPop}
                        style={{
                          backgroundColor: "#e96755ff",
                          color: "white",
                          padding: "8px",
                          borderRadius: "25%",
                          cursor: "pointer",
                          border: "none",
                        }}
                      >
                        <MdOutlineArticle size={20} />
                      </button>
                    </td>

                    {/* Fullscreen Overlay Modal */}

                    
                  </>
                  <td style={{ padding: "16px" }}>
                    <button
                      style={{
                        backgroundColor: "#F2AA00",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                      onClick={openChatModal}
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
      {newPopOpen && (
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
                            width: "70%",
                            maxWidth: "600px",
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
                            <h3
                              style={{
                                margin: 0,
                                fontSize: "18px",
                                fontWeight: "600",
                              }}
                            >
                              {/* Conversation Overview */}
                            </h3>
                            <button
                              onClick={closePop}
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

                          <div className="!px-20 !mb-5">
                            <h2 className="text-lg items-center flex justify-center">
                              Important Notice
                            </h2>
                            <div className="flex justify-between items-center !py-4">
                              <div>
                                <h2>Important Notice</h2>
                              </div>
                              <div className="flex justify-start items-center gap-2">
                                <div>
                                  <input type="checkbox" name="" id="" />
                                </div>
                                <h2>Sent to All</h2>
                              </div>
                            </div>
                            <div className="relative">
                              {/* Corner text */}
                              <span className="absolute top-1 left-3 text-sm text-gray-500">
                                Write here
                              </span>

                              {/* Input field */}
                              <input
                                type="text"
                                // defaultValue="John"
                                className="h-50 w-full border rounded-md px-3 pt-5"
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
                              // onMouseOver={(e) =>
                              //   (e.target.style.backgroundColor = "#1f2937")
                              // }
                              // onMouseOut={(e) =>
                              //   (e.target.style.backgroundColor = "#111827")
                              // }
                            >
                              Sent
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
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

            <div className="w-full bg-white shadow flex flex-col overflow-hidden">
              <h2 className="text-gray-700 py-3 text-xl font-bold !ml-5 !mb-2 items-center flex justify-center">
                Conversation Overview
              </h2>
              <hr className="text-gray-300" />
              <div className="flex-1 overflow-y-auto p-5 !px-4 bg-gray-50">
                <div className="space-y-4">
                  {conversations[activeConversation].messages.map(
                    (msg, index) => {
                      const isFirstParticipant = msg.from.includes(
                        conversations[activeConversation].name.split(" & ")[0]
                      );

                      return (
                        <div
                          key={index}
                          className={`flex !py-3 !ml-2 items-start gap-3 ${
                            isFirstParticipant ? "" : "justify-end"
                          }`}
                        >
                          {isFirstParticipant && (
                            <img
                              src={conversations[activeConversation].image1}
                              className="w-8 h-8 rounded-full mt-1"
                              alt={msg.from}
                            />
                          )}

                          <div>
                            <div
                              className={`px-4 py-2 !p-2 rounded-2xl max-w-lg ${
                                isFirstParticipant
                                  ? "bg-white text-gray-800 rounded-tl-none border border-gray-200"
                                  : "bg-blue-500 text-white rounded-br-none"
                              }`}
                            >
                              {msg.text}
                            </div>
                            <div
                              className={`text-xs text-gray-500 mt-1 ${
                                isFirstParticipant
                                  ? "text-left ml-2"
                                  : "text-right mr-2"
                              }`}
                            >
                              {msg.time}
                            </div>
                          </div>

                          {!isFirstParticipant && (
                            <img
                              src={conversations[activeConversation].image2}
                              className="w-8 h-8 rounded-full mt-1"
                              alt={msg.from}
                            />
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerManage;
