import React from 'react'

const data = [
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
    {
        id: '#1233',
        category: 'Furniture',
        action: 'Action',
    },
]

const Variable = () => {
    return (
        <div>
            <div className="p-6 bg-gray-50 h-screen font-sans">
                <div className="flex items-center justify-between gap-2 mb-4 !p-3">
                    <div className='flex items-center gap-2 mb-4'>
                        <button className="text-2xl font-semibold text-gray-700">←</button>
                        <h1 className="text-xl font-semibold text-gray-800">Variable Management</h1>
                    </div>
                </div>
                <div className="overflow-auto bg-white rounded-lg shadow !ml-4">
                    <table className="!w-full text-sm">
                        <thead className="!w-full text-gray-700 bg-gray-300 !p-5">
                            <tr className='flex justify-evenly'>
                                <th className="px-4 py-3 ">SL no.</th>
                                <th className="px-4 py-3 text-left">Variable</th>
                                <th className="px-4 py-3 text-left">Input</th>
                            </tr>
                        </thead>
                        <tbody style={{ padding: 20 }}>
                            {data.map((item, i) => (
                                <tr key={i} className='flex justify-evenly items-center'>
                                    <td className="px-4 py-4">{item.id}</td>
                                    <td className="px-4 py-3">{item.category}</td>
                                    <td className="px-4 !py-5 flex gap-2">
                                        <div><span>hello</span></div>
                                        <div>
                                            <button className="p-4 border">
                                                <input type="text" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-evenly items-center !mt-9 text-sm text-gray-600">
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

export default Variable