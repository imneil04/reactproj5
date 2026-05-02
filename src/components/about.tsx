import { motion } from "motion/react";
import { teamMembers } from "../data/teamMembers";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    return (
        <>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
           >

                <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 mx-auto">
                    {/* Container */}
                    <div className="flex-grow px-6 py-10 max-w-6xl mx-auto">

                        {/* Header */}
                        <section className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                                About Us
                            </h1>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Providing a safe, nurturing, and engaging environment where children
                                can learn, grow, and thrive every day.
                            </p>
                        </section>

                        {/* Mission + Vision */}
                        <section className="grid md:grid-cols-2 gap-8 mb-12">

                            <div className="bg-white 
                                            shadow-md rounded-2xl p-6
                                            hover:shadow-lg hover:shadow-cyan-200 
                                            cursor-pointer transition">
                                <h2 className="text-2xl font-semibold mb-3 text-cyan-600">
                                Our Mission
                                </h2>
                                <p className="text-gray-600">
                                To provide high-quality childcare that supports early development
                                through play, creativity, and structured learning.
                                </p>
                            </div>

                            <div className="bg-white 
                                            shadow-md 
                                            hover:shadow-lg hover:shadow-cyan-200 
                                            rounded-2xl p-6
                                            cursor-pointer transition">
                                <h2 className="text-2xl font-semibold mb-3 text-cyan-600">
                                Our Vision
                                </h2>
                                <p className="text-gray-600">
                                To be a trusted partner for families by creating a supportive and
                                inspiring environment for every child.
                                </p>
                            </div>
                        </section>

                        {/* Core Values */}
                        <section className="bg-gray-100 py-12">
                            <div className="max-w-6xl mx-auto px-6 text-center">
                                <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>

                                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                                    {["Safety First", "Learning Through Play", "Inclusivity", "Parent Partnership"].map(
                                        (value, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-6 rounded-2xl 
                                                    shadow-sm h-full 
                                                    hover:shadow-lg hover:-translate-y-1
                                                    hover:shadow-amber-200 hover:shadow-lg
                                                    cursor-pointer transition duration-300"
                                        >
                                            <h5 className="font-semibold text-gray-800">{value}</h5>
                                        </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </section>

                        {/**Team cards */}
                        <section className="py-12">
                            <div className="max-w-6xl mx-auto px-6 text-center">
                                <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>

                                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
                                    {teamMembers.map((member) => (
                                        <div key={member.id}>
                                            <div
                                                className="bg-white rounded-2xl shadow-sm h-full overflow-hidden 
                                                        hover:shadow-lg hover:shadow-cyan-200
                                                        cursor-pointer transition duration-300"
                                            >
                                                {/* Image */}
                                                <img
                                                src={member.img}
                                                alt={member.name}
                                                className="w-full h-56 object-cover"
                                                />

                                                {/* Content */}
                                                <div className="p-5">
                                                <h5 className="font-bold text-gray-800">{member.name}</h5>
                                                <p className="text-cyan-600 text-sm">{member.role}</p>
                                                <p className="text-gray-500 text-sm mt-2">{member.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-semibold text-center mb-6">
                                Why Choose Us?
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                "Qualified and caring staff",
                                "Safe and secure environment",
                                "Interactive learning programs",
                                "Flexible scheduling options",
                                "Modern and clean facilities",
                                "Strong parent communication",
                                ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 p-4 rounded-xl text-center shadow-sm"
                                >
                                    <p className="text-gray-700">{item}</p>
                                </div>
                                ))}
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="text-center bg-amber-600 p-8 rounded-2xl">
                            <h2 className="text-2xl font-semibold mb-4 text-white">
                                Ready to Get Started?
                            </h2>
                            <p className="mb-4 text-white">
                                Join our childcare community and give your child the best start.
                            </p>
                            <button className="bg-white 
                                               px-6 py-2 rounded-full font-medium 
                                               hover:bg-amber-500 hover:text-white
                                               transition-all
                                               cursor-pointer" onClick={() => navigate("/signup")}>
                                Sign Up
                            </button>
                        </section>
                    </div>
                </div>
           </motion.div>
        </>
    );
}

export default About;

