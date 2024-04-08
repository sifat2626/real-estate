import { useEffect, useState } from "react";

function EstateCards() {
  const [estateData, setEstateData] = useState(null);
  useEffect(() => {
    fetch("estateData.json")
      .then((res) => res.json())
      .then((data) => setEstateData(data))
      .catch((error) => console.log(error.message));
  }, []);
  return <div>estateData: {estateData?.length}</div>;
}

export default EstateCards;
