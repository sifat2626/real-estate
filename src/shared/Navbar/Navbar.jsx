import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const menuClassName =
    "hover:bg-[#2BAC6E] p-2 rounded-lg font-semibold lg:focus:bg-[#2BAC6E] focus:bg-gray-200 focus:text-gray-200";
  const navList = (
    <>
      <li>
        <label className="lg:flex items-center gap-2 relative hidden">
          <input
            type="text"
            className="grow rounded-lg px-4 py-2 text-gray-700 fony-semibold outline-cozy-green"
            placeholder="Search"
          />
          <IoSearch className="absolute text-green-600 right-4" />
        </label>
      </li>
      <li className="">
        <NavLink to={"/"} className={menuClassName}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={"/buy"} className={menuClassName}>
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink to={"/rent"} className={menuClassName}>
          Rent
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className={menuClassName}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className={menuClassName}>
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-cozy-green custom-container text-white py-8 rounded-lg px-4 my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-2xl bg-cozy-green text-white lg:hidden p-2 mr-4 lg:mr-0"
          >
            <FiMenu className="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content flex flex-col gap-y-4 mt-3 z-[1] p-2 shadow rounded-box w-52 bg-cozy-green"
          >
            {navList}
          </ul>
        </div>
        <a className="font-bold  text-xl">CozyCrest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-4 items-center">{navList}</ul>
      </div>
      <div className="navbar-end">
        <button className="bg-white text-cozy-green hover:shadow-md hover:bg-gray-200 py-2 px-4 rounded-lg font-semibold">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
