import React from 'react'
import { FaEye, FaCommentDots } from 'react-icons/fa';

const data = [
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  {
    id: '#1233',
    date: '12/06/24',
    user: 'John Smith',
    userImg: 'https://randomuser.me/api/portraits/men/1.jpg',
    partner: 'Hari Danang',
    partnerImg: 'https://randomuser.me/api/portraits/men/11.jpg',
    itemType: 'Goods',
    category: 'Furniture',
    bid: '$24.00',
    action: 'Action',
    status: 'Completed',
    viewChart: 'View Chart'
  },
  // Add more sample rows here...
];

const statusColor = {
  'Completed': 'text-black-600 border-gray-600 !px-3 !py-2 text-lg bg-green-50',
  'Assigned': 'text-blue-600 border-blue-600 bg-blue-50',
  'In-progress': 'text-yellow-600 border-yellow-600 bg-yellow-50',
  'Claimed': 'text-red-600 border-red-600 bg-red-50'
};


const Auction = () => {
  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen font-sans">
        <div className="flex items-center justify-between gap-2 mb-4 !p-3">
          <div className='flex items-center gap-2 mb-4'>
            <button className="text-xl font-semibold text-gray-700">←</button>
            <h1 className="text-xl font-semibold text-gray-800">Auction Management</h1>
          </div>
          <div>
            <input type="text" placeholder="Search here..." className="border px-4 py-2 rounded-md w-64" />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 !p-3">
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">All</button>
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">Move</button>
            <button className="px-6 py-2 bg-black text-white w-20 rounded-full">Sell</button>
          </div>
          <div className="flex gap-4">
            <select className="border px-4 py-2 rounded-md w-48 text-gray-600">
              <option>Item Types</option>
            </select>
            <select className="border px-4 py-2 rounded-md w-48 text-gray-600">
              <option>Categories</option>
            </select>
            <select className="border px-4 py-2 rounded-md w-48 text-gray-600">
              <option>Statuses</option>
            </select>
          </div>
        </div>

        <div className="overflow-auto bg-white rounded-lg shadow !ml-4">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">SL no.</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">User</th>
                <th className="px-4 py-3 text-left">Assigned Partner</th>
                <th className="px-4 py-3 text-left">Item Type</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Win Bid</th>
                <th className="px-4 py-3 text-left">Action</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">View Chart</th>
              </tr>
            </thead>
            <tbody className='!p-50' style={{padding:20}}>
              {data.map((item, i) => (
                <tr key={i} >
                  <td className="!px-4 !py-7">{item.id}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  {/* User Info */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <img src={item.userImg} alt="user" className="w-8 h-8 rounded-full" />
                      <span>{item.user}</span>
                    </div>
                  </td>
                  {/* Partner Info */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                     <img src={item.partnerImg} alt="partner" className="w-8 h-8 rounded-full" />
                     <span>{item.partner}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{item.itemType}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.bid}</td>
                  {/* <td className="px-4 py-3">{item.action}</td> */}
                  <td className="px-4 py-3">
                    <button className="border border-red-400 !px-2 text-black-500 px-3 py-1 rounded-full text-lg transition">
                      Refund
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`border px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 !py-5 flex gap-2">
                    <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                      <FaEye size={30} />
                    </button>
                    <button className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
                      <FaCommentDots size={30} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-evenly items-center mt-6 text-sm text-gray-600">
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
  )
}

export default Auction