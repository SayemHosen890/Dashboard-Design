import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BsX } from "react-icons/bs";

const data = [
  { id: "#1233", category: "Perishable Foods" },
  { id: "#1233", category: "Non-Perishable Foods" },
  { id: "#1233", category: "Furniture" },
  { id: "#1233", category: "Textile and Clothing Goods" },
  { id: "#1233", category: "Raw Materials" },
  { id: "#1233", category: "Construction Materials" },
  { id: "#1233", category: "Fragile Items" },
  { id: "#1233", category: "Animals" },
];

const FirstCategory = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const buttons = [
    { id: "goods", label: "Goods" },
    { id: "waste", label: "Waste" },
    { id: "recyclable", label: "Recyclable Materials" },
    { id: "secondHand", label: "Second-hand Items" },
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

  // Map button IDs to related categories
  // Map button IDs to related categories
  const categoryMap = {
    goods: [
      "Perishable Foods",
      "Non-Perishable Foods",
      "Furniture",
      "Textile and Clothing Goods",
      "Raw Materials",
      "Construction Materials",
      "Fragile Items",
      "Animals",
    ],
    waste: [
      "Perishable Foods",
      "Non-Perishable Foods",
      "Furniture",
      "Textile and Clothing Goods",
      "Raw Materials",
      "Construction Materials",
    ],
    recyclable: [
      "Perishable Foods",
      "Non-Perishable Foods",
      "Furniture",
      "Textile and Clothing Goods",
      "Raw Materials",
      "Construction Materials",
      "Fragile Items",
      "Animals",
    ],
    secondHand: [
      "Perishable Foods",
      "Non-Perishable Foods",
      "Furniture",
      "Textile and Clothing Goods",
    ],
  };

  // Filtered data based on active button
  const filteredData =
    active === ""
      ? data
      : data.filter((item) => categoryMap[active]?.includes(item.category));

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatContent, setChatContent] = useState("This is editable content");

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const [activeConversation, setActiveConversation] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen font-sans">
        <div className="flex items-center justify-between gap-2 mb-4 !p-3">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="text-md font-semibold text-gray-700"
            >
              <FaArrowLeft  className="text-[#007BFF]"/>
            </button>
            <h1 className="text-xl font-semibold text-gray-800">
              Category Management
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 !p-3">
          <div className="flex gap-4">
            {buttons.map((btn) => (
              <button
                key={btn.id}
                onClick={() =>
                  setActive((prev) => (prev === btn.id ? "" : btn.id))
                } // toggle filter
                className={`${
                  active === btn.id
                    ? "bg-black text-white"
                    : "border text-black"
                } ${
                  btn.label.length > 10 ? "!px-4" : "!px-16"
                } text-center rounded-full h-10`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="!px-6 bg-black text-white text-center rounded-full h-10"
            >
              <div className="flex justify-center items-center gap-2">
                <div>
                  <IoMdAdd size={20} />
                </div>
                <div>Add New</div>
              </div>
            </button>
          </div>
        </div>

        <div
          className="overflow-auto !w-full bg-white rounded-lg shadow "
          style={{ padding: "20px" }}
        >
          <table className="!w-full text-lg">
            <thead className="text-gray-700">
              <tr className="flex justify-between">
                <th className="px-4 py-3 text-left">SL no.</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {filteredData.map((item, i) => (
                <tr
                  key={i}
                  className="flex justify-between items-center text-lg"
                  style={{ padding: "12px 0" }}
                >
                  <td className="px-4">{item.id}</td>
                  <td className="px-4">{item.category}</td>
                  <td className="px-4 flex gap-2">
                    <div className="flex gap-2">
                      <div>
                        <button
                          style={{
                            backgroundColor: "#007BFF",
                            color: "white",
                            padding: "8px",
                            borderRadius: "25%",
                            cursor: "pointer",
                          }}
                          onClick={openChatModal}
                        >
                          <MdModeEdit size={20} />
                        </button>
                      </div>
                      <div>
                        <button
                          style={{
                            backgroundColor: "#FF5454",
                            color: "white",
                            padding: "8px",
                            borderRadius: "25%",
                            cursor: "pointer",
                          }}
                        >
                          <RiDeleteBin6Line size={20} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
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
              maxWidth: "600px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
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
            <div className="!mb-7  !py-5">
              <h3 className="text-center !mb-5">Add Category</h3>
              <div>
                <h2 className="!ml-15">Category Name</h2>
                <div className=" flex justify-center items-center">
                  <input
                    type="button"
                    // value="Furniture"
                    className="border rounded-sm w-120 text-start !px-1 text-sm h-13"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 !py-3">
              <div>
                <button
                  style={{
                    border: "1px solid black",
                    color: "white",
                    padding: "8px 80px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    backgroundColor: "black",
                    margin: "0px 5px",
                  }}
                >
                  Save
                </button>
              </div>
              <div>
                <button
                  style={{
                    border: "1px solid black",
                    color: "black",
                    padding: "8px 80px",
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
              <h3 className="text-center !mb-5">Edit Category</h3>
              <div>
                <h2 className="!ml-5 !mb-2">Category Name</h2>
                <div className=" flex justify-center items-center">
                  <input
                    type="button"
                    value="Furniture"
                    className="border rounded-sm w-120 text-start !px-1 text-sm h-13"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4 !py-3">
              <div>
                <button
                  style={{
                    border: "1px solid black",
                    color: "white",
                    padding: "8px 80px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    backgroundColor: "black",
                    margin: "0px 5px",
                  }}
                >
                  Update
                </button>
              </div>
              <div>
                <button
                  style={{
                    border: "1px solid black",
                    color: "black",
                    padding: "8px 80px",
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
      )}
    </div>
  );
};

export default FirstCategory;
