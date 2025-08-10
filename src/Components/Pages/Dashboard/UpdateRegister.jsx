import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaEye } from 'react-icons/fa';

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
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "#12333",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(505) 555-0125",
    address: "6bis rue Jean Macé 75011 Paris",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
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

const UpdateRegister = () => {
  const navigate = useNavigate ();
  return (
    <div>
      <div className="bg-white rounded-xl shadow h-screen">
        <div className="flex justify-between items-center mb-4" style={{ padding: 10, marginLeft: 20 }} >
          <div className='flex justify-start items-center gap-3'>
            <div>
              <span
              onClick={() => navigate(-1)}
              className="cursor-pointer text-gray-700 hover:text-blue-600"
            >
              <FaArrowLeft />
            </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold"> Partner Registration / Update Request</h3>
            </div>
          </div>
          
            {/* <button className="text-blue-500 text-sm font-medium" style={{ marginRight: 20 }}>
              View all
            </button> */}
            {/* <h3 href="#" className="text-blue-500 text-sm font-medium"style={{marginRight:20 }}>View all</h3> */}
          

        </div>

        <div className="overflow-x-auto" style={{ marginLeft: 30 }}>
          <table className="w-full text-sm text-left ">
            <thead className="text-gray-500">
              <tr >
                <th className="!py-7">SL no.</th>
                <th className="!py-7">Partner's Name</th>
                <th className="!py-7">Email</th>
                <th className="!py-7">Contact Number</th>
                <th className="!py-7">Address</th>
                <th className="!py-7">Action</th>
                <th className="">Verification</th>
              </tr>
            </thead>
            <tbody className=''>
              {partners.map((partner, idx) => (
                <tr key={idx} className="!py-10 ">
                  <td className="!py-4">{partner.id}</td>
                  <td className="!mt-2 flex items-center gap-2">
                    <img src={partner.image} alt={partner.name} className="w-8 h-8 rounded-full" />
                    {partner.name}
                  </td>
                  <td className="p-2">{partner.email}</td>
                  <td className="p-2">{partner.phone}</td>
                  <td className="p-2">{partner.address}</td>
                  <td className="p-10">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm" style={{ height: 30, width: 30, alignItems: 'center', marginTop: 5 }}>
                      <FaEye className='text-center !ml-2'/>
                    </button>
                  </td>
                  <td className="p-2 flex gap-2">
                    <button className="border border-green-500 text-green-600 px-5 py-2 rounded-full -100 text-sm transition" style={{ height: 30, width: 70 }}>
                      Approve
                    </button>
                    <button className="border border-red-500 text-red-600 px-3 py-2 rounded-full  text-sm transition" style={{ height: 30, width: 70 }}>
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-evenly items-center !mt-6 text-sm text-gray-600">
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
  )
}

export default UpdateRegister