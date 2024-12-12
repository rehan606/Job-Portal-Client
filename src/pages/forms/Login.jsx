import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/login.json";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../common/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = { email, password };
    // console.log(loginUser);

    signInUser(email, password)
      .then((result) => {
        console.log("User Login Successfully", result.user);
        alert("User Login Successfully");
        navigate(from);
        // navigate(location.state || '/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex md:flex-row max-w-7xl mx-auto items-center justify-center min-h-screen p-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Welcome Back!
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Address */}
            <div className="relative">
              <label
                htmlFor="email"
                className=" left-4  text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="peer w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="Email Address"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="left-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="peer w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                placeholder="Password"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-indigo-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              Log In
            </button>
          </form>

          {/* Social Login  */}
          <div>
            <SocialLogin></SocialLogin>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        <div className="w-4/12 ">
          <Lottie animationData={loginLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
