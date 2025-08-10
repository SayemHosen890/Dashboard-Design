import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white h-screen rounded-lg'>
            <div style={{ display: "flex", alignItems: "center", gap: "12px",marginLeft:"18px",paddingTop:"10px" }}>
                                <FaArrowLeft
                                  onClick={() => navigate(-1)}
                                  style={{
                                    fontSize: "18px",
                                    color: "black",
                                    cursor: "pointer",
                                  }}
                                />
                                <h1
                                  style={{
                                    fontSize: "24px",
                                    fontWeight: "600",
                                    color: "#111827",
                                    margin: 0,
                                  }}
                                >
                                  Contact Us
                                </h1>
                              </div>
            <div style={{ display: "flex", alignItems: "center", gap: "22px", borderColor: 'white', justifyContent:'center',marginTop:'100px' }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderColor: 'white' }}>
                    <h1>Mobile Number :</h1>
                    <input type="button" value="Input Here" className='border rounded-sm w-150 text-start !px-1 text-sm h-10' />
                    {/* <input type="button" value="Input Here" className='text-black w-90'/> */}
                </div>
                <div>
                    <div>
                        <button
                            style={{
                                width: "120px",
                                padding: "8px 8px",
                                backgroundColor: "#111827",
                                color: "white",
                                border: "none",
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: "100px",
                                fontSize: "16px",
                                fontWeight: "500",
                                cursor: "pointer",
                                transition: "background-color 0.2s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#1f2937")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#111827")}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact