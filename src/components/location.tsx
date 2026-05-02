//import { locations } from "../data/locationData";
import { motion } from "motion/react";
import { useState } from "react";

const Location = ({ locations }: any) => {

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

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
                        {locations.map((loc: any) => {
                            const isOpen = activeId === loc.id;

                            return (
                                <div
                                    key={loc.id}
                                    className="bg-white rounded-xl shadow-sm 
                                    hover:shadow-lg hover:shadow-cyan-200 
                                    transition overflow-hidden cursor-pointer 
                                    flex flex-col"
                                    >
                                    
                                    {/* img */}
                                    <img
                                        src={loc.image}
                                        alt={loc.city}
                                        className="w-full h-100 object-cover p-3"
                                    />

                                    {/* contents */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        
                                        <h4 className="text-xl font-semibold mb-3">
                                        {loc.city}
                                        </h4>

                                        <div className="space-y-2 text-gray-600 text-sm">
                                            <p>
                                                <i className="fa-regular fa-address-book mr-2"></i>{loc.address}
                                            </p>
                                            <p>
                                                <i className="fa-solid fa-square-phone mr-2"></i>{loc.phone}
                                            </p>
                                            <p>
                                                <i className="fa-solid fa-clock mr-2"></i>{loc.hours}
                                            </p>
                                        </div>

                                        {/* sliding desc */}
                                        <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                            isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                                        }`}
                                        >
                                            <p className="text-gray-500 text-sm">
                                                {loc.description}
                                            </p>
                                        </div>

                                        {/* Button */}
                                        <div className="mt-auto pt-5">
                                            <button
                                                onClick={() => toggleDetails(loc.id)}
                                                className="w-full bg-cyan-500 
                                                py-2 
                                                rounded-lg 
                                                hover:bg-amber-600 hover:text-white
                                                transition cursor-pointer"
                                            >
                                                {isOpen ? "Hide Details" : "View Details"}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Location;

