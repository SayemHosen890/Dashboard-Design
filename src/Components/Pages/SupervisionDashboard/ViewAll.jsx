import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
// import { Link } from "react-router";

const ViewAll = () => {
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

     const navigate = useNavigate ();
    return (
        <div>
            <div
                style={{
                    backgroundColor: "white",
                    padding: "24px",
                    // borderRadius: "8px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    // border: "1px solid #e5e7eb",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        // justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                        paddingLeft:'10px'
                    }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#374151",
                            cursor: "pointer",
                            marginRight:"6px"
                        }}
                    >
                        <FaArrowLeft />
                    </button>
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
                </div>
            </div>
            <div style={{ overflowX: "auto", backgroundColor: "white" }}className='!pl-10 '>   
                <table style={{ width: "100%", borderCollapse: "collapse" }} >
                    <thead>
                        <tr style={{ borderBottom: "1px solid #e5e7eb" }} >
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
                            <tr key={index} style={{ borderBottom: "1px solid #f3f4f6" }} >
                                <td
                                    style={{
                                        padding: "33px 0px",
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
    )
}

export default ViewAll