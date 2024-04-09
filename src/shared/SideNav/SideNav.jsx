/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdRealEstateAgent } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function SideNav({ open, setOpen }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState(null);

  const categories = [
    "Category 1",
    "Category 2",
    "Category 3",
    // Add more categories as needed
  ];

  const types = ["Buy", "Rent"];

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

  return (
    <div
      className={`bg-cozy-green mib-h-screen h-full p-5 pt-8 relative mt-4 rounded-3xl ${
        open ? "w-72" : "w-20"
      } duration-300`}
    >
      <BsArrowLeftShort
        className={`absolute -right-3 top-9 text-3xl font-bold border-2 bg-gray-200 text-cozy-green border-cozy-green rounded-full cursor-pointer ${
          !open && "rotate-180 duration-300"
        }`}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <div className="inline-flex items-center">
        <MdRealEstateAgent
          className={`text-4xl cursor-pointer mr-2 text-cozy-green bg-gray-200 rounded-xl p-2 duration-1000 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-cozy-green origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          CozyCrest
        </h1>
      </div>
      <div
        className={`flex items-center rounded-md bg-gray-200 mt-6 ${
          !open ? "px-2.5" : "px-4 duration-300"
        }  py-2`}
      >
        {!open && (
          <FaSearch
            className={`text-cozy-green text-lg block float-left cursor-pointer ${
              open && "mr-2"
            } `}
          />
        )}
        <input
          type="search"
          placeholder="Search"
          className={`bg-transparent w-full focus:outline-none ${
            !open && "hidden"
          }`}
        />
      </div>
      <div className={`${open ? "block" : "hidden"} mt-4`}>
        <select
          className="block w-full px-4 py-2 mt-2 text-cozy-green bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-cozy-green"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory}
        >
          <option value="" disabled>
            Select a category...
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={`${open ? "block" : "hidden"} mt-4`}>
        <select
          className="block w-full px-4 py-2 mt-2 text-cozy-green bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-cozy-green"
          onChange={(e) => handleTypeChange(e.target.value)}
          value={selectedType}
        >
          <option value="" disabled>
            Select Buy/Rent...
          </option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SideNav;
