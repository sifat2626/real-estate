import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <PageTitle title={"Error"} />

      <div className="bg-white border-8 border-cozy-green rounded-3xl p-8">
        <h1 className="text-6xl font-bold text-cozy-green mb-4">404</h1>
        <p className="text-2xl font-semibold text-red-400 mb-6">
          Oops! Page not found.
        </p>
        <Link
          to="/"
          className="text-lg font-semibold text-blue-500 hover:underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
