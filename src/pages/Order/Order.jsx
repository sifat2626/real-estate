import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import toast from "react-hot-toast";
import { checkExists, setWishlist } from "../../utils/localStorage";

function Order() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useLoaderData();
  const item = data.find((el) => el.id === Number(id));

  const handleOrder = () => {
    toast.success("Property Ordered Successfully!");
    const exists = checkExists(id);
    if (exists) {
      setWishlist(id, "order");
    }
    navigate("/");
  };
  return (
    <div className="mt-8 ml-8">
      <PageTitle title={"Order"} />
      <h3 className="text-3xl font-mon text-cozy-green font-bold text-center mb-8">
        Order
      </h3>
      <div className="max-w-sm mx-auto border-4 border-cozy-green rounded-2xl p-4">
        <h4 className="text-xl font-semibold mb-2">
          Name: {item.estate_title}
        </h4>
        <p className="text-lg font-medium mb-2">
          Category: {item.segment_name}
        </p>
        <p className="text-lg font-medium mb-8">Price: {item.price}</p>
        <div className="w-1/2 mx-auto">
          <button
            onClick={handleOrder}
            className="w-full py-2 bg-cozy-yellow hover:bg-cozy-yellow/90 text-cozy-green font-semibold text-xl rounded-lg"
          >
            {item.status === "sale" ? "Buy" : "Rent"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
