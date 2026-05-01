import { locations } from "../data/locationData";
import { motion } from "motion/react";

const Location = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-6xl px-6 py-16 bg-gray-50">
  
                    {/* Header */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 flex items-center justify-center gap-2">
                        Our Locations 
                        <i className="bi bi-map"></i>
                    </h1>

                    <p className="text-center text-gray-500 mb-10">
                        Find a childcare center near you.
                    </p>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="bg-white rounded-xl shadow-sm 
                            hover:shadow-md 
                            transition overflow-hidden 
                            flex flex-col"
                        >
                            
                            {/* Image */}
                            <img
                            src={loc.image}
                            alt={loc.city}
                            className="w-full h-100 object-cover p-4"
                            />

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-grow">
                            
                            <h4 className="text-xl font-semibold mb-3">
                                {loc.city}
                            </h4>

                            <div className="space-y-2 text-gray-600 text-sm">
                                <p>
                                <i className="fa-regular fa-address-book mr-2"></i>
                                {loc.address}
                                </p>

                                <p>
                                <i className="fa-regular fa-square-phone mr-2"></i>
                                {loc.phone}
                                </p>

                                <p>
                                <i className="fa-regular fa-clock mr-2"></i>
                                {loc.hours}
                                </p>

                                <p className="text-gray-500">
                                <i className="fa-solid fa-note-sticky mr-2"></i>
                                {loc.description}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-auto pt-4">
                                <button className="w-full 
                                bg-cyan-500 text-white 
                                py-2 rounded-lg 
                                hover:bg-amber-600
                                transition cursor-pointer">
                                View Details
                                </button>
                            </div>

                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Location;

