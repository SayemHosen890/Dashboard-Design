import React from 'react'
import { Link } from 'react-router';


const Tabledata = () => {
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
    ];
    return (
        <div>
            <div className="bg-white rounded-xl p-10 shadow h-[260px]" style={{ paddingBottom: 15, marginTop:20}}>
                <div className="flex justify-between items-center mb-4"style={{ padding: 10,marginLeft:20 }} >
                    <h3 className="text-lg font-semibold">Partner Registration/Update Request</h3>
                    <Link to="updateRegister">
                    <button className="text-blue-500 text-sm font-medium"style={{marginRight:20 }}>
                        View all
                    </button>
                    {/* <h3 href="#" className="text-blue-500 text-sm font-medium"style={{marginRight:20 }}>View all</h3> */}
                    </Link>
                    
                </div>

                <div className="overflow-x-auto" style={{marginLeft:30}}>
                    <table className="w-full text-sm text-left">
                        <thead className="text-gray-500">
                            <tr>
                                <th className="p-2">SL no.</th>
                                <th className="p-2">Partner's Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Contact Number</th>
                                <th className="p-2">Address</th>
                                <th className="p-2">Action</th>
                                <th className="p-2">Verification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {partners.map((partner, idx) => (
                                <tr key={idx} className=" ">
                                    <td className="p-2">{partner.id}</td>
                                    <td className="p-2 flex items-center gap-2">
                                        <img src={partner.image} alt={partner.name} className="w-8 h-8 rounded-full" />
                                        {partner.name}
                                    </td>
                                    <td className="p-2">{partner.email}</td>
                                    <td className="p-2">{partner.phone}</td>
                                    <td className="p-2">{partner.address}</td>
                                    <td className="p-10">
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm" style={{height:40,width:40,alignItems:'center',marginTop:5}}>
                                            👁
                                        </button>
                                    </td>
                                    <td className="p-2 flex gap-2">
                                        <button className="border border-green-500 text-green-600 px-5 py-2 rounded-md -100 text-sm transition"style={{height:30,width:70}}>
                                            Approve
                                        </button>
                                        <button className="border border-red-500 text-red-600 px-3 py-2 rounded-md  text-sm transition"style={{height:30,width:70}}>
                                            Decline
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tabledata