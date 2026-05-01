import { Link } from "react-router-dom";
import { motion } from "motion/react";
import lpic1 from "../images/mttpic.jpg";

const Login = () => {

    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with real authentication logic
    console.log("Login attempt:", { email, password });
    }; */

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
                                <h2 className="text-2xl font-bold mb-2">Welcome 🎉</h2>
                                <p className="text-gray-500 mb-6">
                                    Login to manage account
                                </p>

                                <form className="space-y-4">

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
                                            Enter email
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

                                    {/* Options */}
                                    <div className="flex justify-between items-center text-sm">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" />
                                            Remember Me
                                        </label>

                                        <Link to="#" className="text-blue-500 hover:underline whitespace-nowrap">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    {/* Login Button */}
                                    <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                                    Login
                                    </button>

                                    {/* Divider */}
                                    <div className="text-center text-gray-400">or</div>

                                        {/* Social Buttons */}
                                        <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
                                        Continue with Google
                                        </button>

                                        <button className="w-full border border-blue-500 text-blue-500 py-3 rounded-lg hover:bg-blue-50 transition">
                                        Continue with Facebook
                                        </button>

                                        {/* Signup */}
                                        <p className="text-center text-sm mt-4">
                                        <Link to="/signup" className="text-blue-500 hover:underline">
                                            Sign up
                                        </Link>
                                        </p>
                                </form>
                            </div>

                            {/* Right Side - Image */}
                            <div className="hidden md:block">
                                <img
                                    src={lpic1}
                                    alt="login"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Login;

