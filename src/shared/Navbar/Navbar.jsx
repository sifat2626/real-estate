import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const categories = [
  "Single-family home",
  "Townhouse",
  "Apartment",
  "Student housing",
  "Vacation rental",
  "Senior living",
];

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isCatOpen, setIsCatOpen] = useState(false);
  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => toast.error(error.message));
  };

  const menuClassName =
    "hover:bg-[#2BAC6E] p-2 rounded-lg font-semibold lg:focus:bg-[#2BAC6E] focus:bg-gray-200 focus:text-white";
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
        <NavLink to={"/listings?type=sale"} className={menuClassName}>
          Buy
        </NavLink>
      </li>
      <li>
        <NavLink to={"/listings?type=rent"} className={menuClassName}>
          Rent
        </NavLink>
      </li>
      <li>
        <NavLink to={"/listings"} className={menuClassName}>
          Listings
        </NavLink>
      </li>
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="font-semibold"
          onClick={() => setIsCatOpen(!isCatOpen)}
        >
          Categories
        </div>
        {categories.length > 0 && isCatOpen && (
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] bg-gray-50 text-cozy-green font-semibold p-2 shadow rounded-box w-52"
          >
            {categories.map((category, i) => (
              <li key={i} className="p-2">
                <NavLink
                  className=""
                  to={`listings?category=${category}`}
                  onClick={() => setIsCatOpen(!isCatOpen)}
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      <li>
        <NavLink to={"/about"} className={menuClassName}>
          About
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/user-profile"} className={menuClassName}>
            User Profile
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-cozy-green text-white py-8 rounded-lg px-4 mt-2">
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
        <Link to={"/"} className="font-bold  text-xl">
          CozyCrest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-4 items-center">{navList}</ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <div className="bg-white text-cozy-green hover:shadow-md hover:bg-gray-200 py-2 px-4 rounded-lg font-semibold">
            <Link to={"/login"}>Login</Link>
          </div>
        )}

        {user && (
          <div className="tooltip" data-tip={`${user.displayName}`}>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full tooltip" data-tip="hello">
                  <button className="">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                      className="object-cover"
                    />
                  </button>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-cozy-green font-semibold"
              >
                <li>
                  <Link to={"/update-profile"} className="justify-between">
                    Update Profile
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
