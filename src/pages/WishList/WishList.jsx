import { Link, useLoaderData } from "react-router-dom";
import ProfileNav from "../../shared/ProfileNav/ProfileNav";
import { getWishlist } from "../../utils/localStorage";
import PageTitle from "../../components/PageTitle/PageTitle";
import { FaArrowRight } from "react-icons/fa";

function WishList() {
  const wishIds = getWishlist();
  const data = useLoaderData();
  const wishList = data.filter((wish) => wishIds.includes(wish.id));
  return (
    <ProfileNav>
      <div className="mt-12 ml-8">
        <PageTitle title={"Wishlist"} />
        <h3 className="text-3xl font-mon text-cozy-green font-bold text-center mb-8">
          Wishlist
        </h3>
        {wishList.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-2">
            {wishList.map((item, i) => (
              <div
                className="border-2 border-cozy-green rounded-3xl p-4"
                key={i}
              >
                <img
                  src={item.image}
                  alt=""
                  className="rounded-3xl h-56 w-full"
                />
                <h3 className="text-lg font-mon  mt-2 font-bold">
                  {item.estate_title}
                </h3>
                <Link
                  to={`/details/${item.id}`}
                  className="flex gap-2 items-center hover:bg-green-800 bg-cozy-green px-4 py-2 rounded-3xl mt-4 text-gray-200 font-semibold"
                >
                  View Details <FaArrowRight />
                </Link>
                <Link
                  to={`/order/${item.id}`}
                  className="flex gap-2 items-center hover:bg-cozy-yellow/90 text-cozy-green bg-cozy-yellow px-4 py-2 rounded-3xl mt-4 font-semibold"
                >
                  {item.status === "sale" ? "Buy" : "Rent"} <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3 className="bg-red-400 text-center text-white max-w-xs mx-auto py-2 rounded-lg text-xl font-semibold">
              WishList Empty!
            </h3>
          </div>
        )}
      </div>
    </ProfileNav>
  );
}

export default WishList;
