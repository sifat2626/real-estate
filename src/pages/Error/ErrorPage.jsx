import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
        <Link to="/" className="text-lg text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
