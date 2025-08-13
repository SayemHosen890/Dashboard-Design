import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-screen rounded-md shadow-sm !p-10">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "15px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#374151",
            cursor: "pointer",
          }}
        >
          <FaArrowLeft className="text-[#007BFF]" />
        </button>
        <h1 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>
          Notification
        </h1>
      </div>
      <div>
        <h2>Total 128 Notifications</h2>
      </div>
      <div className="!px-16 !mt-6">
        <div className="flex justify-between items-center !py-3">
          <div>
            <h3>
              The account for Robert Smith has been successfully activated.
            </h3>
          </div>
          <div>Just Now</div>
        </div>
        <div className="flex justify-between items-center !py-3 bg-gray-200 rounded-sm">
          <div>
            <h3>
              A new conversation between Jane Cooper and Robert Fox requires
              your review.
            </h3>
          </div>
          <div>5 min ago</div>
        </div>
        <div className="flex justify-between items-center !py-3">
          <div>
            <h3>The surcharge factor has been successfully updated to 1.2</h3>
          </div>
          <div>30 min ago</div>
        </div>
        <div className="flex justify-between items-center !py-3 bg-gray-200 rounded-sm">
          <div>
            <h3>
              The coverage radius has been successfully changed to 100 km.
            </h3>
          </div>
          <div>6 hours ago</div>
        </div>
        <div className="flex justify-between items-center !py-3">
          <div>
            <h3>
              A payment of $500 has been processed to John Cooper's wallet.
            </h3>
          </div>
          <div>8 hours ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
