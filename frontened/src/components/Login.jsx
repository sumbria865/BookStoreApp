import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button (not a submit button) */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none mt-2"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="mt-4">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 border rounded-md outline-none mt-2"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>

              <div className="flex items-center justify-center mt-4 gap-6">
                {/* Login Button */}
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
                >
                  Login
                </button>

                {/* Signup Link */}
                <p>
                  Not registered?{" "}
                  <Link
                    to="/Signup"
                    className="underline text-blue-500 hover:text-blue-700"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
            {/* Form ends here */}
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
