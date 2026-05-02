import { motion } from "motion/react";
import { jobs } from "../data/careersData";
import { values } from "../data/valuesData";

const Careers = () => {
    return (
        <>
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto"
            >
                {/**main-outer container */}
                <div className="px-6 py-10 max-w-6xl bg-gray-50">
        
                    {/* Hero */}
                    <section className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 text-cyan-600">
                        Join Our Team
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                        We're passionate about creating a safe, nurturing, and inspiring environment
                        for children—and we're looking for dedicated individuals to grow with us.
                        </p>
                    </section>

                    {/* Values */}
                    <div className="flex flex-col">
                        <div><h2 className="text-3xl text-center font-bold mb-7">Why work with Us ?</h2></div>

                        <div>
                            <section className="grid md:grid-cols-3 gap-6 mb-12">
                                {values.map((item, index) => (
                                    
                                <div
                                    key={index}
                                    className="bg-white shadow rounded-xl p-6 text-center"
                                >
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                                ))}
                            </section>
                        </div>
                    </div>
                    

                    {/* Job Listings */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-center">
                        Open Positions
                        </h2>

                        <div className="space-y-6">
                        {jobs.map((job, index) => (
                            <div
                            key={index}
                            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
                            >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                                <h3 className="text-lg font-semibold">{job.title}</h3>
                                <span className="text-sm text-gray-500">
                                {job.location} • {job.type}
                                </span>
                            </div>

                            <p className="text-gray-600 mb-4">{job.description}</p>

                            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg 
                                    hover:bg-amber-600 transition cursor-pointer">
                                Apply Now
                            </button>
                            </div>
                        ))}
                        </div>
                    </section>

                    {/* cta */}
                    <section className="mt-16 text-center bg-blue-50 rounded-xl p-10">
                        <h2 className="text-2xl font-bold mb-3">
                            Don't see the right role?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We're always looking for passionate individuals. Send us your resume!
                        </p>

                        <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg 
                        hover:bg-amber-600 transition cursor-pointer">
                        Contact Us
                        </button>
                    </section>
                </div>
            </motion.div>
        </>
    );
}

export default Careers;

