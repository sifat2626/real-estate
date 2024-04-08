/* eslint-disable react/prop-types */
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import image from "../../assets/images/loft.jpg";
import { Link } from "react-router-dom";
function EstateCard({ id, title, segment_name, price, status, facilities }) {
  return (
    <div className="col-span-1 rounded-3xl border-2 border-cozy-green shadow-md shadow-cozy-green p-4 ">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt=""
          className=" duration-300 hover:scale-125 rounded-3xl"
        />
      </div>
      <h3 className="text-xl font-bold mt-4 font-mon">{title}</h3>
      <h4 className=" font-semibold">{segment_name}</h4>

      <div className="flex gap-2 justify-between items-center mt-3">
        <div className="flex gap-2 items-center">
          <FaMoneyBillAlt className=" text-2xl" />
          <p className="">{price}</p>
        </div>
        <button className="text-3xl">
          <span className="">
            <ion-icon name="heart-outline"></ion-icon>
          </span>
          <span className="">
            <ion-icon name="heart"></ion-icon>
          </span>
        </button>
      </div>

      <div className="text-base  mt-4">
        {facilities?.map((facility, i) => (
          <div className=" flex gap-2 items-center font-bold" key={i}>
            <span>
              <FaCheckCircle />
            </span>
            <p>{facility}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between mb-4">
        <Link
          to={`/details/${id}`}
          className="flex gap-2 items-center hover:bg-green-800 bg-cozy-green px-4 py-2 rounded-lg text-gray-200 font-semibold"
        >
          View Details <FaArrowRight />
        </Link>
        <Link className="bg-cozy-green hover:bg-green-800 text-gray-200 px-4 py-2 rounded-lg font-bold">
          {status === "sale" ? "buy" : "rent"}
        </Link>
      </div>
    </div>
  );
}

export default EstateCard;
