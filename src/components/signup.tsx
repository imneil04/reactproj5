import { motion } from "motion/react";
import lpic1 from "../images/playgroundpic.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto"
            >

                <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                    <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">

                        {/* Left Side - Form */}
                        <div className="p-6 sm:p-10">
                        <h2 className="text-2xl font-bold mb-2">Create Account ✨</h2>
                        <p className="text-gray-500 mb-6">
                            Join us and manage your childcare experience
                        </p>

                        <form className="space-y-4">

                            {/* Full Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-blue-500"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                            peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                Enter Full Name
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-blue-500"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                            peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Enter Email
                                </label>
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder=" "
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-blue-500"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                            peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Enter Password
                                </label>
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder=" "
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-blue-500"
                                />
                                <label
                                    htmlFor="confirmPassword"
                                    className="absolute left-3 top-3 text-gray-400 text-sm transition-all
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                            peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
                                >
                                    Confirm Password
                                </label>
                            </div>

                            {/* Terms */}
                            <div className="flex items-center gap-2 text-sm">
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">
                                    I agree to the{" "}
                                    <span className="text-blue-500 cursor-pointer hover:underline">
                                    Terms & Conditions
                                    </span>
                                </label>
                            </div>

                            {/* Signup Button */}
                            <button className="w-full bg-cyan-500 
                                text-white py-3 rounded-lg 
                                hover:bg-amber-600 transition cursor-pointer">
                                Create Account
                            </button>

                            {/* Divider */}
                            <div className="text-center text-gray-400">or</div>

                            {/* Social Signup */}
                            <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                                Sign up with Google
                            </button>

                            <button className="w-full border border-cyan-500 text-blue-500 py-3 rounded-lg 
                                hover:bg-blue-50 transition cursor-pointer">
                                Sign up with Facebook
                            </button>

                            {/* Login Redirect */}
                            <p className="text-center text-sm mt-4">
                                Already have an account?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Login
                            </Link>
                            </p>
                        </form>
                        </div>

                        {/* Right Side - Image */}
                        <div className="hidden md:block">
                            <img
                                src={lpic1}
                                alt="signup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Signup;

