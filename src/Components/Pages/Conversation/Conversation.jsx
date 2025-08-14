import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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

const Conversation = () => {
  const navigate = useNavigate();
  const [activeConversation, setActiveConversation] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }} className=""
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#007BFF",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
            >
              <FaArrowLeft />
            </button>
            <h1
              style={{ fontSize: "18px", fontWeight: "500", color: "#1f2937" }}
            >
              Review Conversation
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
                <GoSearch className="text-xl"/>
              </div>
            </div>
          
        </div>
      </div>
      <div className="flex h-screen p-5 gap-5 bg-gray-250">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-white shadow overflow-y-auto  scrollbar-hide">
          <div className="sticky top-0 bg-white z-10 pt-4 px-4">
            <h2 className="text-gray-700 py-3 text-xl font-bold !ml-5 !mb-2">
              Conversation Between
            </h2>
            <hr className="border border-gray-300 mb-3"/>
          </div>

          <ul className="pb-4 !pl-3">
            {filteredConversations.map((conv, i) => (
              <div key={i}>
                <li
                  className={`cursor-pointer flex items-center px-5 !py-4 gap-4  transition-colors ${
                    activeConversation === i ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setActiveConversation(i)}
                >
                  <div className="flex -space-x-2">
                    <img
                      src={conv.image1}
                      alt="avatar1"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                    <img
                      src={conv.image2}
                      alt="avatar2"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div>
                    <span className="text-base font-medium">{conv.name}</span>
                    {/* <p className="text-xs text-gray-500 truncate max-w-xs">
                      {conv.messages[conv.messages.length - 1]?.text ||
                        "No messages"}
                    </p> */}
                  </div>
                </li>
                <hr className="border-t border-gray-200 mx-4" />
              </div>
            ))}
          </ul>
        </div>

        {/* Right Chat Conversation */}
        <div className="w-3/4 bg-white shadow flex flex-col overflow-hidden ">
          <h2 className="text-gray-700 py-3 text-xl font-bold !ml-5 !mb-2">
            Conversation Overview
          </h2>

          <div className="flex-1 overflow-y-auto p-5 !px-4 bg-gray-50">
            <div className="space-y-4">
              {conversations[activeConversation].messages.map((msg, index) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
