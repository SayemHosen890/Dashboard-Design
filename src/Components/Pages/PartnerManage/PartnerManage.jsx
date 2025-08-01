import React from 'react'
import { FaEye, FaCommentDots } from 'react-icons/fa';


const data = [
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  {
    id: '#1233',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    email:'whatever@gmail.com',
    contactNumber: '(201) 555-4445',
    location: 'Aurora, OR 97600',
    walletBalance: '$60.0',
    action: 'Action',
    viewDetails: 'Completed',
    notice: 'notice',
    chat: 'chat'
  },
  // Add more sample rows here...
];

const PartnerManage = () => {
  return (
    <div>
            <div>
                  <div className="p-6 bg-gray-50 h-screen font-sans">
                    <div className="flex items-center justify-between gap-2 mb-4 !p-3">
                      <div className='flex items-center gap-2 mb-4'>
                        <button className="text-xl font-semibold text-gray-700">←</button>
                        <h1 className="text-xl font-semibold text-gray-800">Auction Management</h1>
                      </div>
                      <div>
                        <input type="text" placeholder="Search here..." className="border px-4 py-2 rounded-md w-64" />
                      </div>
                    </div>
            
            
                    <div className="overflow-auto bg-white rounded-lg shadow !ml-4">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 text-gray-700">
                          <tr className='!py-3'>
                            <th className="px-4 py-3 text-left">SL no.</th>
                            <th className="px-4 py-3 text-left">Partner's Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Contact Number</th>
                            <th className="px-4 py-3 text-left">Location</th>
                            <th className="px-4 py-3 text-left">Wallet Balance</th>
                            <th className="px-4 py-3 text-left">Action</th>
                            <th className="px-4 py-3 text-left">View Details</th>
                            <th className="px-4 py-3 text-left">Notice</th>
                            <th className="px-4 py-3 text-left">Chat</th>
                            {/* <th className="px-4 py-3 text-left">View Chart</th> */}
                          </tr>
                        </thead>
                        <tbody style={{padding:20}}>
                          {data.map((item, i) => (
                            <tr key={i} >
                              <td className="!px-4 !py-7">{item.id}</td>
                              {/* <td className="px-4 py-3">{item.date}</td> */}
                              {/* User Info */}
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <img src={item.userImg} alt="user" className="w-8 h-8 rounded-full" />
                                  <span>{item.user}</span>
                                </div>
                              </td>
                              {/* Partner Info */}
                              {/* <td className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                 <img src={item.partnerImg} alt="partner" className="w-8 h-8 rounded-full" />
                                 <span>{item.partner}</span>
                                </div>
                              </td> */}
                              <td className="px-4 py-3">{item.email}</td>
                              <td className="px-4 py-3">{item.contactNumber}</td>
                              <td className="px-4 py-3">{item.location}</td>
                              <td className="px-4 py-3">{item.walletBalance}</td>
                              {/* <td className="px-4 py-3">{item.action}</td> */}
                              <td className="px-4 py-3">
                                <button className="border border-red-400 !px-2 text-black-500 px-3 py-1 rounded-full text-lg transition">
                                  Refund
                                </button>
                              </td>
                              {/* <td className="px-4 py-3">
                                <span className={`border px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}>
                                  {item.status}
                                </span>
                              </td> */}
                              <td className="px-4 !py-5 flex gap-2">
                                <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                                  <FaEye size={30} />
                                </button>
                              </td>
                              <td className="px-4 py-3">
                                <FaEye size={30} />
                              </td>
                              <td className="px-4 py-3">
                                <FaEye size={30} />
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
                </div >
        </div>
      )
    }

export default PartnerManage