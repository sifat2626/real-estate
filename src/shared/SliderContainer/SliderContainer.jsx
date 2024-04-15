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
    image: "https://i.ibb.co/hH1zd57/2-1.jpg",
    title: "Luxurious Urban Living Awaits",
    description:
      "Discover the epitome of urban luxury with our stunning collection of high-end properties in vibrant city centers. Explore now.",
    buttonLabel: "Explore Properties",
    buttonLink: "/listings",
  },
  {
    id: 2,
    image: "https://i.ibb.co/zQgGfhX/3-1.jpg",
    title: "Seaside Serenity Beckons",
    description:
      "Escape to your own private oasis with our exclusive selection of seaside villas offering unparalleled luxury and breathtaking ocean views.",
    buttonLabel: "Find Your Retreat",
    buttonLink: "/listings?category=Single-family%20home",
  },
  {
    id: 3,
    image: "https://i.ibb.co/rkJ5F9y/1-1.jpg",
    title: "Sleek Modern Living Spaces",
    description:
      "Embrace the energy of downtown living with our chic modern lofts, meticulously designed to offer style, convenience, and sophistication.",
    buttonLabel: "Discover Urban Living",
    buttonLink: "/listings?category=Apartment",
  },
  {
    id: 4,
    image: "https://i.ibb.co/6JLDZpT/4-1.jpg",
    title: "Escape to Nature's Tranquility",
    description:
      "Experience the beauty of mountain living with our cozy cabins nestled amidst scenic splendor. Your perfect retreat awaits.",
    buttonLabel: "Explore Mountain Homes",
    buttonLink: "/listings?category=Vacation%20rental",
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
        // onSwiper={(swiper) => }
        // onSlideChange={() => }
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
