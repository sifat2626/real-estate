import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
function Root() {
  return (
    <div className="font-open text-cozy-green">
      <Navbar />
      <div className="custom-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
