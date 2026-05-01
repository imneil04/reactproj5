import { motion } from "motion/react";
import { contactInfo } from "../data/contactInfoData";

const Contact = () => {
    return (
        <>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto"
            >
                <div className="bg-gray-50 min-h-screen py-12 px-4">
                    <div className="max-w-5xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-800 mb-3">
                                We'd love to hear from you 💬
                            </h1>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Whether you have questions, feedback, or just want to learn more about our childcare services, we're here to help.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
                                >
                                    <h3 className="font-semibold text-lg text-gray-800 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-2">
                                        {item.desc}
                                    </p>
                                    <p className="text-indigo-600 font-medium">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Form Section */}
                        <div className="bg-white rounded-2xl shadow p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Send us a message
                            </h2>

                            <form className="grid gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-3 shadow-lg rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full p-3 shadow-lg rounded-lg 
                                        focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    />
                                </div>

                                <select className="w-full p-3 shadow-lg rounded-lg 
                                focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                    <option>What can we help you with?</option>
                                    <option>General Inquiry</option>
                                    <option>Enrollment</option>
                                    <option>Feedback</option>
                                    <option>Support</option>
                                </select>

                                <textarea
                                    rows={5}
                                    placeholder="Write your message..."
                                    className="w-full p-3 border rounded-lg 
                                    focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />

                                <button
                                    type="submit"
                                    className="bg-cyan-600 text-white py-3 rounded-lg 
                                    font-medium 
                                    hover:bg-amber-600 transition cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Reassurance */}
                        <div className="text-center mt-10 text-gray-500 text-sm">
                            We usually respond within 24 hours. Your feedback helps us grow ❤️
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Contact;

