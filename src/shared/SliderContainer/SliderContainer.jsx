// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slide from "../../components/Slide/Slide";
const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/wB0F1GY/urban.jpg",
    title: "Luxurious Urban Living Awaits",
    description:
      "Discover the epitome of urban luxury with our stunning collection of high-end properties in vibrant city centers. Explore now.",
    buttonLabel: "Explore Properties",
    buttonLink: "/properties",
  },
  {
    id: 2,
    image: "https://i.ibb.co/31wdxMF/villa.jpg",
    title: "Seaside Serenity Beckons",
    description:
      "Escape to your own private oasis with our exclusive selection of seaside villas offering unparalleled luxury and breathtaking ocean views.",
    buttonLabel: "Find Your Retreat",
    buttonLink: "/properties",
  },
  {
    id: 3,
    image: "https://i.ibb.co/zhs0M8F/loft.jpg",
    title: "Sleek Modern Living Spaces",
    description:
      "Embrace the energy of downtown living with our chic modern lofts, meticulously designed to offer style, convenience, and sophistication.",
    buttonLabel: "Discover Urban Living",
    buttonLink: "/properties",
  },
  {
    id: 4,
    image: "https://i.ibb.co/j6p3nPF/mountain-cabin.jpg",
    title: "Escape to Nature's Tranquility",
    description:
      "Experience the beauty of mountain living with our cozy cabins nestled amidst scenic splendor. Your perfect retreat awaits.",
    buttonLabel: "Explore Mountain Homes",
    buttonLink: "/properties",
  },
];

function SliderContainer() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        speed={1200}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true} // Enable looping
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="rounded-3xl overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderContainer;
