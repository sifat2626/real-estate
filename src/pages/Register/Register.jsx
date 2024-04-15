/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  useNavigate,
  useLocation,
  Link,
  useSearchParams,
  Navigate,
} from "react-router-dom";
import { toast } from "react-hot-toast";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import PageTitle from "../../components/PageTitle/PageTitle";

function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const [passType, setPassType] = useState(true);
  const [confirmPassType, setConfirmPassType] = useState(true);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const state = searchParams.get("state");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const { signUp, updateUser, setUser } = useContext(AuthContext);

  const handleUpdateUser = (name, photoURL) => {
    updateUser(name, photoURL)
      .then(() => {
        setUser((prevUser) => {
          return { ...prevUser, displayName: name, photoURL };
        });
      })
      .catch((error) => toast.error(error));
  };

  // location.state = state;

  // useEffect(() => {
  //   console.log(location.state);
  // });
  console.log(location);

  const onSubmit = ({ name, photoURL, email, password }) => {
    // Password verification
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;
    if (
      !uppercaseRegex.test(password) ||
      !lowercaseRegex.test(password) ||
      !lengthRegex.test(password)
    ) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    signUp(email, password)
      .then((result) => {
        handleUpdateUser(name, photoURL);
        toast.success("Registration Successful");
        navigate(location.state || "/");
        // <Navigate state={location.state} />;
        // window.location.reload();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <PageTitle title={"Register"} />
      <div className="extra:w-2/3 mx-auto mt-12 bg-cozy-green text-white p-6 rounded-3xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Enter Your Name"
            className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
          />
          {errors.name && <p className="text-white">{errors.name.message}</p>}

          <label>PhotoURL</label>
          <input
            {...register("photoURL")}
            type="text"
            placeholder="Photo URL"
            className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
          />

          <label>Email</label>
          <input
            {...register("email", { required: "Email is required!" })}
            type="email"
            placeholder="Enter Your Email"
            className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
          />
          {errors.email && (
            <p className="text-red-300 mb-2">{errors.email.message}</p>
          )}

          <div className="relative">
            <label>Password</label>
            <input
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={passType === true ? "password" : "text"}
              placeholder="Password"
              className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
            />
            <button
              type="button"
              className="absolute right-2 top-11 text-cozy-green text-2xl"
              onClick={() => setPassType(!passType)}
            >
              {passType ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-300 mb-2">{errors.password.message}</p>
            )}
          </div>

          <div className="relative">
            <label>Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                validate: (value) =>
                  value === getValues("password") ||
                  "The passwords do not match",
              })}
              type={confirmPassType === true ? "password" : "text"}
              placeholder="Confirm Password"
              className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
            />
            <button
              type="button"
              className="absolute right-2 top-11 text-cozy-green text-2xl"
              onClick={() => setConfirmPassType(!confirmPassType)}
            >
              {confirmPassType ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-300 mb-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white px-4 py-2 rounded-lg text-cozy-green font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="underline text-cozy-yellow"
                state={location.state}
                replace
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="text-center">
        <SocialLogin />
      </div>
    </div>
  );
}

export default Register;
