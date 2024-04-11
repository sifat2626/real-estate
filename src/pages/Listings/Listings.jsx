/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SideNav from "../../shared/SideNav/SideNav";
import { useLoaderData, useSearchParams } from "react-router-dom";
import EstateCard from "../../components/EstateCard/EstateCard";

function Listings() {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const category = searchParams.get("category");
  const type = searchParams.get("type");
  const allData = useLoaderData();

  useEffect(() => {
    document.title = "Cozy | Listings";
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setOpen(false);
    // You can add further logic here, like filtering content based on the selected category
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setOpen(false);
    // You can add further logic here, like filtering content based on the selected type
  };

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

  return (
    <div className="flex">
      <div>
        <SideNav
          open={open}
          setOpen={setOpen}
          data={allData}
          handleCategoryChange={handleCategoryChange}
          handleTypeChange={handleTypeChange}
        />
      </div>
      <div className="w-full mx-auto">
        <div
          className={`md:py-7 md:pl-7 mt-5 ml-4 md:ml-0 md:mt-0 text-2xl duration-300 ${
            open && "scale-0 md:scale-1"
          }`}
        >
          <div className="grid extra:grid-cols-3 md:grid-cols-2 gap-x-6 lg:gap-x-2 gap-y-6">
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
    </div>
  );
}

export default Listings;
