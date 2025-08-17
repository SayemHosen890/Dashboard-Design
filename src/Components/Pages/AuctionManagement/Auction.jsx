import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BsChatLeftText, BsX } from "react-icons/bs";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { GoSearch } from "react-icons/go";
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
    action: "Action",
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
    action: "Action",
    status: "Claimed",
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
    action: "Action",
    status: "Assigned",
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
    action: "Action",
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
    action: "Action",
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
    action: "Action",
    status: "Assigned",
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
    action: "Action",
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
    action: "Action",
    status: "In-progress",
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
    action: "Action",
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
    action: "Action",
    status: "Claimed",
    viewChart: "View Chart",
  },
  // Add more sample rows here...
];

const statusColor = {
  Completed: {
    color: "#24b587ff",
    backgroundColor: "#ecfdf5",
    borderColor: "#2b4f44ff",
  },
  Assigned: {
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    borderColor: "#2563eb",
  },
  "In-progress": {
    color: "#d97706",
    backgroundColor: "#fffbeb",
    borderColor: "#d97706",
  },
  Claimed: {
    color: "#e06565ff",
    backgroundColor: "#fef2f2",
    borderColor: "#b78e8eff",
  },
};

const Auction = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [activeConversation, setActiveConversation] = useState(0);
  const [activeButton, setActiveButton] = useState("All");
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const filteredData = data.filter((item) => {
    if (activeButton === "All") return true;
    if (activeButton === "Move") {
      // Filter for "Move" transactions - using 'Furniture' as an example
      return item.category === "Furniture";
    }
    if (activeButton === "Sell") {
      // Filter for "Sell" transactions - using 'Electronics' as an example
      return item.category !== "Completed";
    }
    return true;
  });

  const handleClose = () => {
    setOpen(false); // Closes the popper
  };

  const [newPopOpen, setIsNewPopOpen] = useState(false);
  const openPop = () => setIsNewPopOpen(true);
  const closePop = () => setIsNewPopOpen(false);

  const [anotherPopOpen, setAnotherPopOpen] = useState(false);
  const popOpen = () => setAnotherPopOpen(true);
  const popClose = () => setAnotherPopOpen(false);

  return (
    <div>
      <div
        style={{
          padding: "4px",
          backgroundColor: "#fff",
          minHeight: "100vh",
          fontFamily: "sans-serif",
          borderRadius: "5px",
          // marginLeft:"10px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginLeft: "12px",
            }}
          >
            <button
              className=""
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
              Auction Management
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["All", "Move", "Sell"].map((btn) => (
              <button
                key={btn}
                onClick={() => setActiveButton(btn)}
                style={{
                  marginLeft: "10px",
                  padding: "8px 36px",
                  backgroundColor:
                    activeButton === btn ? "#000000" : "transparent",
                  color: activeButton === btn ? "white" : "black",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  border:
                    activeButton === btn
                      ? "1px solid #000000"
                      : "1px solid #d1d5db",
                  whiteSpace: "nowrap",
                }}
              >
                {btn}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <select
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "192px",
                color: "#6b7280",
                outline: "none",
              }}
            >
              <option>Item Types</option>
            </select>
            <select
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "192px",
                color: "#6b7280",
                outline: "none",
              }}
            >
              <option>Categories</option>
            </select>
            <select
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "192px",
                color: "#6b7280",
                outline: "none",
              }}
            >
              <option>Statuses</option>
            </select>
          </div>
        </div>

        <div
          style={{
            overflow: "hidden",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <table
            style={{ minWidth: "100%", fontSize: "14px", marginLeft: "10px" }}
          >
            <thead style={{ backgroundColor: "#fff", color: "#374151" }}>
              <tr>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                  className="!ml-20"
                >
                  SL no.
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Date
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  User
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Assigned Partner
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Item Type
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Category
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Win Bid
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  Action
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  {activeButton === "Sell" ? "Action" : "Status"}
                </th>
                <th
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                >
                  View Chart
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={i} style={{}}>
                  <td style={{ padding: "10px" }}>{item.id}</td>
                  <td style={{ padding: "10px" }}>{item.date}</td>
                  <td style={{ padding: "10px" }}>
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
                  <td style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={item.partnerImg}
                        alt="partner"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <span style={{ fontWeight: "500" }}>{item.partner}</span>
                    </div>
                  </td>
                  <td style={{ padding: "10px" }}>{item.itemType}</td>
                  <td style={{ padding: "10px" }}>{item.category}</td>
                  <td style={{ padding: "10px", fontWeight: "500" }}>
                    {item.bid}
                  </td>
                  <td style={{ padding: "10px" }}>
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
                      onClick={openPop}
                    >
                      Refund
                    </button>
                  </td>

                  <td style={{ padding: "10px" }}>
                    <button
                      style={{
                        border: `1px solid ${
                          statusColor[item.status]?.borderColor || "#ccc"
                        }`,
                        padding: "8px 20px",
                        borderRadius: "9999px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: statusColor[item.status]?.color || "#333",
                        backgroundColor:
                          statusColor[item.status]?.backgroundColor ||
                          "#f3f4f6",
                      }}
                      onClick={popOpen}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ padding: 10, verticalAlign: "top" }}>
                            <div style={{ display: "flex", gap: 8 }}>
                              <button
                                style={{
                                  backgroundColor: "#3b82f6",
                                  color: "white",
                                  padding: 8,
                                  borderRadius: "25%",
                                  cursor: "pointer",
                                  border: "none",
                                }}
                                onClick={() => navigate("/auctionDetails")}
                              >
                                <FaEye size={20} />
                              </button>
                              <div>
                                <button
                                  style={{
                                    backgroundColor: "#F2AA00",
                                    color: "white",
                                    padding: 8,
                                    borderRadius: "25%",
                                    cursor: "pointer",
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                  onClick={openChatModal}
                                >
                                  <BsChatLeftText size={20} />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-evenly items-center !mt-6 text-sm text-gray-600">
          <span>
            Showing 1-{filteredData.length} out of {data.length}
          </span>
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

      {/* Chat Modal Overlay */}
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
            <div className=" ">
              <h1 className="text-center !py-5">
                Are you sure want to change the status to “Refund”?
              </h1>
              <h3 className="text-center !py-5">
                Win Bid amount will be send to the user/partner.
              </h3>
              <div className="flex justify-center items-center gap-4 !py-3">
                <div>
                  <button
                    style={{
                      border: "1px solid black",
                      color: "white",
                      padding: "8px 40px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      backgroundColor: "black",
                      margin: "0px 5px",
                    }}
                  >
                    Refund
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      border: "1px solid black",
                      color: "black",
                      padding: "8px 40px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      margin: "0px 5px",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {anotherPopOpen && (
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
                onClick={popClose}
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
            <div className=" ">
              <h1 className="text-center !py-5">
                Are you sure want to change the status to “Completed”?
              </h1>
              <h3 className="text-center !py-5">
                Win Bid amount will be send to the user/partner.
              </h3>
              <div className="flex justify-center items-center gap-4 !py-3">
                <div>
                  <button
                    style={{
                      border: "1px solid black",
                      color: "white",
                      padding: "8px 40px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      backgroundColor: "black",
                      margin: "0px 5px",
                    }}
                  >
                    Confirm
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      border: "1px solid black",
                      color: "black",
                      padding: "8px 40px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      margin: "0px 5px",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Auction;
