import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function Login() {
  const [passType, setPassType] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password)
      .then(navigate(location?.state ? location.state : "/"))
      .catch((error) => console.log(error.message));
  };

  const handlePassType = (e) => {
    e.preventDefault();
    setPassType(!passType);
  };
  return (
    <div className="custom-container">
      <div className="w-1/2 mx-auto  p-6 text-white rounded-lg bg-gray-700 mt-4">
        <h2 className="text-2xl font-bold">Login</h2>
        <form action="" onSubmit={(e) => handleLogin(e)}>
          <div className="form-control">
            <input
              type="text"
              name="email"
              placeholder="Username or Email"
              className="pb-2 border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-8 r placeholder:font-bold"
            />
          </div>
          <div className="form-control relative">
            <input
              type={`${passType ? "password" : "text"}`}
              placeholder="Password"
              name="password"
              className="pb-2 border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-8 r placeholder:font-bold"
            />
            <span className="absolute right-2 top-10">
              {passType ? (
                <FaEyeSlash onClick={(e) => handlePassType(e)} />
              ) : (
                <FaEye onClick={(e) => handlePassType(e)} />
              )}
            </span>
          </div>
          <div className="form-control mt-4">
            <div className=" flex justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Remember me</span>
              </label>
              <a href="" className="text-[#F9A51A] underline">
                Forgot Password
              </a>
            </div>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-[#F9A51A] w-full text-white text-lg font-semibold">
              Login
            </button>
            <p className="text-center mt-4">
              Don’t have an account?
              <Link to={"/register"} className="text-[#F9A51A] underline">
                {" "}
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
