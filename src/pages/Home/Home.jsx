import PageTitle from "../../components/PageTitle/PageTitle";
import Banner from "../../shared/Banner/Banner";
import EstateContainer from "../../shared/EstateContainer/EstateContainer";

function Home() {
  return (
    <div className="">
      <PageTitle title={"Home"} />
      <Banner />
      <EstateContainer />
    </div>
  );
}

export default Home;
