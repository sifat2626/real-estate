/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaMoneyBillAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { checkExists, setWishlist } from "../../utils/localStorage";
import { useState } from "react";

function EstateCard({
  id,
  title,
  segment_name,
  price,
  status,
  facilities,
  image,
  type,
  delay,
}) {
  const [isFav, setIsFav] = useState(() => {
    return checkExists(id);
  });
  console.log(isFav);
  const handleButtonClick = () => {
    setIsFav(!isFav);
    setWishlist(id);
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      data-aos-duration={1000}
      data-aos-once="false"
      data-aos-anchor="#card-anchor"
      className="relative col-span-1 rounded-3xl border-2 border-cozy-green shadow-md shadow-cozy-green p-2 extra:p-4"
    >
      <div id="facility-anchor" className="absolute "></div>
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt=""
          className="duration-300 hover:scale-125 rounded-3xl h-56 object-cover w-full"
        />
      </div>
      <h3 className="font-bold font-mon text-base extra:text-lg mt-4 ">
        {title}
      </h3>
      <h4 className="font-semibold text-base extra:text-lg font-mon">
        {segment_name}
      </h4>

      <div className="flex gap-2 justify-between items-center mt-3">
        <div className="flex gap-2 items-center">
          <FaMoneyBillAlt className="text-2xl" />
          <p className="text-lg font-bold">{price}</p>
        </div>
        <button className="text-3xl" onClick={handleButtonClick}>
          {!isFav ? (
            <span>
              <ion-icon name="heart-outline"></ion-icon>
            </span>
          ) : (
            <span>
              <ion-icon name="heart"></ion-icon>
            </span>
          )}
        </button>
      </div>

      <div className="text-base mt-4">
        {facilities?.map((facility, i) => (
          <div
            data-aos-delay={i * 300}
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-anchor="#facility-anchor"
            className="flex gap-2 items-center font-bold mt-1"
            key={i}
          >
            <span>
              <FaCheckCircle />
            </span>
            <p className="text-sm extra:text-lg">{facility}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 pb-2">
        <Link
          to={`/details/${id}`}
          className="text-sm extra:text-base flex gap-2 items-center hover:bg-green-800 bg-cozy-green px-3 py-2 rounded-lg text-gray-200 font-semibold"
        >
          View Property <FaArrowRight />
        </Link>
        <Link
          to={`/order/${id}`}
          className="text-base bg-cozy-yellow/90 hover:bg-cozy-yellow text-cozy-green px-3 py-2 rounded-lg font-bold"
        >
          {status === "sale" ? "Buy" : "Rent"}
        </Link>
      </div>
    </div>
  );
}

export default EstateCard;
