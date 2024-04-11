import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
function Root() {
  return (
    <div className="font-open text-cozy-green">
      <div className="md:custom-container px-2 md:px-0">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default Root;
