import Heading from "../../components/Heading/Heading";
import SliderContainer from "../SliderContainer/SliderContainer";

function Banner() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className=""
    >
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
