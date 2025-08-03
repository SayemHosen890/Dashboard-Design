import React from 'react'
// import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
// import { FaArrowLeft } from "react-icons/fa6";

const conversations = [
  { name: 'John Smith & Mike Bond', image1: 'https://randomuser.me/api/portraits/men/11.jpg', image2: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { name: 'Guy Hawkins & Cooper', image1: 'https://randomuser.me/api/portraits/men/21.jpg', image2: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Esther Howard & Jenny', image1: 'https://randomuser.me/api/portraits/women/31.jpg', image2: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { name: 'Smith & Mike Bond', image1: 'https://randomuser.me/api/portraits/men/41.jpg', image2: 'https://randomuser.me/api/portraits/men/42.jpg' },
  { name: 'John & Esther Howard', image1: 'https://randomuser.me/api/portraits/women/51.jpg', image2: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Jerome Bell & Devon Lane', image1: 'https://randomuser.me/api/portraits/men/61.jpg', image2: 'https://randomuser.me/api/portraits/men/62.jpg' },
  { name: 'Mike Bond & Marvin', image1: 'https://randomuser.me/api/portraits/men/71.jpg', image2: 'https://randomuser.me/api/portraits/men/72.jpg' },
  { name: 'Eleanor Pena & Theresa', image1: 'https://randomuser.me/api/portraits/women/81.jpg', image2: 'https://randomuser.me/api/portraits/women/82.jpg' },
  { name: 'John Smith & Henry', image1: 'https://randomuser.me/api/portraits/men/91.jpg', image2: 'https://randomuser.me/api/portraits/men/92.jpg' },
];

const messages = [
  {
    from: 'self',
    text: 'Hi, How are you?',
    time: '11:15 AM',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    from: 'other',
    text: "Hey! ✋ I saw your post about going on a road trip next week. Where are you headed?",
    time: '11:05 AM',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
  },
  {
    from: 'self',
    text: "That's going to be epic! Don’t forget to check out Crater Lake. I went there last year, and the views were insane! 😮",
    time: '11:15 AM',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    from: 'other',
    text: "Hey! Yeah, I’m super excited! 😄 We're driving up the coast, starting in San Francisco and ending in Seattle. It’s been on my bucket list forever!",
    time: '11:05 AM',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
  },
  {
    from: 'self',
    text: "Yeah, I did it a couple of years ago. Let me know if you want any other recommendations!",
    time: '11:15 AM',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    from: 'other',
    text: "About a week! We’re planning to stop in a few places along the way, like Portland and some national parks. Hopefully, we’ll get some good hiking in too.",
    time: '11:05 AM',
    image: 'https://randomuser.me/api/portraits/women/31.jpg',
  },
];


const conversation = [
  {
    name: 'Alice & Bob',
    image1: 'https://randomuser.me/api/portraits/women/44.jpg',
    image2: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

const Conversation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
            backgroundColor:"white"
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
              Auction Management
            </h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search here..."
              style={{
                border: "1px solid #d1d5db",
                padding: "8px 16px",
                borderRadius: "6px",
                width: "256px",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex h-screen p-5 gap-5 bg-white">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            backgroundColor: "#f9fafb",
            borderBottom: "1px solid #e5e7eb",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
        </div>

        {/* Left Sidebar */}
        <div className="w-1/3 bg-white rounded-xl shadow overflow-y-auto scrollbar-hide">
          <ul className="space-y-2 ml-4">
            <span className="!ml-5 text-gray-700 !py-5 text-xl font-bold">Conversation Between</span>
            <hr className="border border-gray-400 mx-4 mb-2" />

            {conversations.map((conv, i) => (
              <div key={i}>
                <li className="cursor-pointer flex items-center !px-5 !py-5 gap-4 rounded-lg">
                  <div className="flex -space-x-2">
                    <img
                      src={conv.image1}
                      alt="avatar1"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                    <img
                      src={conv.image2}
                      alt="avatar2"
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <span className="text-base font-medium ml-2">{conv.name}</span>
                </li>
                <hr className="border-t border-gray-300 mx-4" />
              </div>
            ))}
          </ul>
        </div>

        {/* Right Chat Conversation */}
        <div className="w-3/4 bg-white rounded-xl shadow p-6 flex flex-col justify-between overflow-y-auto scrollbar-hide">
          <div>
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-5">Conversation Overview</h2> */}
            <span className="!ml-5 text-gray-700 !py-5 text-xl font-bold">Conversation Overview</span>
            <hr className="border border-gray-400 mx-4 mb-2" />
            <div className="space-y-6">
              {/* Message 1 - Alice */}
              <div className="flex items-start gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg max-w-md text-gray-800">
                    Hey Bob, have you finished reviewing the presentation slides? The meeting is just
                    around the corner, and I want to make sure we’re aligned.
                  </p>
                  <span className="text-xs text-gray-500">9:00 AM</span>
                </div>
              </div>

              {/* Message 2 - Bob */}
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <p className="bg-black text-white px-4 py-2 rounded-lg max-w-md">
                    Hey Alice, yes I’ve gone through them and made a few minor tweaks. I’ll send them
                    to you by noon so you can take a final look before the call.
                  </p>
                  <span className="text-xs text-gray-500">9:05 AM</span>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </div>

              {/* Message 3 - Alice */}
              <div className="flex items-start gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg max-w-md text-gray-800">
                    Perfect. Let me know if you want me to add anything extra. I’m planning to
                    emphasize our quarterly achievements and upcoming initiatives.
                  </p>
                  <span className="text-xs text-gray-500">9:07 AM</span>
                </div>
              </div>

              {/* Message 4 - Bob */}
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <p className="bg-black text-white px-4 py-2 rounded-lg max-w-md">
                    That sounds good! Just make sure to include the client feedback highlights too.
                    Those were a big win last month.
                  </p>
                  <span className="text-xs text-gray-500">9:10 AM</span>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </div>

              {/* Message 5 - Alice */}
              <div className="flex items-start gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg max-w-md text-gray-800">
                    Absolutely! I’ll slot that in under the “Client Success” section. Thanks for the
                    reminder.
                  </p>
                  <span className="text-xs text-gray-500">9:12 AM</span>
                </div>
              </div>

              {/* Message 6 - Bob */}
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <p className="bg-black text-white px-4 py-2 rounded-lg max-w-md">
                    You're welcome! Looking forward to seeing the final version. Ping me if you need
                    help later.
                  </p>
                  <span className="text-xs text-gray-500">9:15 AM</span>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </div>

              {/* Message 7 - Alice */}
              <div className="flex items-start gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg max-w-md text-gray-800">
                    Will do! I’m also double-checking the sales forecast numbers, just to be accurate.
                  </p>
                  <span className="text-xs text-gray-500">9:18 AM</span>
                </div>
              </div>

              {/* Message 8 - Bob */}
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <p className="bg-black text-white px-4 py-2 rounded-lg max-w-md">
                    Great call. Let’s aim to wrap up all edits by 10:30, so we have buffer time.
                  </p>
                  <span className="text-xs text-gray-500">9:19 AM</span>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </div>

              {/* Message 3 - Alice */}
              <div className="flex items-start gap-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="bg-gray-200 px-4 py-2 rounded-lg max-w-md text-gray-800">
                    Let me know if you want me to add anything extra. I’m planning to
                    emphasize our quarterly.
                  </p>
                  <span className="text-xs text-gray-500">9:07 AM</span>
                </div>
              </div>

              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <p className="bg-black text-white px-4 py-2 rounded-lg max-w-md">
                    That sounds good! Just make sur. to include the client feedback
                  </p>
                  <span className="text-xs text-gray-500">9:10 AM</span>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conversation