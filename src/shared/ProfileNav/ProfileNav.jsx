/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ProfileNav({ children }) {
  const [isSideOpen, setIsSideOpen] = useState(true);
  const linkClass =
    "block border border-cozy-green bg-gray-50 duration-300 text-cozy-green text-sm pl-2 md:pl-8 py-2 rounded-lg mx-2 hover:bg-gray-200";
  return (
    <div className="grid grid-cols-12 gap-4">
      <div
        className={`${
          isSideOpen ? "w-72" : "w-4"
        } col-span-4 md:col-span-3 min-h-screen bg-cozy-green/80 mt-4 rounded-3xl relative duration-300 z-50`}
      >
        <div
          className={`absolute bg-gray-50 text-xl duration-300 cursor-pointer p-2 rounded-full border-2 border-cozy-green top-8 right-0 translate-x-5 ${
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
            <li className="">
              <NavLink className={linkClass} to={"/user-profile"}>
                Profile
              </NavLink>
            </li>
            <li className="">
              <NavLink className={linkClass} to={"/update-profile"}>
                Update Profile
              </NavLink>
            </li>
            <li className="">
              <NavLink className={linkClass} to={"/wishlist"}>
                WishList
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-8 md:col-span-9">{children}</div>
    </div>
  );
}

export default ProfileNav;
