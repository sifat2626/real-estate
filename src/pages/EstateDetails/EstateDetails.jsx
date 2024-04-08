import { useParams, useLoaderData, Link } from "react-router-dom";
import image from "../../assets/images/loft.jpg";
import MapBox from "../../shared/MapBox/MapBox";
import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

function EstateDetails() {
  const data = useLoaderData();
  const { id: estateId } = useParams();
  const estateData = data.find((item) => item.id === Number(estateId));
  const {
    id,
    estate_title: title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    lat,
    lng,
  } = estateData;
  const position = [lat, lng];
  const similarItems = data.filter(
    (item) => item.segment_name === segment_name && item.id !== id
  );
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-6 ">
        <div className="col-span-1 ">
          <h3 className="text-4xl font-bold font-mon py-8">{title}</h3>
          <img src={image} alt="" className="rounded-3xl" />
          <h3 className="text-2xl font-semibold mt-2">{segment_name}</h3>
          <p className=" mt-2">{description} </p>
          <p className="mt-2">
            <span className="font-bold">area: </span> {area}
          </p>
          <p className="mt-2">
            <span className="font-bold">location: </span>
            {location}
          </p>
          <div className="mt-2">
            <p className="font-bold ">Features:</p>
            {facilities.map((facility, i) => (
              <p key={i} className="flex items-center gap-2 mt-1 font-semibold">
                <FaCheckCircle /> {facility}
              </p>
            ))}
          </div>
          <p className="flex items-center gap-2 mt-2">
            <p className="font-bold text-lg">price:</p>
            <p className="font-bold">{price}</p>
          </p>
          <div className="flex items-center justify-between mt-4">
            <Link
              to={"/"}
              className="inline-flex px-4 py-2 hover:bg-green-800 rounded-lg bg-cozy-green text-gray-200  font-semibold text-xl"
            >
              {status === "sale" ? "buy" : "rent"}
            </Link>
            <button className="text-3xl">
              <span className="">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
              <span className="">
                <ion-icon name="heart"></ion-icon>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-1 mt-12 ">
          <MapBox position={position} location={location} />
        </div>
      </div>
      {similarItems.length > 0 && (
        <div className="mt-12">
          <h3 className="font-semibold text-xl">Similar Items...</h3>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-2">
            {similarItems.map((item, i) => (
              <div
                className="border-2 border-cozy-green rounded-3xl p-4"
                key={i}
              >
                <img src={image} alt="" className="rounded-3xl" />
                <h3 className="text-xl font-mon  mt-2 font-bold">
                  {item.estate_title}
                </h3>
                <Link
                  to={`/details/${item.id}`}
                  className="flex gap-2 items-center hover:bg-green-800 bg-cozy-green px-4 py-2 rounded-3xl mt-4 text-gray-200 font-semibold"
                  onClick={handleScrollToTop}
                >
                  View Details <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default EstateDetails;
