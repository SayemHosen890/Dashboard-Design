import React from "react";

const variables = [
  {
    id: "01",
    name: "Surcharge Factor",
    inputLabel: "Surcharge Value (%):",
    type: "text",
  },
  {
    id: "02",
    name: "Coverage Radius",
    inputLabel: "Radius Value (km):",
    type: "text",
  },
  {
    id: "03",
    name: "Minimum Start Fee",
    inputLabel: "Value ($):",
    type: "text",
  },
  {
    id: "04",
    name: "Minimum Weight of Load Fee",
    inputLabel: "Value ($):",
    type: "text",
  },
  {
    id: "05",
    name: "Minimum By Distance Fee",
    inputLabel: "Value ($):",
    type: "text",
  },
  {
    id: "06",
    name: "Maximum Start Fee",
    inputLabel: "Value ($):",
    type: "text",
  },
  {
    id: "07",
    name: "Maximum Weight of Load Fee",
    inputLabel: "Value ($):",
    type: "text",
  },
  {
    id: "08",
    name: "Maximum By Distance Fee",
    inputLabel: "Value ($):",
    type: "text",
  },
  {
    id: "09",
    name: "Conversion Rate (Dollar to Mexican peso)",
    inputLabel: "1 Dollar =",
    type: "conversion",
  },
];

const Variable = () => {
  return (
    <div>
      <div className="p-6 bg-gray-50 h-screen font-sans">
        <div className="flex items-center justify-between gap-2 mb-4 !p-3">
          <div className="flex items-center gap-2 mb-4">
            <button className="text-2xl font-semibold text-gray-700">←</button>
            <h1 className="text-xl font-semibold text-gray-800">
              Variable Management
            </h1>
          </div>
        </div>
        <div
          className="overflow-auto bg-white rounded-lg shadow !ml-4"
          style={{ padding: "20px" }}
        >
          <table className="!w-full text-sm">
            <thead className="!w-full text-gray-700 bg-gray-300">
              <tr className="flex">
                <th className="px-4 py-3 text-left" style={{ width: "33.33%" }}>
                  SL no.
                </th>
                <th className="px-4 py-3 text-left" style={{ width: "33.33%" }}>
                  Variable
                </th>
                <th className="px-4 py-3 text-left" style={{ width: "33.33%" }}>
                  Input
                </th>
              </tr>
            </thead>
            <tbody>
              {variables.map((item, i) => (
                <tr
                  key={i}
                  className="flex items-center border-b border-gray-200"
                  style={{ padding: "12px 0" }}
                >
                  <td className="px-4 font-medium" style={{ width: "33.33%" }}>
                    {item.id}
                  </td>
                  <td className="px-4" style={{ width: "33.33%" }}>
                    {item.name}
                  </td>
                  <td className="px-4" style={{ width: "33.33%" }}>
                    <div className="flex items-center justify-end gap-2">
                      <span
                        className="text-gray-700 text-sm text-right"
                        style={{ minWidth: "140px" }}
                      >
                        {item.inputLabel}
                      </span>
                      <input
                        type="text"
                        className="border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                        style={{
                          padding: "8px",
                          maxWidth:
                            item.type === "conversion" ? "100px" : "200px",
                          width: item.type === "conversion" ? "100px" : "200px",
                        }}
                        placeholder=""
                      />
                      {item.type === "conversion" && (
                        <span className="text-gray-700 text-sm">
                          Mexican peso
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center !mt-9">
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Variable;
