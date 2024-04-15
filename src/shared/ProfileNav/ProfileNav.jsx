/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ProfileNav({ children }) {
  const [isSideOpen, setIsSideOpen] = useState(true);
  return (
    <div className="grid grid-cols-12">
      <div
        className={`${
          isSideOpen ? "w-72" : "w-4"
        } col-span-3 min-h-screen bg-cozy-green mt-4 rounded-3xl relative duration-300 w-full`}
      >
        <div
          className={`absolute bg-gray-50 text-2xl duration-300 cursor-pointer p-2 rounded-full border-2 border-cozy-green top-8 right-0 translate-x-6 ${
            isSideOpen ? "" : "rotate-[180deg] "
          }`}
          onClick={() => setIsSideOpen(!isSideOpen)}
        >
          <FaArrowLeft />
        </div>
        <div className="text-gray-50 pt-24  font-semibold">
          <ul
            className={` duration-300 ${
              isSideOpen ? "scale-1" : "scale-0"
            } flex flex-col gap-4`}
          >
            <li className="border pl-8 py-2 rounded-lg mx-2 hover:bg-white/10">
              <NavLink to={"/user-profile"}>Profile</NavLink>
            </li>
            <li className="border pl-8 py-2 rounded-lg mx-2 hover:bg-white/10">
              <NavLink to={"/update-profile"}>Update Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}

export default ProfileNav;
