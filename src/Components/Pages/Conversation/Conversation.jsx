import React from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa';

const conversations = [
    { name: 'John Smith & Mike Bond', image: '/images/avatar1.png' },
    { name: 'Guy Hawkins & Cooper', image: '/images/avatar2.png' },
    { name: 'Esther Howard & Jenny', image: '/images/avatar3.png' },
    { name: 'Smith & Mike Bond', image: '/images/avatar1.png' },
    { name: 'John & Esther Howard', image: '/images/avatar2.png' },
    { name: 'Jerome Bell & Devon Lane', image: '/images/avatar3.png' },
    { name: 'Mike Bond & Marvin', image: '/images/avatar1.png' },
    { name: 'Eleanor Pena & Theresa', image: '/images/avatar2.png' },
    { name: 'John Smith & Henry', image: '/images/avatar3.png' },
];

const messages = [
    {
        from: 'self',
        text: 'Hi, How are you?',
        time: '11:15 AM',
        image: '/images/avatar1.png',
    },
    {
        from: 'other',
        text: "Hey! ✋ I saw your post about going on a road trip next week. Where are you headed?",
        time: '11:05 AM',
        image: '/images/avatar2.png',
    },
    {
        from: 'self',
        text: "That's going to be epic! Don’t forget to check out Crater Lake. I went there last year, and the views were insane! 😮",
        time: '11:15 AM',
        image: '/images/avatar1.png',
    },
    {
        from: 'other',
        text: "Hey! Yeah, I’m super excited! 😄 We're driving up the coast, starting in San Francisco and ending in Seattle. It’s been on my bucket list forever!",
        time: '11:05 AM',
        image: '/images/avatar2.png',
    },
    {
        from: 'self',
        text: "eah, I did it a couple of years ago. Let me know if you want any other recommendations!",
        time: '11:15 AM',
        image: '/images/avatar1.png',
    },
    {
        from: 'other',
        text: "About a week! We’re planning to stop in a few places along the way, like Portland and some national parks. Hopefully, we’ll get some good hiking in too.",
        time: '11:05 AM',
        image: '/images/avatar2.png',
    },
];

const Conversation = () => {
    return (
        <div>
            <div className="flex flex-col h-screen bg-gray-100 font-sans">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-white">
                    <div className="text-xl font-semibold">Review Conversation</div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="pl-10 pr-4 py-2 border rounded-md"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Conversation List */}
                    <div className="w-1/3 border-r bg-white overflow-y-auto">
                        <ul className="divide-y">
                            {conversations.map((conv, i) => (
                                <li
                                    key={i}
                                    className="p-4 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                                >
                                    <img src={conv.image} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                                    <span className="text-sm font-medium">{conv.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Conversation View */}
                    <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
                        <div className="space-y-6">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex items-start gap-2 ${msg.from === 'self' ? 'justify-start' : 'justify-end'}`}>
                                    {msg.from === 'self' && (
                                        <img
                                            src={msg.image}
                                            alt="avatar"
                                            className="w-8 h-8 rounded-full object-cover mt-1"
                                        />
                                    )}
                                    <div
                                        className={`max-w-[75%] px-4 py-2 rounded-xl text-sm shadow-md whitespace-pre-line ${msg.from === 'self' ? 'bg-white text-gray-800' : 'bg-black text-white'
                                            }`}
                                    >
                                        <p>{msg.text}</p>
                                        <p className="text-xs mt-1 text-gray-400 text-right">{msg.time}</p>
                                    </div>
                                    {msg.from === 'other' && (
                                        <img
                                            src={msg.image}
                                            alt="avatar"
                                            className="w-8 h-8 rounded-full object-cover mt-1"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation