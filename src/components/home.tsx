import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { homelocations } from "../data/homeLocData";
import { featuresdata } from "../data/featuresData";

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="bg-gray-50 text-gray-800">

                    {/* HERO */}
                    <section className="min-h-screen flex items-center justify-center px-6">
                        <div className="max-w-5xl text-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Safe, Trusted, & Reliable Childcare
                            <span className="text-amber-600"> Made Simple</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600">
                            Book trusted childcare services with ease. Designed for modern families who value safety, flexibility, and simplicity.
                        </p>

                        <div className="mt-8 flex justify-center gap-4 flex-wrap">
                            <button className="px-6 py-3 bg-cyan-500 
                            rounded-xl 
                            shadow 
                            hover:bg-amber-600 hover:text-white 
                            transition cursor-pointer" onClick={() => navigate("/signup")}>
                            Get Started
                            </button>

                            <button className="px-6 py-3 border 
                                    border-cyan-500 rounded-xl 
                                    hover:bg-amber-300 hover:text-white
                                    transition 
                                    cursor-pointer" onClick={() => navigate("/contact")}>
                            Learn More
                            </button>
                        </div>
                        </div>
                    </section>

                    {/* FEATURES */}
                    <section className="py-16 px-6">
                        <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold">Why Choose Us?</h2>

                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {featuresdata.map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-2xl 
                                shadow 
                                hover:shadow-lg hover:shadow-cyan-200 
                                transition cursor-pointer"
                            >
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="mt-3 text-gray-600">{item.desc}</p>
                            </div>
                            ))}
                        </div>
                        </div>
                    </section>

                    {/* locations */}
                    <section className="py-16 bg-white px-6">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl font-bold">Our Locations</h2>

                            <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {homelocations.map((loc, index) => (
                                <div
                                    key={index}
                                    className="p-8
                                    shadow
                                    rounded-2xl 
                                    hover:shadow-lg hover:shadow-amber-200
                                    transition 
                                    flex flex-col justify-between
                                    cursor-pointer"
                                    >
                                    <div>
                                        <h3 className="text-2xl font-semibold">{loc.city}</h3>
                                        <p className="mt-2 text-gray-600">{loc.desc}</p>
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="mt-6 flex gap-3 justify-center">
                                        
                                        <button className="px-5 py-2
                                        shadow-md 
                                        border-gray-300 rounded-lg 
                                        hover:bg-amber-600 hover:text-white 
                                        transition cursor-pointer" onClick={() => navigate("/location")}>
                                        Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </section>

                    {/* testimonials */}
                    <section className="py-16 px-6 bg-gray-50">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl font-bold">What Parents Say</h2>

                            <div className="mt-10 grid gap-6 md:grid-cols-3">
                                {[
                                "Amazing service! I feel safe leaving my kids.",
                                "Super easy to use and very reliable.",
                                "Flexible booking made my life so much easier.",
                                ].map((review, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white rounded-2xl shadow"
                                >
                                    <p className="text-gray-600">"{review}"</p>
                                    <div className="mt-4 text-yellow-500">★★★★★</div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* cta */}
                    <section className="py-16 
                            bg-amber-600
                            rounded-lg 
                            text-center px-6">

                        <h2 className="text-3xl text-white font-bold">
                        Ready to Get Started?
                        </h2>
                        <p className="mt-4 text-white">
                        Join families who trust our childcare services today.
                        </p>

                        <button className="mt-6 px-6 py-3 
                        rounded-full
                        bg-white 
                        font-semibold 
                        hover:bg-amber-500 hover:text-white
                        transition cursor-pointer" onClick={() => navigate("/signup")}>
                        Sign Up Now
                        </button>
                    </section>
                </div>
            </motion.div>
        </>
    );
}

export default Home;

