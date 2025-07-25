import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

export default function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col sm:flex-row  bg-white shadow-xl p-4 rounded-2xl w-full sm:w-[700px] m-4 border border-gray-200">
      {/* Left: Profile Image or Initials */}
      <div className=" sm:w-1/2 h-12 sm:h-80 flex items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400 rounded-xl">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name}
            className="rounded-full w-24 h-24 object-cover shadow-md"
          />
        ) : (
          <div className="text-3xl font-bold text-white">{initials}</div>
        )}
      </div>

      {/* Right: Details */}
      <div className="sm:ml-6 mt-4 sm:mt-0 flex-1">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <FiEdit2 className="text-gray-500 cursor-pointer hover:text-blue-600" />
        </div>

        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500" />
            {user.email}
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            {user.address}
          </li>
          <li className="flex items-center gap-2">
            <FaPhone className="text-gray-500" />
            {user.phone}
          </li>
          {/* <li className="flex items-center gap-2">
            <FaGlobe className="text-gray-500" />
            <a
              href={user.website.startsWith("http") ? user.website : `https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </li> */}
        </ul>

        {/* Company Info */}
        <div className="mt-4">
          <p className="font-semibold">{user.company.name}</p>
          <p className="text-sm text-gray-500">{user.company.slogan}</p>
        </div>
      </div>
    </div>
  );
}
