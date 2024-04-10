import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [passType, setPassType] = useState(true);
  const [confirmPassType, setConfirmPassType] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const { signUp } = useContext(AuthContext);

  const onSubmit = ({ name, photoURL, email, password, confirmPassword }) => {
    console.log(email, password);
    signUp(email, password)
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="md:w-1/2 mx-auto mt-12 bg-cozy-green text-white p-6 rounded-3xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", { required: true })}
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

        <div className="relative">
          <label>Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Password is required!",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value) =>
                value === getValues("password") || "The passwords do not match",
            })}
            type={confirmPassType === true ? "password" : "text"}
            placeholder="Confirm Password"
            className="w-full input input-bordered mt-2 mb-4 text-cozy-green"
          />
          <button
            className="absolute right-2 top-11 text-cozy-green text-2xl"
            onClick={() => setConfirmPassType(!confirmPassType)}
          >
            {confirmPassType ? <FaEyeSlash /> : <FaEye />}
          </button>
          {errors.confirmPassword && (
            <p className="   text-red-300 mb-2">
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
      </form>
    </div>
  );
}

export default Register;
