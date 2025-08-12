import React, { useState } from "react";
import { BsChatLeftText, BsX } from "react-icons/bs";
import { FaEye, FaCommentDots, FaArrowLeft } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
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
    action: "Paid",
    status: "Completed",
    viewChart: "View Chart",
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

const Transaction = () => {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatContent, setChatContent] = useState("This is editable content");

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const [activeConversation, setActiveConversation] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen font-sans">
        <div className="flex items-center justify-between gap-2 mb-4 !p-3">
          <div className="flex items-center gap-2 mb-4 !ml-2">
            <button
              onClick={() => navigate(-1)}
              className="text-md !mt-1 font-24px text-gray-700"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Transaction</h1>
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

        <div className="overflow-auto bg-white rounded-lg shadow !ml-4">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="!px-4 !py-7 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Sender</th>
                <th className="px-4 py-3 text-left">Receiver</th>
                <th className="px-4 py-3 text-left">Item Type</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Win Bid</th>
                <th className="px-4 py-3 text-left">Payment Status</th>
                <th className="px-4 py-3 text-left">Details</th>
                <th className="px-4 py-3 text-left">Chat</th>
              </tr>
            </thead>
            <tbody className="!p-50" style={{ padding: 20 }}>
              {data.map((item, i) => (
                <tr key={i}>
                  <td className="!px-4 !py-7">{item.id}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  {/* User Info */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={item.userImg}
                        alt="user"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{item.user}</span>
                    </div>
                  </td>
                  {/* Partner Info */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.partnerImg}
                        alt="partner"
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{item.partner}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{item.itemType}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.bid}</td>
                  {/* <td className="px-4 py-3">{item.action}</td> */}
                  <td className="px-4 py-3">
                    <button className=" !px-2 text-black-500 px-3 py-1 rounded-full text-lg transition">
                      Paid
                    </button>
                  </td>
                  {/* <td className="px-4 py-3">
                        <span className={`border px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}>
                          {item.status}
                        </span>
                      </td> */}
                  <td className="px-4">
                    <button
                      style={{
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "8px",
                        borderRadius: "25%",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/transactionDetails")}
                    >
                      <FaEye size={20} />
                    </button>
                  </td>
                  <td className="px-4">
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

        <div className="flex justify-evenly items-center !mt-3 text-sm text-gray-600">
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

export default Transaction;
