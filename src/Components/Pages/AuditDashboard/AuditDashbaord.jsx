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
          gridTemplateColumns: ".72fr .72fr 1fr",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        {/* Card 1 - Total Number of Events */}
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            // height: "150px",
            width:"100%",
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
            backgroundColor: "red",
            padding: "10px",
            // height: "150px",
            width:"100%",
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
        {/* card 3 */}

      </div>

      {/* Middle Section */}
      {/* Section Wrapper - Flex Container */}
      <div
        style={{
          display: "flex",
          gap: "24px", // spacing between the two cards
          marginBottom: "32px",
        }}
      >
        {/* Card 3 - 60% Width */}
        <div
          style={{
            width: "60%",
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* Your entire Card 3 content here */}
          {/* Keep your Donut Chart and dropdowns here as-is */}

        </div>

        {/* Middle Section - 40% Width */}
        <div
          style={{
            width: "40%",
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
            {/* Your entire table content remains the same */}
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
