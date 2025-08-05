import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router';
// import { Link } from 'react-router'

const TaskComplete = () => {
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
            sl: "#12344",
            task: "Reviewing user payment dispute",
            admin: {
                name: "Esther Howard",
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
    const navigate = useNavigate ();
    return (
        <div>
            {/* Task Completed List */}
            <div
                style={{
                    backgroundColor: "white",
                    padding: "14px",
                    // borderRadius: "8px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    // border: "1px solid #e5e7eb",
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
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button
                            onClick={() => navigate(-1)}
                            style={{
                                fontSize: "20px",
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
                            Task Complete
                        </h1>
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
                            <FiSearch className="text-lg" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", backgroundColor: "white", }}>
                    <thead>
                        <tr style={{}}>
                            <th
                                style={{
                                    textAlign: "left",
                                    padding: "10px 40px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    color: "black",
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
                                    color: "black",
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
                                    color: "black",
                                }}
                            >
                                Assigned Admin
                            </th>
                            <th
                                style={{
                                    textAlign: "left",
                                    padding: "0px 0px",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    color: "black",
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
                                        padding: "25px",
                                        fontSize: "14px",
                                        color: "#374151",
                                        // marginLeft:"10px"
                                    }}
                                >
                                    {task.sl}
                                </td>
                                <td
                                    style={{
                                        padding: "",
                                        fontSize: "14px",
                                        color: "#374151",
                                        // marginLeft:"50px"
                                    }}
                                >
                                    {task.task}
                                </td>
                                <td style={{ padding: "" }}>
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
    )
}

export default TaskComplete