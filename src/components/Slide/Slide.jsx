/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */

/* eslint-disable react/prop-types */

function Slide({ image, title, description, buttonLabel, buttonLink }) {
  return (
    <div className="grid lg:grid-cols-2 slide relative overflow-hidden rounded-3xl items-center bg-cozy-green lg:px-12 py-8 min-h-[500px] md:min-h-[620px] lg:min-h-[420px]">
      {/* Image */}
      <div className="col-span-1 mx-8 lg:mx-0 mb-4 lg:mb-0">
        <img src={image} alt={title} className="h-full my-auto rounded-3xl" />
      </div>
      {/* Content */}
      <div className="col-span-1 px-8 text-left">
        <div className="slide-content text-gray-200">
          <h2 className="lg:text-3xl text-xl font-bold mb-2">{title}</h2>
          <p className="lg:text-lg mb-4">{description}</p>
          <a href={buttonLink} className="btn text-cozy-green font-bold">
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slide;
