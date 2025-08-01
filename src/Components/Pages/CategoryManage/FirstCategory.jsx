import React from "react";
import { FaEye } from "react-icons/fa";

const data = [
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
  {
    id: "#1233",
    category: "Furniture",
    action: "Action",
  },
];

const FirstCategory = () => {
  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen font-sans">
        <div className="flex items-center justify-between gap-2 mb-4 !p-3">
          <div className="flex items-center gap-2 mb-4">
            <button className="text-2xl font-semibold text-gray-700">←</button>
            <h1 className="text-xl font-semibold text-gray-800">
              Category Management
            </h1>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 !p-3">
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">
              All
            </button>
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">
              Move
            </button>
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">
              Sell
            </button>
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">
              Sell
            </button>
          </div>
          <div>
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">
              Sell
            </button>
          </div>
        </div>

        <div
          className="overflow-auto !w-full bg-white rounded-lg shadow !ml-4"
          style={{ padding: "20px" }}
        >
          <table className="!w-full text-sm">
            <thead className="text-gray-700">
              <tr className="flex justify-between">
                <th className="px-4 py-3 text-left">SL no.</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {data.map((item, i) => (
                <tr
                  key={i}
                  className="flex justify-between items-center"
                  style={{ padding: "12px 0" }}
                >
                  <td className="px-4">{item.id}</td>
                  <td className="px-4">{item.category}</td>
                  <td className="px-4 flex gap-2">
                    <button className="bg-blue-500 text-white p-2 rounded-full transition">
                      <FaEye size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-evenly items-center mt-6 text-sm text-gray-600">
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

export default FirstCategory;
