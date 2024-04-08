import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";

function EstateContainer() {
  const [estateData, setEstateData] = useState(null);
  useEffect(() => {
    fetch("estateData.json")
      .then((res) => res.json())
      .then((data) => setEstateData(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <Heading
        heading={"Find Your Dream Property"}
        text={`Explore our curated collection of premium listings. Your perfect home is waiting to be discovered. Start exploring today.`}
      />
    </div>
  );
}

export default EstateContainer;
