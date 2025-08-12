import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import phn1 from '../../../assets/phn1.png';
import phn2 from '../../../assets/phn2.png';
import phn3 from '../../../assets/phn3.png';
import phn4 from '../../../assets/phn4.png';



const TransactionDetails = () => {
    const navigate = useNavigate();

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
                                fontSize: "18px",
                                fontWeight: "600",
                                color: "#374151",
                                cursor: "pointer",
                            }}
                        >
                            <FaArrowLeft />
                        </button>
                        <h1
                            style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}
                        >
                            Details
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
                        <div className="relative w-full flex items-left justify-start !py-3">
                            <div className="flex gap-6">
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
                            </div>
                        </div>
                    </div>
                    <div className="!mt-5 text-sm">
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Penalty:(%)</h3>
                            </div>
                            <div>
                                <h3>20%</h3>
                            </div>
                        </div>
                        <div className="flex justify-between gap-90 !py-2">
                            <div>
                                <h3>Reason of Penalty:</h3>
                            </div>
                            <div>
                                Products was broken
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TransactionDetails