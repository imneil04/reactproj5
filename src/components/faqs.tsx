import { faqData } from "../data/faqData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


const FAQS = () => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (key: string) => {
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-6xl"
            >

                <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold text-amber-600 mb-4">
                        Frequently Asked Questions <i className="fa-solid fa-circle-question"></i>
                        </h1>
                        <p className="text-gray-600">
                        Find answers to common questions about our childcare services.
                        </p>
                    </div>

                    {/* FAQ Sections */}
                    <div className="max-w-4xl mx-auto space-y-10">
                        {faqData.map((category, catIdx) => (
                        <div key={catIdx}>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            {category.title}
                            </h2>

                            <div className="space-y-3">
                            {category.faqs.map((faq, faqIdx) => {
                                const key = `${catIdx}-${faqIdx}`;
                                const isOpen = openIndex === key;

                                return (
                                <div
                                    key={key}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100"
                                >
                                    <button
                                    onClick={() => toggle(key)}
                                    className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
                                    >
                                    <span className="font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    <span className="text-xl">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                    </button>

                                    {isOpen && (
                                    <div className="px-4 pb-4 text-gray-600 text-sm">
                                        {faq.answer}
                                    </div>
                                    )}
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="max-w-3xl mx-auto mt-16 text-center bg-white p-8 rounded-2xl shadow">
                        <h3 className="text-xl font-semibold mb-2">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            We're here to help. Reach out to us anytime.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-cyan-600 text-white px-6 py-2 
                            rounded-lg hover:bg-amber-700 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default FAQS;