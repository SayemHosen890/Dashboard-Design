import React from 'react'
// import Card from '@mui/material/Card';
import './Dashboard.css'
// import { LuCircleDollarSign } from "react-icons/lu";
import svg1 from "../../../assets/svg1.svg"
import svg2 from "../../../assets/svg2.svg"
import svg3 from "../../../assets/svg3.svg"
import svg4 from "../../../assets/svg4.svg"
import Charts from './Charts'
import Tabledata from './Tabledata'



const Dashboard = () => {
  return (
    <div className='shadow-md rounded-xl'>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[230px]">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-black">Total Income</h3>
          {/* <LuCircleDollarSign className='h-25 w-20'/> */}
          <img src={svg1} alt="" className='h-25 w-20' />
          <p className="text-3xl font-bold text-black">$8250</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-black">Total Users</h3>
          <img src={svg2} alt="" className='h-25 w-20' />
          <p className="text-3xl font-bold text-black">852,650</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-black">Total Partners</h3>
          <img src={svg3} alt="" className='h-25 w-20' />
          <p className="text-3xl font-bold text-black">$320</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center mb-20">
          <h3 className="text-2xl font-semibold text-black">Total Auctions</h3>
          <img src={svg4} alt="" className='h-25 w-20' />
          <p className="text-3xl font-bold text-black">$320</p>
        </div>
      </div>
      <div className='pt-20'>
        <Charts></Charts>
      </div>
      <div className='pt-20'>
        <Tabledata></Tabledata>
      </div>
    </div>
  )
}

export default Dashboard