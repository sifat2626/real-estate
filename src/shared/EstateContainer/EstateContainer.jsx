import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import EstateCard from "../../components/EstateCard/EstateCard";
import { Link } from "react-router-dom";

function EstateContainer() {
  const [estateData, setEstateData] = useState(null);
  useEffect(() => {
    fetch("estateData.json")
      .then((res) => res.json())
      .then((data) => setEstateData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Heading
        heading={"Find Your Dream Property"}
        text={`Explore our curated collection of premium listings. Your perfect home is waiting to be discovered. Start exploring today.`}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
        {estateData?.slice(0, 9).map((estate) => (
          <EstateCard
            key={estate.id}
            id={estate.id}
            title={estate.estate_title}
            segment_name={estate.segment_name}
            price={estate.price}
            status={estate.status}
            facilities={estate.facilities}
            image={estate.image}
          />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to={`/listings`}
          className=" hover:bg-green-800 bg-cozy-green px-4 py-2 rounded-3xl text-gray-200 font-semibold"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default EstateContainer;
