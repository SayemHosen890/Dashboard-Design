import React from "react";
// import { Links } from "react-router";
import { Link } from "react-router-dom";

const SupervisionDashboard = () => {
  // Sample data for the dashboard
  const summaryStats = [
    { title: "Active Admins", value: "82", color: "#3b82f6" },
    { title: "Total Tasks", value: "852", color: "#10b981" },
    { title: "Completed Tasks", value: "650", color: "#f59e0b" },
    { title: "Tasks in Progress", value: "345", color: "#ef4444" },
  ];

  const completedTasks = [
    {
      sl: "#12333",
      task: "Reviewing user payment dispute",
      admin: {
        name: "Leslie Alexander",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      status: "Resolved",
    },
    {
      sl: "#12333",
      task: "User management activity",
      admin: {
        name: "Jacob Jones",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      status: "Resolved",
    },
    {
      sl: "#12333",
      task: "Reviewing user payment dispute",
      admin: {
        name: "Esther Howard",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      status: "Resolved",
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
  ];

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Summary Statistics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          marginBottom: "32px",
          textAlign:"center"
        }}
      >
        {summaryStats.map((stat, index) => (
          <div
            key={index}
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
                fontSize: "22px",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              {stat.title}
            </div>
            <div
              style={{ fontSize: "32px", fontWeight: "600", color: "#111827" }}
            >
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70% 1fr",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {/* Task Completed List */}
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
              Task Completed
            </h3>
            <Link to="taskComplete">
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
                    Task
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
                    Assigned Admin
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {completedTasks.map((task, index) => (
                  <tr key={index} style={{}}>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {task.sl}
                    </td>
                    <td
                      style={{
                        padding: "8px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {task.task}
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
                          src={task.admin.image}
                          alt={task.admin.name}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#374151" }}>
                          {task.admin.name}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "8px 0" }}>
                      <span
                        style={{
                          padding: "6px 16px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          backgroundColor: "#10b981",
                          color: "white",
                          border: "none",
                        }}
                      >
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Task Completion Rate Chart */}
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Task Completion Rate
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{ position: "relative", width: "180px", height: "180px" }}
            >
              {/* Donut Chart */}
              <svg width="180" height="180" viewBox="0 0 200 200">
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
                  strokeDasharray={`${2 * Math.PI * 80 * 0.76} ${
                    2 * Math.PI * 80
                  }`}
                  strokeDashoffset={-2 * Math.PI * 80 * 0.25}
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
                  strokeDasharray={`${2 * Math.PI * 80 * 0.24} ${
                    2 * Math.PI * 80
                  }`}
                  strokeDashoffset={-2 * Math.PI * 80 * 0.01}
                  transform="rotate(-90 100 100)"
                />
              </svg>

              {/* Center text */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  76%
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                  }}
                >
                  Completed
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
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
          </div>
        </div>
      </div>

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
  );
};

export default SupervisionDashboard;
