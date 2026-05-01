import { motion } from "motion/react";

const Pricing = () => {

    const plans = [
    {
        name: "Basic",
        price: "$200",
        description: "A simple starting point for managing essential childcare needs.",
        features: [
        "1 child profile",
        "Basic activity tracking",
        "Email support",
        ],
    },
    {
        name: "Standard",
        price: "$400",
        description: "Designed for growing families who need more flexibility.",
        features: [
        "Up to 3 child profiles",
        "Daily reports & updates",
        "Priority support",
        ],
        recommended: true,
    },
    {
        name: "Premium",
        price: "$550",
        description: "Complete access to all features for a seamless experience.",
        features: [
        "Unlimited child profiles",
        "Advanced insights",
        "24/7 dedicated support",
        ],
    },
];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >

                <div className="min-h-screen px-6 py-16 bg-gray-50">

                    {/* Intro (About-style tone) */}
                    <div className="max-w-6xl mx-auto text-center mb-14">
                        <h1 className="text-3xl font-bold text-gray-800">
                        Simple, Transparent Pricing
                        </h1>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                        We believe childcare management should be accessible, clear, and easy to use.
                        Our plans are designed to support families at every stage — without complexity.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-xl border p-6 transition
                            ${
                                plan.recommended
                                ? "border-cyan-500 bg-blue-50 dark:bg-blue-900/20"
                                : "border-gray-200"
                            }`}
                        >
                            {/* Plan Title */}
                            <h2 className="text-lg font-semibold text-gray-800">
                            {plan.name}
                            </h2>

                            {/* Price */}
                            <div className="mt-3">
                                <span className="text-2xl font-bold text-gray-900">
                                    {plan.price}
                                </span>
                                <span className="text-sm text-gray-700"> / month</span>
                            </div>

                            {/* Description */}
                            <p className="mt-3 text-sm text-gray-600">
                            {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="mt-5 space-y-2 text-sm text-gray-700">
                            {plan.features.map((feature, i) => (
                                <li key={i}>• {feature}</li>
                            ))}
                            </ul>

                            {/* cta */}
                            <button
                            className={`mt-6 w-full py-2 rounded-md text-sm font-medium transition cursor-pointer
                                ${
                                plan.recommended
                                    ? "bg-cyan-600 text-white hover:bg-cyan-700" //recommended
                                    : "bg-cyan-800 text-white hover:bg-amber-700" //other options
                                }`}
                            >
                            Choose Plan
                            </button>
                        </div>
                        ))}
                    </div>

                    {/* Closing section (matches About tone) */}
                    <div className="max-w-2xl mx-auto text-center mt-16">
                        <p className="text-gray-600">
                        Have questions or need help choosing the right plan?
                        </p>
                        <button className="mt-4 px-5 py-2 border rounded-lg 
                        text-sm text-white bg-cyan-500
                        hover:bg-amber-600 
                        cursor-pointer 
                        transition-all">
                        Contact Us
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Pricing;

