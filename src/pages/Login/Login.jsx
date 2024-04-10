/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [passType, setPassType] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const { login } = useContext(AuthContext);

  const onSubmit = ({ email, password }) => {
    login(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="md:w-1/2 mx-auto mt-12 bg-cozy-green text-white p-6 rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          {...register("email", { required: "Email is required!" })}
          type="email"
          placeholder="Enter Your Email"
          className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
        />
        {errors.email && (
          <p className="   text-red-300 mb-2">{errors.email.message}</p>
        )}

        <div className="relative">
          <label>Password</label>
          <input
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={passType === true ? "password" : "text"}
            placeholder="Password"
            className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
          />
          <button
            className="absolute right-2 top-11 text-cozy-green text-2xl"
            onClick={() => setPassType(!passType)}
          >
            {passType ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.password && (
            <p className="   text-red-300 mb-2">{errors.password.message}</p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white px-4 py-2 rounded-lg text-cozy-green font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link to={"/register"} className="underline text-cozy-yellow">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
