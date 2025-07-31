import React from 'react'
import Areacharts from './Areacharts'
import { Barchart } from './Barchart'


const Charts = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]" style={{ marginTop:"20px"}}>
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center" style={{padding:"20px"}}>
                <Areacharts></Areacharts>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center"style={{padding:"20px"}}>
                <Barchart></Barchart>
            </div>
        </div>
    )
}

export default Charts