import Banner from "../../shared/Banner/Banner";
import EstateContainer from "../../shared/EstateContainer/EstateContainer";
import useDocumentTitle from "../../utils/useDocumentTitle";

function Home() {
  useDocumentTitle("Cozy | Home");
  return (
    <div className="">
      <Banner />
      <EstateContainer />
    </div>
  );
}

export default Home;
