import Heading from "../../components/Heading/Heading";
import SliderContainer from "../SliderContainer/SliderContainer";

function Banner() {
  return (
    <div className="">
      <Heading
        heading={"Find Your Perfect Sanctuary"}
        text={`Explore a curated collection of homes, tailored to fit your lifestyle.
          Find your perfect sanctuary with ease and confidence.`}
      />

      <SliderContainer />
    </div>
  );
}

export default Banner;
