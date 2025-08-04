import React from "react";
import {
  FaArrowLeft,
  FaChevronDown,
  FaDownload,
  FaEye,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const ActivityLogs = () => {
  // Sample data for the activity log
  const activityData = [
    {
      timestamp: "12/06/24 at 2:46 PM (GMT+6)",
      id: "456457947",
      admin: {
        name: "Leslie Alexander",
        email: "devonlane@gmail.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Editing",
      actionDescription: "User profile #123 was updated",
      result: "Success",
    },
    {
      timestamp: "12/06/24 at 2:12 PM (GMT+6)",
      id: "677676597",
      admin: {
        name: "Savannah Nguyen",
        email: "savannah.nguyen@example.com",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Creation",
      actionDescription: "Admin Sofia Ramirez correct...",
      result: "Success",
    },
    {
      timestamp: "12/06/24 at 1:05 PM (GMT+6)",
      id: "675675667",
      admin: {
        name: "Dianne Russell",
        email: "dianne.russell@example.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Deletion",
      actionDescription: "Admin Samuel Roberts reass...",
      result: "Error",
    },
    {
      timestamp: "12/06/24 at 1:05 PM (GMT+6)",
      id: "675675667",
      admin: {
        name: "Dianne Russell",
        email: "dianne.russell@example.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Deletion",
      actionDescription: "Admin Samuel Roberts reass...",
      result: "Success",
    },
    {
      timestamp: "12/06/24 at 1:05 PM (GMT+6)",
      id: "675675667",
      admin: {
        name: "Dianne Russell",
        email: "dianne.russell@example.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Deletion",
      actionDescription: "Admin Samuel Roberts reass...",
      result: "Error",
    },
    {
      timestamp: "12/06/24 at 1:05 PM (GMT+6)",
      id: "675675667",
      admin: {
        name: "Dianne Russell",
        email: "dianne.russell@example.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Deletion",
      actionDescription: "Admin Samuel Roberts reass...",
      result: "Error",
    },
    {
      timestamp: "12/06/24 at 1:05 PM (GMT+6)",
      id: "675675667",
      admin: {
        name: "Dianne Russell",
        email: "dianne.russell@example.com",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      actionType: "Deletion",
      actionDescription: "Admin Samuel Roberts reass...",
      result: "Error",
    },
  ];

  const getResultBadgeStyle = (result) => {
    if (result === "Success") {
      return {
        padding: "6px 16px",
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "600",
        // width: "150px",
        backgroundColor: "#10b981",
        color: "white",
        border: "none",
      };
    } else {
      return {
        padding: "6px 27px",
        borderRadius: "20px",
        // width: "150px",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: "#ef4444",
        color: "white",
        border: "none",
      };
    }
  };
  const navigate = useNavigate ();

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button
                      onClick={() => navigate(-1)}
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#374151",
                        cursor: "pointer",
                      }}
                    >
                      <FaArrowLeft />
                    </button>
                    <h1
                      style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}
                    >
                      Activity Logs
                    </h1>
                  </div>

        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search here..."
            style={{
              padding: "14px 16px 14px 48px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "14px",
              width: "320px",
              backgroundColor: "white",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            }}
          />
          <FaSearch
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              fontSize: "16px",
            }}
          />
        </div>
      </div>

      {/* Filter Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Date Filter */}
          <div style={{ position: "relative" }}>
            <select
              style={{
                padding: "12px 40px 12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                backgroundColor: "white",
                minWidth: "140px",
                appearance: "none",
                fontWeight: "500",
              }}
            >
              <option>12/06/24</option>
            </select>
            <FaChevronDown
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6b7280",
                fontSize: "12px",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Admin Name Filter */}
          <div style={{ position: "relative" }}>
            <select
              style={{
                padding: "12px 40px 12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                backgroundColor: "white",
                minWidth: "160px",
                appearance: "none",
                fontWeight: "500",
              }}
            >
              <option>Devon Lane</option>
            </select>
            <FaChevronDown
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6b7280",
                fontSize: "12px",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Action Type Filter */}
          <div style={{ position: "relative" }}>
            <select
              style={{
                padding: "12px 40px 12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                backgroundColor: "white",
                minWidth: "140px",
                appearance: "none",
                fontWeight: "500",
              }}
            >
              <option>Editing</option>
            </select>
            <FaChevronDown
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6b7280",
                fontSize: "12px",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Result Filter */}
          <div style={{ position: "relative" }}>
            <select
              style={{
                padding: "12px 40px 12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                fontSize: "14px",
                backgroundColor: "white",
                minWidth: "120px",
                appearance: "none",
                fontWeight: "500",
              }}
            >
              <option>Success</option>
            </select>
            <FaChevronDown
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6b7280",
                fontSize: "12px",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Download CSV Button */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            backgroundColor: "#111827",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <FaDownload style={{ fontSize: "16px" }} />
          Download CSV
        </button>
      </div>

      {/* Activity Table */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  backgroundColor: "#f9fafb",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Timestamp
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Admin Name
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Action Type
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Action Description
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Result
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "20px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#6b7280",
                  }}
                >
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {activityData.map((activity, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td
                    style={{
                      padding: "20px 16px",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: "500",
                    }}
                  >
                    {activity.timestamp}
                  </td>
                  <td
                    style={{
                      padding: "20px 16px",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: "500",
                    }}
                  >
                    {activity.id}
                  </td>
                  <td style={{ padding: "20px 16px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <img
                        src={activity.admin.image}
                        alt={activity.admin.name}
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "#111827",
                            marginBottom: "4px",
                          }}
                        >
                          {activity.admin.name}
                        </div>
                        <div style={{ fontSize: "13px", color: "#6b7280" }}>
                          {activity.admin.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "20px 16px",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: "500",
                    }}
                  >
                    {activity.actionType}
                  </td>
                  <td
                    style={{
                      padding: "20px 16px",
                      fontSize: "14px",
                      color: "#374151",
                      fontWeight: "500",
                    }}
                  >
                    {activity.actionDescription}
                  </td>
                  <td style={{ padding: "20px 16px" }}>
                    <span style={getResultBadgeStyle(activity.result)}>
                      {activity.result}
                    </span>
                  </td>
                  <td style={{ padding: "20px 16px", textAlign: "center" }}>
                    <button
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "25%",
                        backgroundColor: "#3b82f6",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <FaEye style={{ fontSize: "20px" }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
    
        <div className="flex justify-evenly items-center !mb-3 !mt-6 text-sm text-gray-600">
          <span>Showing 1-11 out of 1239</span>
          <div className="flex items-center gap-2">
            <button className="px-2">Previous</button>
            <button className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded text-xs">1</button>
            <button className="w-6 h-6 flex items-center justify-center border rounded text-xs">2</button>
            <span>...</span>
            <button className="w-6 h-6 flex items-center justify-center border rounded text-xs">100</button>
            <button className="px-2">Next</button>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
