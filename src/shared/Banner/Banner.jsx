import Heading from "../../components/Heading/Heading";
import SliderContainer from "../SliderContainer/SliderContainer";

function Banner() {
  return (
    <div className="">
      <Heading
        heading={"Discover Your Dream Home!"}
        text={`Explore a curated collection of homes, tailored to fit your lifestyle.
          Find your perfect sanctuary with ease and confidence.`}
      />

      <SliderContainer />
    </div>
  );
}

export default Banner;
