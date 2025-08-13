import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";

import id1 from "../../../assets/id1.png"
import id2 from "../../../assets/id2.png"
import id3 from "../../../assets/id3.png"
import id4 from "../../../assets/id4.png"

const Tabledata = () => {
  const partners = [
    {
      id: "#12333",
      name: "Kathryn Murphy",
      email: "bockely@att.com",
      phone: "(201) 555-0124",
      address: "4 rue Neuve Popincourt 75009 Paris",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: "#12333",
      name: "Devon Lane",
      email: "csilvers@rizon.com",
      phone: "(316) 555-0116",
      address: "36 Boulevard de la Bastille 75011 Paris",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: "#12333",
      name: "Devon Lane",
      email: "qamaho@mail.com",
      phone: "(907) 555-0101",
      address: "15 rue des Couronnes 75020 Paris",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: "#12333",
      name: "Hari Danang",
      email: "xterris@gmail.com",
      phone: "(505) 555-0125",
      address: "6bis rue Jean Macé 75011 Paris",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];

  const conversations = [
    {
      name: "John Smith & Mike Bond",
      image1: "https://randomuser.me/api/portraits/men/11.jpg",
      image2: "https://randomuser.me/api/portraits/men/12.jpg",
      messages: [
        {
          from: "John Smith",
          text: "Hi Mike, have you finished the quarterly report?",
          time: "10:30 AM",
        },
        {
          from: "Mike Bond",
          text: "Almost done! Just need to add the sales figures from last week.",
          time: "10:32 AM",
        },
        {
          from: "John Smith",
          text: "Great! Send it over when you're ready for review.",
          time: "10:35 AM",
        },
        {
          from: "Mike Bond",
          text: "Almost done! Just need to add the sales figures from last week.",
          time: "10:32 AM",
        },
        {
          from: "John Smith",
          text: "Great! Send it over when you're ready for review.",
          time: "10:35 AM",
        },
        {
          from: "Mike Bond",
          text: "Almost done! Just need to add the sales figures from last week.",
          time: "10:32 AM",
        },
        {
          from: "John Smith",
          text: "Great! Send it over when you're ready for review.",
          time: "10:35 AM",
        },
        {
          from: "Mike Bond",
          text: "Almost done! Just need to add the sales figures from last week.",
          time: "10:32 AM",
        },
        {
          from: "John Smith",
          text: "Great! Send it over when you're ready for review.",
          time: "10:35 AM",
        },
        {
          from: "Mike Bond",
          text: "Almost done! Just need to add the sales figures from last week.",
          time: "10:32 AM",
        },
      ],
    },
  ];

  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatContent, setChatContent] = useState("This is editable content");

  const openChatModal = () => setIsChatModalOpen(true);
  const closeChatModal = () => setIsChatModalOpen(false);

  const [activeConversation, setActiveConversation] = useState(0);
  return (
    <div>
      <div
        className="bg-white rounded-xl p-10 shadow h-[260px]"
        style={{ paddingBottom: 15, marginTop: 20 }}
      >
        <div
          className="flex justify-between items-center mb-4"
          style={{ padding: 10, marginLeft: 20 }}
        >
          <h3 className="text-lg font-semibold">
            Partner Registration/Update Request
          </h3>
          <Link to="updateRegister">
            <button
              className="text-blue-500 text-sm font-medium"
              style={{ marginRight: 20 }}
            >
              View all
            </button>
            {/* <h3 href="#" className="text-blue-500 text-sm font-medium"style={{marginRight:20 }}>View all</h3> */}
          </Link>
        </div>

        <div className="overflow-x-auto" style={{ marginLeft: 30 }}>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500">
              <tr>
                <th className="p-2">SL no.</th>
                <th className="p-2">Partner's Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Contact Number</th>
                <th className="p-2">Address</th>
                <th className="p-2">Action</th>
                <th className="!mr-10">Verification</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner, idx) => (
                <tr key={idx} className=" ">
                  <td className="p-2">{partner.id}</td>
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {partner.name}
                  </td>
                  <td className="p-2">{partner.email}</td>
                  <td className="p-2">{partner.phone}</td>
                  <td className="p-2">{partner.address}</td>
                  {/* <td className="p-10">
                                        <button className="bg-blue-600 text-white !ml-2 px-4 py-2 rounded text-sm" style={{height:30,width:30,alignItems:'center',marginTop:4}}>
                                            <FaEye className='text-center !ml-2'/>
                                        </button>
                                    </td> */}
                  <td className="p-10">
                    <button
                      className="bg-blue-600 text-white !ml-2 px-4 py-2 rounded text-sm"
                      style={{
                        height: 30,
                        width: 30,
                        alignItems: "center",
                        marginTop: 4,
                      }}
                      onClick={openChatModal}
                    >
                      <FaEye size={20} className="text-center !ml-1" />
                    </button>
                  </td>
                  <td className=" flex gap-2">
                    <button
                      className="border border-green-500 text-green-600 px-3 py-2 rounded-full  text-sm transition"
                      style={{ height: 30, width: 70 }}
                    >
                      Approve
                    </button>
                    <button
                      className="border border-red-500 text-red-600 px-3 py-2 rounded-full  text-sm transition"
                      style={{ height: 30, width: 70 }}
                    >
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isChatModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "800px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              overflow: "hidden",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                {/* Conversation Overview */}
              </h3>
              <button
                onClick={closeChatModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "black",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                <BsX size={24} className="!ml-40" />
              </button>
            </div>

            <div className="w-full bg-white shadow flex flex-col overflow-hidden">
              <h2 className="text-gray-700 py-3 text-xl font-bold !ml-5 !mb-2 items-center flex justify-center">
                {/* Conversation Overview */}
              </h2>

              {/* <hr className="text-gray-300" /> */}

              <div className="flex-1 overflow-y-auto p-5 !mx-5 !px-4 ">
                <div className="flex justify-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Profile"
                    className="w-15 h-15 rounded-full object-cover"
                  />
                </div>
                <div className="text-center !my-4">
                  <div>Robert Smith</div>
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
        </div>
      )}
    </div>
  );
};

export default Tabledata;
