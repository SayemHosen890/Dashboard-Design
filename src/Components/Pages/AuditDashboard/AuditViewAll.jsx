import { FaArrowLeft } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router";

const AuditViewAll = () => {
  const data = [
    {
      sl: "01",
      name: "Leslie Alexander",
      email: "bockely@att.com",
      events: 45,
      img: "https://i.pravatar.cc/40?img=1",
    },
    {
      sl: "02",
      name: "Jacob Jones",
      email: "csilvers@rizon.com",
      events: 38,
      img: "https://i.pravatar.cc/40?img=2",
    },
    {
      sl: "03",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      sl: "04",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      sl: "05",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      sl: "06",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      sl: "07",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      sl: "08",
      name: "Esther Howard",
      email: "csilvers@rizon.com",
      events: 32,
      img: "https://i.pravatar.cc/40?img=3",
    },
  ];
const navigate = useNavigate();

  return (
    <div className="w-full p-4 bg-white rounded-sm shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 !mx-10 !pt-5">
        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate(-1)}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft className="text-[#007BFF]" />
            </button>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Most Events Created By Users
            </h2>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search here..."
            style={{
              border: "1px solid #d1d5db",
              padding: "8px 16px 8px 40px",
              borderRadius: "6px",
              width: "200px",
              outline: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6b7280",
            }}
          >
            <FiSearch className="text-lg" />
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto  !p-10">
        <table className="w-full  ">
          <thead>
            <tr className="!p-10">
              <th className="!px-10 !py-4 text-left text-sm font-semibold text-gray-600">
                SL no.
              </th>
              <th className="!px-10  py-4 text-left text-sm font-semibold text-gray-600">
                User Name
              </th>
              <th className="!px-10 py-4 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="!px-10 py-4 text-left text-sm font-semibold text-gray-600">
                Events Created
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="">
                <td className="!px-10 !py-6 text-sm">{row.sl}</td>
                <td className="!px-10 py-4 flex items-center gap-3 text-sm">
                  <img
                    src={row.img}
                    alt={row.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {row.name}
                </td>
                <td className="!px-10 py-4 text-sm">{row.email}</td>
                <td className="!px-20 py-4 text-sm">{row.events}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditViewAll;
