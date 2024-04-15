import PageTitle from "../../components/PageTitle/PageTitle";

function About() {
  return (
    <div className="p-6">
      <PageTitle title={"About"} />
      <h1 className="text-2xl font-bold mb-4 font-mon">
        Welcome to CozyCrest - Your Gateway to Comfort and Luxury Living!
      </h1>
      <p className="text-lg mb-6">
        At CozyCrest, we believe that your home should be your sanctuary, a
        place where comfort meets style and luxury. Nestled in the heart of
        picturesque landscapes, CozyCrest offers a range of premium residential
        properties designed to elevate your lifestyle and provide the ultimate
        living experience.
      </p>
      <h2 className="text-2xl font-bold font-mon mb-2">
        Discover Your Dream Home at CozyCrest:
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>Luxurious Residences:</strong> Our meticulously crafted
          residences boast modern architectural designs and upscale amenities,
          ensuring a lifestyle of luxury and convenience.
        </li>
        <li className="mb-2">
          <strong>Serenity and Tranquility:</strong> Experience peace and
          tranquility amidst lush greenery and serene surroundings, providing
          the perfect retreat from the hustle and bustle of city life.
        </li>
        <li className="mb-2">
          <strong>Community Living:</strong> Join a vibrant community of
          like-minded individuals and families, fostering a sense of belonging
          and camaraderie.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2 font-mon">Our Services:</h2>
      <p className="text-lg mb-4">
        At CozyCrest, we provide comprehensive buying and renting services
        tailored to your needs:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>Buying Service:</strong> Whether you're looking for your dream
          home or an investment property, our experienced agents will guide you
          through the buying process, ensuring a seamless and stress-free
          experience.
        </li>
        <li className="mb-2">
          <strong>Renting Service:</strong> Need a place to call home
          temporarily? Our renting service offers a wide selection of rental
          properties, from cozy apartments to spacious villas, providing
          flexibility and convenience.
        </li>
      </ul>
      <p className="lg:text-lg font-semibold">
        Join us at CozyCrest and experience the epitome of luxury living.
        Welcome home to CozyCrest - where every day feels like a retreat!
      </p>
    </div>
  );
}

export default About;
