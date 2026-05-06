import { motion } from "motion/react";
import lpic1 from "../images/playgroundpic.jpg";
import { Link } from "react-router-dom";
//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../backend/firebase";
//react 
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import type { FormEvent } from "react";


const Signup = () => {

    //const navigate = useNavigate();

    //get, set variables
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [phone, setPhone ] = useState("");
    const [password, setPassword ] = useState("");

    const [ message, setMessage ] = useState("");
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    //function for signup
    const handleSignUp = async (e: any) => {
        e.preventDefault();

            //custom error msg (empty fields)
            //if (!email || !password || !name) {
                //setMessage("All fields are required. Please fill. ");
                //return;
            //}

            try {
            
                setIsLoading(true);
            
                //create user in Auth
                const userCredential = await createUserWithEmailAndPassword (
                    auth,
                    email,
                    password
                );

                const user = userCredential.user;

                setMessage("Account created successfully!✅ Redirecting to dashboard...");
                setIsSuccess(true);

                //save user info to firestore db
                await setDoc(doc(db, "users", user.uid), {
                    name,
                    email,
                    phone,
                    role: "parent",
                    createdAt: new Date(),

                });

                //setMessage("Account created successfully! Redirecting to dashboard...");
                //setIsSuccess(true);
                
                /*await new Promise((res) => setTimeout(res, 1500));
                setTimeout(() => {
                    navigate("/dashboard", { replace: true });
                }, 1500); */

        }
        catch (err: unknown) {

           setIsLoading(false);

           setMessage("Please check and fill out form properly.❌");
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

                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">

                        {/* Left Side - Form */}
                        <div className="p-6 sm:p-10">
                        <h2 className="text-2xl font-bold mb-2">Create Account ✨</h2>
                        <p className="text-gray-500 mb-6">
                            Join us and manage your childcare experience
                        </p>

                        <form className="space-y-4" onSubmit={handleSignUp}>

                            {/* Full Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter Name..."
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                    onChange={(e) => setName(e.target.value)}
                                />                   
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email..."
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                    onChange={(e) => setEmail(e.target.value)}
                                />                               
                            </div>

                            {/**Phone */}
                            <div className="relative">
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter phone #..."
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                    onChange={(e) => setPhone(e.target.value)}
                                />                               
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter password..."
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                    onChange={(e) => setPassword(e.target.value)}
                                />                              
                            </div>

                            {/* Confirm Password */}
                            <div className="relative">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm password..."
                                    className="peer w-full border-b border-gray-300 px-3 py-3 focus:outline-none focus:border-cyan-500"
                                />
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

                            {/**custom msgs 
                            {message && (
                                <div className={`text-sm text-center ${message.includes("success")
                                    ? "text-green-700"
                                    : "text-amber-700"
                                }`}>
                                    {message}
                                </div>    
                            )} */}

                            {message && (
                                <div 
                                className={`text-sm text-center ${isSuccess ? "text-cyan-600" : "text-amber-500"

                                }`}>
                                    {message}
                                </div>
                            )}

                            {/* Signup Button */}
                            <button 
                                type="submit"
                                disabled={isLoading || isSuccess}
                                className={`
                                w-full 
                                py-3 rounded-lg flex items-center justify-center gap-2
                                transition cursor-pointer 
                                    ${isLoading || isSuccess
                                    ? "bg-amber-500 cursor-not-allowed"
                                    : "bg-amber-600 hover:bg-amber-600 hover:text-white"
                                    }
                                `}>
                                 {isLoading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Creating user account...
                                    </>
                                 ) : isSuccess ? (
                                    "Success 🎉"
                                 ) : (
                                    "Create Account"
                                 )}
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

