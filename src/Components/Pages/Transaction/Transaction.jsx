import React from "react";
import { BsChatLeftText } from "react-icons/bs";
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

const Transaction = () => {
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
    </div>
  );
};

export default Transaction;
