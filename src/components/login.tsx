import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import lpic1 from "../images/mttpic.jpg";

//firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../backend/firebase";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    //condition 
    const navigate = useNavigate();

    //get, set variables
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    //for custom msgs
    //const [ message, setMessage ] = useState("");

    const { message, setMessage } = useContext(AuthContext);

    //logout msg (passed-via navigation)
    const location = useLocation();
    const logoutMessage = location.state?.message;

    //loading state
    const [isLoading, setIsLoading] = useState(false);
    

    //prevent msg sticking on refresh
    /*useEffect(() => {
        if (logoutMessage) {
            navigate(location.pathname, { replace: true });
        }
    }, []); */

    //clear msg after certain time (global)
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);


    //function for login
    const handleLogin = async(e: any) => {
        e.preventDefault();

        //custom error msg (empty fields)
        /*if (!email || !password) {
            setMessage("Please fill in all fields.");
            return;
        } */

        try {
            setIsLoading(true);
            
            await signInWithEmailAndPassword(auth, email, password);

            await new Promise((res) => setTimeout(res, 500));

            //setMessage("Login successful! Redirecting to Your Dashboard...");
            //navigate("/dashboard", { replace: true }); 
            //no navigate here  
        }
        catch(err: unknown) {
            setIsLoading(false);

            //custom error messages
            setMessage("Invalid email or password. Please check and fill-out properly.❌");
            navigate("/login", { replace: true });
        }

    };

    return (
        <>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto"
            >
                <div className="min-h-screen 
                                flex items-center justify-center 
                                px-4">
                    <div className="w-full max-w-5xl 
                                bg-white 
                                shadow-lg rounded-2xl 
                                overflow-hidden 
                                grid md:grid-cols-2">

                            {/* Left Side - Form */}
                            <div className="p-6 sm:p-10">
                                <h2 className="text-2xl font-bold mb-2">Welcome 🎉</h2>
                                <p className="text-gray-500 mb-6">
                                    Login to manage account
                                </p>

                                <form className="space-y-4" onSubmit={handleLogin}>

                                    {/* Email */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter email"
                                            className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter password"
                                            className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    {/**custom msgs */}
                                    {message && (
                                        <div className={`text-sm text-center ${message.includes("success")
                                            ? "text-green-500"
                                            : "text-amber-700"
                                        }`}>
                                            {message}
                                        </div>    
                                    )}

                                    {/**logout msg */}
                                    {logoutMessage && (
                                        <div className="text-green-500 text-sm text-center mb-4">
                                            {logoutMessage}
                                        </div>    
                                    )}


                                    {/* Options */}
                                    <div className="flex justify-between items-center text-sm">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" />
                                            Remember Me
                                        </label>

                                        <Link to="/login" className="text-cyan-500 hover:underline whitespace-nowrap">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    {/* Login Button */}
                                    <button
                                    type="submit"
                                    disabled={isLoading} 
                                    className={`w-full 
                                    py-3 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer
                                    ${isLoading ? "bg-amber-400 cursor-not-allowed" : "bg-blue-500 hover:bg-amber-600 hover:text-white"}
                                    `}
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                                Logging in...
                                            </>
                                        ) : (
                                            "Login"
                                        )}
                                            
                                    </button>

                                    {/* Divider */}
                                    <div className="text-center text-gray-400">or</div>

                                        {/* Social Buttons */}
                                        <button className="w-full 
                                        border-gray-300 py-3 rounded-lg 
                                        bg-gray-200 hover:bg-gray-300 hover:text-white
                                        transition cursor-pointer">
                                        Continue with Google
                                        </button>

                                        <button className="w-full 
                                        bg-amber-500 py-3 rounded-lg 
                                        hover:bg-cyan-600 hover:text-white
                                        transition cursor-pointer">
                                        Continue with Facebook
                                        </button>

                                        {/* Signup */}
                                        <p className="text-center text-sm mt-4">
                                        <Link to="/signup" className="text-cyan-500 hover:underline">
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

