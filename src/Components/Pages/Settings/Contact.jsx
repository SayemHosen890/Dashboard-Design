import React from 'react'

const Contact = () => {
    return (
        <div className='bg-white h-screen rounded-lg'>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", borderColor: 'white' }}>
                <button
                    style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        padding: '10px',
                        color: "#374151",
                        cursor: "pointer",
                    }}
                >
                    ←
                </button>
                <h1
                    style={{ fontSize: "24px", fontWeight: "600", color: "#1f2937" }}
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