import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import phn1 from '../../../assets/phn1.png';
import phn2 from '../../../assets/phn2.png';
import phn3 from '../../../assets/phn3.png';
import phn4 from '../../../assets/phn4.png';
import w4 from '../../../assets/w4.png';
import w2 from '../../../assets/w2.png';
import w3 from '../../../assets/w3.png';
import w1 from '../../../assets/w1.png';
import map1 from '../../../assets/map1.png'
import { FaStar } from "react-icons/fa";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const AuctionDetails = () => {
    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            image: w4,
            title: 'Robert Smith',
            subtitleLeft: 'Rating:',
            subtitleRight: '4.5/5.0',
            description: '$25.00',
        },
        {
            id: 2,
            image: w3,
            title: 'Jerome Bell',
            subtitleLeft: 'Rating:',
            subtitleRight: '4.9/5.0',
            description: '$28.00',
        },
        {
            id: 3,
            image: w2,
            title: 'Jacob Jones',
            subtitleLeft: 'Rating:',
            subtitleRight: '4.6/5.0',
            description: '$30.00',
        },
        {
            id: 4,
            image: w1,
            title: 'Devon Lane',
            subtitleLeft: 'Rating:',
            subtitleRight: '4.7/5.0',
            description: '$35.00',
        },
    ];

    return (
        <div>
            <div
                style={{
                    padding: "24px",
                    backgroundColor: "#f9fafb",
                    // height: "screen",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "24px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button
                            onClick={() => navigate(-1)}
                            style={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#374151",
                                cursor: "pointer",
                            }}
                        >
                            <FaArrowLeft />
                        </button>
                        <h1
                            style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}
                        >
                            Auction Details
                        </h1>
                    </div>
                </div>
                <div className='justify-center items-center !px-100 !mt-10'>
                    <div className='flex justify-between items-center !mb-4'>
                        <div>
                            <h1>User Name:</h1>
                        </div>
                        <div>
                            <h1>Robert Smith</h1>
                        </div>
                    </div>
                    <div><h2>Items Images</h2></div>
                </div>
                <div className="flex justify-center gap-4 items-center !px-100 !mt-4 !mb-4">
                    <img
                        src={phn1}
                        alt="Image 1"
                        className="w-43 h-40 object-cover rounded"
                    />
                    <img
                        src={phn2}
                        alt="Image 2"
                        className="w-43 h-40 object-cover rounded"
                    />
                    <img
                        src={phn3}
                        alt="Image 3"
                        className="w-43 h-40 object-cover rounded"
                    />
                    <img
                        src={phn4}
                        alt="Image 4"
                        className="w-43 h-40 object-cover rounded"
                    />
                </div>
                <div className='justify-center items-center !px-100'>
                    <div className="!mt-5 text-sm">
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>User Name:</h3>
                            </div>
                            <div>
                                <h3>Robert Smith</h3>
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Date:</h3>
                            </div>
                            <div>
                                12/08/24
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Category:</h3>
                            </div>
                            <div>
                                Electronic goods
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Amount:</h3>
                            </div>
                            <div>
                                4 pc
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Measurement:</h3>
                            </div>
                            <div>
                                24 mts
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Weight:</h3>
                            </div>
                            <div>
                                10 kg
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Loading Floor:</h3>
                            </div>
                            <div>
                                2nd Floor
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Unloading Floor:</h3>
                            </div>
                            <div>
                                2nd Floor
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Loading Address:</h3>
                            </div>
                            <div>
                                52 Preston Rd. Inglewood, Maine, 6786
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Unloading Address:</h3>
                            </div>
                            <div>
                                19 Thornridge C. Shiloh, Hawaii, 4567
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Distance:</h3>
                            </div>
                            <div>
                                1.5 km
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Description</h3>
                            </div>
                            <div>
                                The Samsung 32 Y1 Y Series 32-Inch Android TV is Give your eyes pleasure with the 16M Display colors. You can connect anything with the Samsung TV Y series, very useful connections.
                            </div>
                        </div>
                        <div className="flex justify-between gap-90">
                            <div>
                                <h3>Auction Deadline:</h3>
                            </div>
                            <div>
                                12/08/24 at 10 PM
                            </div>
                        </div>
                        <div className="flex justify-between gap-90">
                            <div>
                                <h3>Service Date:</h3>
                            </div>
                            <div>
                                12/08/24 at 4 PM
                            </div>
                        </div>
                        <div className="flex justify-between gap-90">
                            <div>
                                <h3>Status:</h3>
                            </div>
                            <div>
                                In progress
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1>Bid so far</h1>
                        <div className="relative w-full flex items-center justify-center py-10">
                            {/* Left Arrow */}
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10">
                                <button className="bg-white !p-4 shadow rounded-full"><FaChevronLeft className='text-blue-500'/></button>
                            </div>

                            {/* Card Container */}
                            <div className="flex gap-6 overflow-hidden px-10">
                                {cards.map((card) => (
                                    <div
                                        key={card.id}
                                        className="w-64 h-50 bg-gray-100 shadow rounded-xl  flex flex-col items-center justify-center p-4 text-center"
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-14 h-14 rounded-full object-cover mb-4 "
                                        />
                                        <div className="space-y-2">
                                            <p className="text-sm !py-3">{card.title}</p>

                                            {/* Subtitle with inline icon */}
                                            <p className="text-sm text-gray-600 flex items-center justify-center">
                                                {card.subtitleLeft}
                                                <FaStar className="inline mx-2 text-xs" style={{color:'#F2AA00'}}/>
                                                {card.subtitleRight}
                                            </p>

                                            <div className='flex justify-center text-sm !py-2'>
                                                <p>Bid :</p>
                                                <p className=" text-gray-400" style={{color:'blue'}}>{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Arrow */}
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10">
                                <button className="bg-white !p-4 shadow rounded-full"><FaChevronRight className='text-blue-500'/></button>
                            </div>
                        </div>
                    </div>
                    <div className='!mt-5'>
                        <img src={map1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctionDetails