import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Areacharts = () => {
  const data = [
    {
      name: "Jan",
      uv: 500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 300,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 200,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="flex w-[750px] justify-between !py-5">
        <div>
          <h2 className="font-bold text-xl">Income Overview</h2>
        </div>
        <div className="flex items-center">
          {/* <button className='border flex items-center justify-between gap-2 px-6 py-3 w-20'>
                        <span> 2024</span>
                        <IoIosArrowDown /> */}
          {/* </button> */}
          <div className="flex items-center">
            <select className="border flex items-center justify-between gap-2 px-6 py-3 w-20">
              <option>2024</option>
            </select>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" fill="#1307eeff" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Areacharts;
