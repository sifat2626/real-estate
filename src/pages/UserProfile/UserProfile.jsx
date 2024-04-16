import { useContext } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";
import ProfileNav from "../../shared/ProfileNav/ProfileNav";
import { getWishlist } from "../../utils/localStorage";
// import { WishContext } from "../../providers/WishListProvider";

function UserProfile() {
  const { user } = useContext(AuthContext);
  // const wishId = useContext(WishContext);
  // console.log(wishId);
  const wait = user?.displayName?.length * 100;
  const wishList = getWishlist();

  return (
    <ProfileNav>
      <PageTitle title={user?.displayName?.split(" ").at(0) || "Profile"} />
      <h3 className="text-3xl mt-16 font-mon text-cozy-green font-bold text-center mb-8">{`${
        user?.displayName?.split(" ").at(0) || "user"
      }'s Profile`}</h3>
      <div className="md:w-2/3 mx-auto mt-24 text-gray-50 relative">
        {user.photoURL && (
          <div className="absolute -top-16 p-2 overflow-hidden border-2 rounded-full bg-cozy-green left-1/2 -translate-x-1/2 ">
            <img
              className="h-20 w-20 rounded-full hover:scale-110 duration-300"
              src={user.photoURL}
              alt=""
            />
          </div>
        )}
        <div
          className={`bg-cozy-green p-8 rounded-xl md:text-xl flex flex-col gap-2`}
        >
          {user.photoURL && <div className="mt-4"></div>}
          {user.displayName && (
            <h3>
              Name:{" "}
              {[...user.displayName].map((letter, i) => (
                <span
                  key={i}
                  data-aos-delay={i * 100}
                  data-aos-duration={100}
                  data-aos="fade-right"
                >
                  {letter}
                </span>
              ))}
            </h3>
          )}
          {user.email && (
            <h3>
              Email:{" "}
              {[...user.email].map((letter, i) => (
                <span
                  key={i}
                  data-aos-delay={wait + i * 100}
                  data-aos-duration={100}
                  data-aos="fade-right"
                >
                  {letter}
                </span>
              ))}
            </h3>
          )}
          <h3>WishList Items: {wishList.length}</h3>
        </div>
      </div>
    </ProfileNav>
  );
}

export default UserProfile;
