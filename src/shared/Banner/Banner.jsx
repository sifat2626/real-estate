function Banner() {
  const slides = [
    {
      image: "image1.jpg",
      title: "Luxurious Urban Retreat",
      features: {
        bedrooms: 4,
        bathrooms: 3,
        area: "2,500 sq ft",
        amenities: ["Swimming Pool", "Garden", "Home Theater"],
      },
      description:
        "Experience luxury living in this stunning urban retreat, featuring spacious interiors, modern amenities, and breathtaking views of the city skyline.",
      buttonLabel: "Explore Property",
      buttonLink: "/property1",
    },
    {
      image: "image2.jpg",
      title: "Seaside Paradise Villa",
      features: {
        bedrooms: 5,
        bathrooms: 4,
        area: "3,000 sq ft",
        amenities: ["Private Beach Access", "Infinity Pool", "Outdoor Kitchen"],
      },
      description:
        "Escape to your own private paradise with this exquisite seaside villa. Enjoy unparalleled luxury, tranquility, and panoramic views of the ocean.",
      buttonLabel: "Explore Property",
      buttonLink: "/property2",
    },
    {
      image: "image3.jpg",
      title: "Modern Downtown Loft",
      features: {
        bedrooms: 2,
        bathrooms: 2,
        area: "1,200 sq ft",
        amenities: ["Open Floor Plan", "City Views", "Fitness Center"],
      },
      description:
        "Live in style and convenience in this sleek modern loft located in the heart of downtown. Experience urban living at its finest with state-of-the-art amenities and vibrant city life.",
      buttonLabel: "Explore Property",
      buttonLink: "/property3",
    },
    {
      image: "image4.jpg",
      title: "Mountain Retreat Cabin",
      features: {
        bedrooms: 3,
        bathrooms: 2,
        area: "1,800 sq ft",
        amenities: ["Mountain Views", "Fireplace", "Hot Tub"],
      },
      description:
        "Escape the hustle and bustle of city life with this charming mountain retreat cabin. Nestled amidst scenic beauty, this cozy cabin offers a serene getaway and endless outdoor adventures.",
      buttonLabel: "Explore Property",
      buttonLink: "/property4",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl text-cozy-green font-bold font-mon">
        Discover Your Dream Home
      </h2>
      <p className="max-w-3xl mx-auto my-4">
        Explore a curated collection of homes, tailored to fit your lifestyle.
        Find your perfect sanctuary with ease and confidence.
      </p>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

export default Banner;
