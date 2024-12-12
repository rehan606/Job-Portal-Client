import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import registerLottie from '../../assets/lottie/register.json';
import AuthContext from '../../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import SocialLogin from '../common/SocialLogin';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters long, contain at least one uppercase letter and one number.");
            return;
        }

        const user = { name, email, password };
        console.log(user);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message);
            
        })
    };

    return (
        <div className=' bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
            <div className="flex max-w-7xl mx-auto items-center justify-center min-h-screen p-4 gap-6">
                <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Your Account</h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Full Name */}
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className=" left-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="peer w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className=" left-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="peer w-full border border-gray-300 rounded-lg px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                placeholder="Email Address"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label
                                htmlFor="password"
                                className=" left-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
                            >
                                Password
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    required
                                    className="peer flex-grow outline-none placeholder-transparent"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                                I agree to the <a href="#" className="text-blue-500 hover:underline">terms and conditions</a>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button to='/'
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        {/* <p className="text-gray-600 text-sm">Or sign up with</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                Google
                            </button>
                            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                                Facebookkkk
                            </button>
                        </div> */}
                        <SocialLogin></SocialLogin>

                       
                    </div>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-sm mt-6">
                        Already have an account? <Link to='/login' href="#" className="text-blue-500 hover:underline">Log in</Link>
                    </p>
                </div>

                <div className='w-4/12'>
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Register;
