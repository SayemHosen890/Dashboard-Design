import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const AuditDashbaord = () => {
  const data = [
    {
      sl: "01",
      name: "Leslie Alexander",
      email: "bockely@att.com",
      events: 45,
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      sl: "02",
      name: "Jacob Jones",
      email: "csilvers@rizon.com",
      events: 38,
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      sl: "03",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
  ];
  const activeAdmins = [
    {
      sl: "#12333",
      admin: {
        name: "Jacob Jones",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      email: "bockely@att.com",
      phone: "(252) 555-0126",
      tasksCompleted: "45",
    },
    {
      sl: "#12333",
      admin: {
        name: "Darlene Robertson",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      email: "csilvers@rizon.com",
      phone: "(308) 555-0121",
      tasksCompleted: "53",
    },
    {
      sl: "#12333",
      admin: {
        name: "Brooklyn Simmons",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      email: "csilvers@rizon.com",
      phone: "(209) 555-0104",
      tasksCompleted: "53",
    },
    {
      sl: "#12333",
      admin: {
        name: "Leslie Alexander",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      email: "csilvers@rizon.com",
      phone: "(207) 555-0119",
      tasksCompleted: "53",
    },
    {
      sl: "#12333",
      admin: {
        name: "Leslie Alexander",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      email: "csilvers@rizon.com",
      phone: "(207) 555-0119",
      tasksCompleted: "53",
    },
    {
      sl: "#12333",
      admin: {
        name: "Leslie Alexander",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      email: "csilvers@rizon.com",
      phone: "(207) 555-0119",
      tasksCompleted: "53",
    },
  ];
  return (
    <>
      <div className="flex justify-left items center w-full gap-10">
        <div>
          <div className="flex justify-left items center w-60% gap-10">
            <div className="grid h-35 w-105 bg-white items-center font-bold justify-center rounded-lg shadow">
              <h1 className="text-xl">Total Number of Events</h1>
              <span className="items-center justify-center flex font-bold text-xl">
                82
              </span>
            </div>
            <div className="grid h-35 w-105 bg-white items-center font-bold justify-center rounded-lg shadow">
              <h1 className="text-xl">Most Common Event Type</h1>
              <span className="items-center justify-center flex text-xl">
                Goods
              </span>
            </div>
          </div>
          <div className="flex justify-left items center w-60% gap-10 !mt-10">
            <div className="grid h-60 w-220 bg-white items-center rounded-lg shadow !pb-2">
              {/* <div> */}
              {/* Header Flex */}
              <div className="flex justify-between items-center mb-4 !pt-2">
                <h2 className="text-md font-semibold !ml-5">
                  Most Events Created By Users
                </h2>
                <Link to="auditViewAll">
                  <button className="text-blue-400  text-sm !mr-5">
                    View all
                  </button>
                </Link>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="rounded-lg overflow-hidden">
                  <thead className="">
                    <tr className="">
                      <th className="!px-12 !py-3 text-left text-sm font-md text-gray-600">
                        SL no.
                      </th>
                      <th className="!px-12 py-2 text-left text-sm font-semibold text-gray-600">
                        User Name
                      </th>
                      <th className="!px-12 py-2 text-left text-sm font-semibold text-gray-600">
                        Email
                      </th>
                      <th className="!px-12 py-2 text-left text-sm font-semibold text-gray-600">
                        Events Created
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index} className="">
                        <td className="!px-13 py-2 items-center text-sm">
                          {row.sl}
                        </td>
                        <td className="!px-13 py-2 flex items-center gap-2  text-sm">
                          <img
                            src={row.img}
                            alt={row.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          {row.name}
                        </td>
                        <td className="!px-13 py-2 items-center  text-sm">
                          {row.email}
                        </td>
                        <td
                          style={{ marginLeft: "10px" }}
                          className="!px-13 py-2 text-sm items-center justify-center"
                        >
                          {row.events}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="grid h-105 w-290 bg-white shadow rounded-lg">
          <div
          // style={{
          //   backgroundColor: "white",
          //   padding: "24px",
          //   borderRadius: "8px",
          //   boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          //   border: "1px solid #e5e7eb",
          // }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "16px",
                    marginLeft: "50px",
                    paddingTop: "5px",
                  }}
                >
                  Task Completion Rate :
                </h3>
              </div>
              <div className="flex justify-center items-center !mr-7 gap-4">
                <div className="flex items-center">
                  <select className="border flex items-center justify-between gap-3 px-6 py-3 w-30">
                    <option>September</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <select className="border flex items-center justify-between gap-2 px-6 py-3 w-22">
                    <option>2024</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "280px",
                }}
              >
                {/* Donut Chart */}
                <svg width="280" height="280" viewBox="0 0 200 200">
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                  />
                  {/* Completed tasks (blue) - approximately 76% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.56} ${
                      2 * Math.PI * 80
                    }`}
                    strokeDashoffset={-2 * Math.PI * 80 * 0.15}
                    transform="rotate(-90 100 100)"
                  />
                  {/* Ongoing tasks (orange) - approximately 24% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.12} ${
                      2 * Math.PI * 80
                    }`}
                    strokeDashoffset={-2 * Math.PI * 80 * 0.01}
                    transform="rotate(-90 100 100)"
                  />
                  {/* Ongoing tasks (orange) - approximately 24% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#705321ff"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.12} ${
                      2 * Math.PI * 80
                    }`}
                    strokeDashoffset={-2 * Math.PI * 80 * 0.08}
                    transform="rotate(-90 100 100)"
                  />
                  {/* Ongoing tasks (orange) - approximately 24% */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#0ebe0eff"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 80 * 0.2} ${
                      2 * Math.PI * 80
                    }`}
                    strokeDashoffset={-2 * Math.PI * 80 * 0.1}
                    transform="rotate(-90 100 100)"
                  />
                </svg>

                {/* Center text */}
              </div>
            </div>

            {/* Legend */}
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#3b82f6",
                    borderRadius: "2px",
                  }}
                ></div>
                <span style={{ fontSize: "13px", color: "#374151" }}>
                  Completed
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#f59e0b",
                    borderRadius: "2px",
                  }}
                ></div>
                <span style={{ fontSize: "13px", color: "#374151" }}>
                  Ongoing
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#705321ff",
                    borderRadius: "2px",
                  }}
                ></div>
                <span style={{ fontSize: "13px", color: "#374151" }}>
                  Process
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#0ebe0eff",
                    borderRadius: "2px",
                  }}
                ></div>
                <span style={{ fontSize: "13px", color: "#0f469fff" }}>On</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid bg-white !mt-10 h-130 rounded-lg shadow">
        {/* Active Admins List */}
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
              }}
            >
              Active Admins
            </h3>
            <Link to="viewAll">
              <button
                style={{
                  fontSize: "14px",
                  color: "#3b82f6",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                View all
              </button>
            </Link>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{}}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    SL no.
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    Admin Name
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "8px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    Phone Number
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      padding: "8px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    Task Completed Today
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeAdmins.map((admin, index) => (
                  <tr key={index} style={{}}>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {admin.sl}
                    </td>
                    <td style={{ padding: "8px 0" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <img
                          src={admin.admin.image}
                          alt={admin.admin.name}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#374151" }}>
                          {admin.admin.name}
                        </span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {admin.email}
                    </td>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {admin.phone}
                    </td>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: "#374151",
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      {admin.tasksCompleted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditDashbaord;
