/* eslint-disable react/prop-types */
function Heading({ heading, text }) {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-5xl  font-bold font-mon">{heading}</h2>
      <p className="max-w-4xl mx-auto mt-8 mb-16  text-lg font-semibold">
        {text}
      </p>
    </div>
  );
}

export default Heading;
