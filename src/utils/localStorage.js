import toast from "react-hot-toast";

const getWishlist = () => {
  const storedWishlist = localStorage.getItem("wishes");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const checkExists = (id) => {
  const idInt = Number(id);
  const storedWishlist = getWishlist();
  const existsIndex = storedWishlist.indexOf(idInt);
  if (existsIndex === -1) {
    return false;
  } else {
    return true;
  }
};

const setWishlist = (id, type = "") => {
  const idInt = Number(id);
  const storedWishlist = getWishlist();
  const existsIndex = storedWishlist.indexOf(idInt);
  if (existsIndex === -1) {
    storedWishlist.push(idInt);
    toast.success("Added to WishList!");
  } else {
    storedWishlist.splice(existsIndex, 1);
    {
      type !== "order" && toast("⚠️ Removed from WishList!");
    }
  }
  localStorage.setItem("wishes", JSON.stringify(storedWishlist));
};

export { getWishlist, setWishlist, checkExists };
