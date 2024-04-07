import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function Register() {
  const { signUp } = useContext(AuthContext);
  const [passType, setPassType] = useState(true);
  const handlePassType = (e) => {
    e.preventDefault();
    setPassType(!passType);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signUp(email, password)
      .then()
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="custom-container">
      <div className="w-1/2 mx-auto  p-6 text-white rounded-lg bg-gray-700">
        <h2 className="text-2xl font-bold">Create an account</h2>
        <form action="" onSubmit={(e) => handleRegister(e)}>
          <div className="form-control">
            <input
              type="text"
              placeholder="First Name"
              className=" border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-4 r placeholder:font-bold"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Last Name"
              className=" border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-4 r placeholder:font-bold"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="email"
              placeholder="Username or Email"
              className=" border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-4 r placeholder:font-bold"
            />
          </div>
          <div className="form-control relative">
            <input
              type={`${passType ? "password" : "text"}`}
              placeholder="Password"
              name="password"
              className=" border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-4 r placeholder:font-bold"
            />
            <span className="absolute right-2 top-4">
              {passType ? (
                <FaEyeSlash onClick={(e) => handlePassType(e)} />
              ) : (
                <FaEye onClick={(e) => handlePassType(e)} />
              )}
            </span>
          </div>
          <div className="form-control relative">
            <input
              type={`${passType ? "password" : "text"}`}
              placeholder="Confrim Passowrd"
              className=" border-b-2 w-full outline-none bg-transparent text-white placeholder:text-white mt-4 r placeholder:font-bold"
            />
            <span className="absolute right-2 top-4">
              {passType ? (
                <FaEyeSlash onClick={(e) => handlePassType(e)} />
              ) : (
                <FaEye onClick={(e) => handlePassType(e)} />
              )}
            </span>
          </div>

          <div className="form-control mt-4">
            <button className="btn bg-[#F9A51A] w-full text-white text-lg font-semibold">
              Create an account
            </button>
            <p className="text-center mt-4">
              Already have an account?
              <Link to={"/login"} className="text-[#F9A51A] underline">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
