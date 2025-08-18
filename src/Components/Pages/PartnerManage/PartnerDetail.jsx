import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";

import id1 from "../../../assets/id1.png";
import id2 from "../../../assets/id2.png";
import id3 from "../../../assets/id3.png";
import id4 from "../../../assets/id4.png";

const PartnerDetail = () => {
  const [activeTab, setActiveTab] = useState("editProfile");
  // const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  // const [showNewPassword, setShowNewPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  // const handleSaveChange = () => {
  //   // Handle password change logic here
  //   console.log("Saving password changes:", passwords);
  // };
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
              //   color: "black",
              cursor: "pointer",
            }}
            className="text-[#007BFF]"
          />
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#111827",
              margin: 0,
            }}
          >
            Partner Details
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
          {/* Profile Picture - Only show camera icon in Edit Profile tab */}
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
            {activeTab === "editProfile" && (
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  width: "32px",
                  height: "32px",
                  //   backgroundColor: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  //   border: "2px solid white",
                }}
              >
                {/* <FaCamera style={{ fontSize: "14px", color: "white" }} /> */}
              </div>
            )}
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
            Robert Smith
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
              Basic Info
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
              Bank Info
            </button>
          </div>
        </div>

        {/* Change Password Form */}
        {activeTab === "changePassword" && (
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            <div className="">
              {/* Profile Picture */}

              <div className="!px-5 !mt-5">
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Phone Number:</h3>
                  </div>
                  <div>+3489 9999 9778</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Location:</h3>
                  </div>
                  <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Wallet Balance:</h3>
                  </div>
                  <div>$354</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Bank Info</h3>
                  </div>
                  {/* <div>
                                  +3489 9999 9778
                                </div> */}
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Account Holder Name:</h3>
                  </div>
                  <div>Dianne Russell</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Account Holder Type:</h3>
                  </div>
                  <div>Personal</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Account Number:</h3>
                  </div>
                  <div>6575675678676</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Routing Number:</h3>
                  </div>
                  <div>5474574575467</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Phone Number:</h3>
                  </div>
                  <div>(201) 555-0124</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Date of Birth:</h3>
                  </div>
                  <div>23/06/99</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Business Name:</h3>
                  </div>
                  <div>Governance structures,</div>
                </div>
                <div className="flex justify-between gap-90 !py-2">
                  <div>
                    <h3>Website:</h3>
                  </div>
                  <div>https://www.vip.com/</div>
                </div>
                <div className="flex justify-between gap-90">
                  <div>
                    <h3>City:</h3>
                  </div>
                  <div>San Juan</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Profile Section (Form) */}
        {activeTab === "editProfile" && (
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {/* Save Change Button */}
            <div className="w-full bg-white flex flex-col overflow-hidden">
              <h2 className="text-gray-700 py-3 text-xl font-bold !ml-5 !mb-2 items-center flex justify-center">
                {/* Conversation Overview */}
              </h2>

              {/* <hr className="text-gray-300" /> */}

              <div className="flex-1 overflow-y-auto p-5 !mx-5 !px-3">
                <div className="flex justify-between">
                  <div>Email</div>
                  <div>robertsmith34@gmail.com</div>
                </div>
              </div>
              <div className="flex justify-between gap-90 !px-8 !py-2">
                <div>
                  <h3>Phone Number:</h3>
                </div>
                <div>+3489 9999 9778</div>
              </div>
              <div className="flex justify-between gap-90 !px-8 !py-2">
                <div>
                  <h3>Location:</h3>
                </div>
                <div>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
              </div>
              <div className="!px-8">
                <h3>Vehicals :</h3>
              </div>
              <div>
                <div className="relative w-full flex items-left justify-start !px-8 !py-3">
                  <div className="flex gap-6">
                    <img
                      src={car1}
                      alt="Image 1"
                      className="w-43 h-40 object-cover rounded"
                    />
                    <img
                      src={car2}
                      alt="Image 2"
                      className="w-43 h-40 object-cover rounded"
                    />
                    <img
                      src={car3}
                      alt="Image 3"
                      className="w-43 h-40 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start gap-10 !px-8 !mb-4">
                  <div>
                    <div className="!py-3">
                      <h1>Vehicle license plate:</h1>
                    </div>
                    <div>
                      <img
                        src={id1}
                        alt="Image 3"
                        className="w-50 h-40 object-cover rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!py-3">
                      <h1>Driving License:</h1>
                    </div>
                    <div>
                      <img
                        src={id2}
                        alt="Image 3"
                        className="w-50 h-40 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-10 !px-8 !mb-6">
                  <div>
                    <div className="!py-3">
                      <h1>Vehicle license plate:</h1>
                    </div>
                    <div>
                      <img
                        src={id3}
                        alt="Image 3"
                        className="w-50 h-40 object-cover rounded"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!py-3">
                      <h1>Driving License:</h1>
                    </div>
                    <div>
                      <img
                        src={id4}
                        alt="Image 3"
                        className="w-50 h-40 object-cover rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerDetail;
