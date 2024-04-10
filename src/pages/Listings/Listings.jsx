/* eslint-disable no-unused-vars */
import { useState } from "react";
import SideNav from "../../shared/SideNav/SideNav";
import { useLoaderData, useSearchParams } from "react-router-dom";
import EstateCard from "../../components/EstateCard/EstateCard";

function Listings() {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const allData = useLoaderData();
  const filteredData = allData.filter((data) => {
    if (type && category) {
      return data.status === type && data.segment_name === category;
    }
    if (!category && type) {
      return data.status === type;
    }
    if (category && !type) {
      return data.segment_name === category;
    }
    return true;
  });
  console.log(filteredData);
  console.log(category, type);
  return (
    <div className="flex">
      <div>
        <SideNav open={open} setOpen={setOpen} />
      </div>
      <div
        className={`md:p-7 mt-5 ml-4 md:ml-0 md:mt-0 text-2xl duration-300 ${
          open && "scale-0 md:scale-1"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-x-6 gap-y-6">
          {filteredData.map((estate) => (
            <EstateCard
              className="col-span-1"
              key={estate.id}
              id={estate.id}
              title={estate.estate_title}
              segment_name={estate.segment_name}
              price={estate.price}
              status={estate.status}
              facilities={estate.facilities}
              image={estate.image}
              // type={"sm"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
