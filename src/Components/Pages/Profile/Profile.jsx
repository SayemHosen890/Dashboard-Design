import React, { useState } from "react";
import { FaArrowLeft, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("changePassword");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveChange = () => {
    // Handle password change logic here
    console.log("Saving password changes:", passwords);
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <FaArrowLeft
            onClick={() => navigate(-1)}
            style={{
              fontSize: "18px",
              color: "black",
              cursor: "pointer",
            }}
          />
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#111827",
              margin: 0,
            }}
          >
            Profile
          </h1>
        </div>

        {/* Profile Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          {/* Profile Picture */}
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
              alt="Profile"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #e5e7eb",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                width: "32px",
                height: "32px",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                border: "2px solid white",
              }}
            >
              {/* <FaCamera style={{ fontSize: "14px", color: "white" }} /> */}
            </div>
          </div>

          {/* User Name */}
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 24px 0",
            }}
          >
            Mr. Admin
          </h2>

          {/* Profile Tabs */}
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginBottom: "32px",
            }}
          >
            <button
              onClick={() => setActiveTab("editProfile")}
              style={{
                background: "none",
                border: "none",
                fontSize: "16px",
                color: activeTab === "editProfile" ? "#3b82f6" : "#6b7280",
                cursor: "pointer",
                padding: "8px 0",
                borderBottom:
                  activeTab === "editProfile"
                    ? "2px solid #3b82f6"
                    : "2px solid transparent",
                fontWeight: activeTab === "editProfile" ? "600" : "400",
              }}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActiveTab("changePassword")}
              style={{
                background: "none",
                border: "none",
                fontSize: "16px",
                color: activeTab === "changePassword" ? "#3b82f6" : "#6b7280",
                cursor: "pointer",
                padding: "8px 0",
                borderBottom:
                  activeTab === "changePassword"
                    ? "2px solid #3b82f6"
                    : "2px solid transparent",
                fontWeight: activeTab === "changePassword" ? "600" : "400",
              }}
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Change Password Form */}
        {activeTab === "changePassword" && (
          <div
            style={{
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Change Password
            </h3>

            {/* Current Password */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Current Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwords.currentPassword}
                  onChange={(e) =>
                    handlePasswordChange("currentPassword", e.target.value)
                  }
                  placeholder="*********"
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b7280",
                  }}
                >
                  {showCurrentPassword ? (
                    <FaEyeSlash style={{ fontSize: "16px" }} />
                  ) : (
                    <FaEye style={{ fontSize: "16px" }} />
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                New Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={passwords.newPassword}
                  onChange={(e) =>
                    handlePasswordChange("newPassword", e.target.value)
                  }
                  placeholder="*********"
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b7280",
                  }}
                >
                  {showNewPassword ? (
                    <FaEyeSlash style={{ fontSize: "16px" }} />
                  ) : (
                    <FaEye style={{ fontSize: "16px" }} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Confirm New Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwords.confirmPassword}
                  onChange={(e) =>
                    handlePasswordChange("confirmPassword", e.target.value)
                  }
                  placeholder="*********"
                  style={{
                    width: "100%",
                    padding: "12px 40px 12px 12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    fontSize: "14px",
                    backgroundColor: "white",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b7280",
                  }}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash style={{ fontSize: "16px" }} />
                  ) : (
                    <FaEye style={{ fontSize: "16px" }} />
                  )}
                </button>
              </div>
            </div>

            {/* Save Change Button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleSaveChange}
                style={{
                  width: "150px",
                  padding: "12px 24px",
                  backgroundColor: "#111827",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1f2937")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#111827")}
              >
                Save Change
              </button>
            </div>
          </div>
        )}

        {/* Edit Profile Section (Form) */}
        {activeTab === "editProfile" && (
          <div
            style={{
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Edit Your Profile
            </h3>

            {/* Name Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  backgroundColor: "white",
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  backgroundColor: "white",
                }}
              />
            </div>
            {/* Email Field */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Contact No
              </label>
              <input
                type="email"
                placeholder="+880 123445566"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  backgroundColor: "white",
                }}
              />
            </div>

            {/* Phone Field */}
            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "8px",
                }}
              >
                Address
              </label>
              <input
                type="text"
                placeholder="79/A Joker Vila, Gotham City"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  fontSize: "14px",
                  backgroundColor: "white",
                }}
              />
            </div>

            {/* Save Change Button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  width: "170px",
                  padding: "10px 10px",
                  backgroundColor: "#111827",
                  color: "white",
                  border: "none",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#1f2937")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#111827")}
              >
                Save Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
