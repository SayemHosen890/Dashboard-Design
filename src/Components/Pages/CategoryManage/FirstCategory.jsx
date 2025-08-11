import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

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
      : data.filter((item) =>
          categoryMap[active]?.includes(item.category)
        );

  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen font-sans">
        <div className="flex items-center justify-between gap-2 mb-4 !p-3">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="text-md font-semibold text-gray-700"
            >
              <FaArrowLeft />
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
              onClick={() => alert("Add New clicked")}
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
    </div>
  );
};

export default FirstCategory;
