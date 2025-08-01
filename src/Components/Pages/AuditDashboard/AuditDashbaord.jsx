import React from "react";
import { FaChevronDown } from "react-icons/fa";

const AuditDashboard = () => {
  // Sample data for the dashboard
  const eventsData = [
    {
      sl: "01",
      user: {
        name: "Leslie Alexander",
        email: "bockely@att.com",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      },
      eventsCreated: "45",
    },
    {
      sl: "02",
      user: {
        name: "Jacob Jones",
        email: "csilvers@rizon.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      eventsCreated: "38",
    },
    {
      sl: "03",
      user: {
        name: "Esther Howard",
        email: "esther.howard@example.com",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      eventsCreated: "32",
    },
  ];

  const adminsData = [
    {
      sl: "#12333",
      admin: {
        name: "Jacob Jones",
        email: "bockely@att.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      ticketsAttended: "50",
      complainsAttended: "54",
      totalTaskCompleted: "245",
    },
    {
      sl: "#12333",
      admin: {
        name: "Darlene Robertson",
        email: "csilvers@rizon.com",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      },
      ticketsAttended: "45",
      complainsAttended: "34",
      totalTaskCompleted: "214",
    },
    {
      sl: "#12333",
      admin: {
        name: "Brooklyn Simmons",
        email: "brooklyn.simmons@example.com",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      ticketsAttended: "42",
      complainsAttended: "32",
      totalTaskCompleted: "187",
    },
    {
      sl: "#12333",
      admin: {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      },
      ticketsAttended: "34",
      complainsAttended: "21",
      totalTaskCompleted: "154",
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Top Section - Summary Statistics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {/* Card 1 - Total Number of Events */}
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
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "8px",
            }}
          >
            Total Number of Events
          </div>
          <div
            style={{ fontSize: "32px", fontWeight: "700", color: "#111827" }}
          >
            82
          </div>
        </div>

        {/* Card 2 - Most Common Event Type */}
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
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "8px",
            }}
          >
            Most Common Event Type
          </div>
          <div
            style={{ fontSize: "32px", fontWeight: "700", color: "#111827" }}
          >
            Goods
          </div>
        </div>

        {/* Card 3 - Events Creation Rate Chart */}
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
            style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}
          >
            Events Creation Rate:
          </div>

          {/* Dropdowns */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
            <div style={{ position: "relative" }}>
              <select
                style={{
                  padding: "8px 32px 8px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  fontSize: "12px",
                  backgroundColor: "white",
                  minWidth: "100px",
                  appearance: "none",
                }}
              >
                <option>September</option>
              </select>
              <FaChevronDown
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6b7280",
                  fontSize: "10px",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <select
                style={{
                  padding: "8px 32px 8px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  fontSize: "12px",
                  backgroundColor: "white",
                  minWidth: "80px",
                  appearance: "none",
                }}
              >
                <option>2024</option>
              </select>
              <FaChevronDown
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6b7280",
                  fontSize: "10px",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Donut Chart */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{ position: "relative", width: "120px", height: "120px" }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                {/* Goods (blue) - largest segment */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.45} ${
                    2 * Math.PI * 50
                  }`}
                  strokeDashoffset={-2 * Math.PI * 50 * 0.275}
                  transform="rotate(-90 60 60)"
                />
                {/* Waste (red) */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.3} ${
                    2 * Math.PI * 50
                  }`}
                  strokeDashoffset={-2 * Math.PI * 50 * 0.725}
                  transform="rotate(-90 60 60)"
                />
                {/* Recyclable materials (orange) */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.2} ${
                    2 * Math.PI * 50
                  }`}
                  strokeDashoffset={-2 * Math.PI * 50 * 0.025}
                  transform="rotate(-90 60 60)"
                />
                {/* Second-hand items (green) - smallest segment */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 50 * 0.05} ${
                    2 * Math.PI * 50
                  }`}
                  strokeDashoffset={-2 * Math.PI * 50 * 0.225}
                  transform="rotate(-90 60 60)"
                />
              </svg>
            </div>
          </div>

          {/* Legend */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "1px",
                }}
              ></div>
              <span style={{ fontSize: "11px", color: "#374151" }}>Goods</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#ef4444",
                  borderRadius: "1px",
                }}
              ></div>
              <span style={{ fontSize: "11px", color: "#374151" }}>Waste</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#f59e0b",
                  borderRadius: "1px",
                }}
              ></div>
              <span style={{ fontSize: "11px", color: "#374151" }}>
                Recyclable materials
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#10b981",
                  borderRadius: "1px",
                }}
              ></div>
              <span style={{ fontSize: "11px", color: "#374151" }}>
                Second-hand items
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div
        style={{
          marginBottom: "32px",
        }}
      >
        {/* Most Events Created By Users Table */}
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
              Most Events Created By Users
            </h3>
            <a
              href="#"
              style={{
                fontSize: "14px",
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              View all
            </a>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
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
                      padding: "12px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    User Name
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "12px 0",
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
                      padding: "12px 0",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#6b7280",
                    }}
                  >
                    Events Created
                  </th>
                </tr>
              </thead>
              <tbody>
                {eventsData.map((event, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {event.sl}
                    </td>
                    <td style={{ padding: "12px 0" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <img
                          src={event.user.image}
                          alt={event.user.name}
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <span style={{ fontSize: "14px", color: "#374151" }}>
                          {event.user.name}
                        </span>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {event.user.email}
                    </td>
                    <td
                      style={{
                        padding: "12px 0",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {event.eventsCreated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Section - Most Tasks Completed By Admins */}
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
            Most Tasks Completed By Admins
          </h3>
          <a
            href="#"
            style={{
              fontSize: "14px",
              color: "#3b82f6",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            View all
          </a>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 0",
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
                    padding: "12px 0",
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
                    padding: "12px 0",
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
                    padding: "12px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Tickets Attended
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Complains Attended
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 0",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Total Task Completed
                </th>
              </tr>
            </thead>
            <tbody>
              {adminsData.map((admin, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td
                    style={{
                      padding: "12px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {admin.sl}
                  </td>
                  <td style={{ padding: "12px 0" }}>
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
                          width: "36px",
                          height: "36px",
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
                      padding: "12px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {admin.admin.email}
                  </td>
                  <td
                    style={{
                      padding: "12px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {admin.ticketsAttended}
                  </td>
                  <td
                    style={{
                      padding: "12px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {admin.complainsAttended}
                  </td>
                  <td
                    style={{
                      padding: "12px 0",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {admin.totalTaskCompleted}
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

export default AuditDashboard;
