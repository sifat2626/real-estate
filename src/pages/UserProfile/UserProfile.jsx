import { useContext, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import ProfileNav from "../../shared/ProfileNav/ProfileNav";

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <ProfileNav>
      <PageTitle title={user?.displayName?.split(" ").at(0) || "Profile"} />
      <div className="w-2/3 mx-auto mt-24 text-gray-50 relative">
        {user.photoURL && (
          <div className="absolute -top-16 p-2 border-2 rounded-full bg-cozy-green left-1/2 -translate-x-1/2 ">
            <img
              className="h-20 w-20 rounded-full"
              src={user.photoURL}
              alt=""
            />
          </div>
        )}
        <div
          className={`bg-cozy-green p-8 rounded-xl text-xl flex flex-col gap-2`}
        >
          {user.photoURL && <div className="mt-4"></div>}
          {user.displayName && <h3>Name: {user.displayName}</h3>}
          {user.email && <h3>Email: {user.email}</h3>}
          <h3>WishList Items: 0</h3>
        </div>
      </div>
    </ProfileNav>
  );
}

export default UserProfile;
