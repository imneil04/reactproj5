import { useContext, useState } from "react";
import { Home, Info, MapPin, DollarSign, User, Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
//firebase
import { auth } from "../backend/firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";


const Sidebar = () => {

    //variables
    const [isOpen, setIsOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);

    //handler for navigation
    const handleNavClick = () => {

        //close sidebar on mobile after click
        setIsOpen(false);
    };

    type NavItemProps = {
    to: string;
    icon: React.ReactNode;
    label: string;
    collapsed: boolean;
    onClick?: () => void;
    };

    {/**sidebar items */}
    const NavItem = ({ to, icon, label, collapsed, onClick }: NavItemProps) => {
        return (
            <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition
                ${isActive 
                    ? "bg-amber-300 text-gray-800 font-semibold shadow-md" //when active
                    : "text-gray-600 hover:bg-amber-200"}` //when hover
            }
            >
            {/**icon scaling animation */}    
            <div className="transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>

            <span
                className={`whitespace-nowrap transition-all duration-200 ease-in-out 
                ${collapsed
                    ? "opacity-0 -translate-x-2 w-0 overflow-hidden"
                    : "opacity-100 translate-x-0 ml-1"}
                `}
            >
            {label}
            </span>
            </NavLink>
        );
    };

    //auth state
    const { user } = useContext(AuthContext);

    const { setMessage } = useContext(AuthContext);

    //navigate
    const navigate = useNavigate();

     //logout handler
    const handleLogout = async () => {

        try {

            await signOut(auth);

            //timeout gives firebase a moment to update state
            setTimeout(() => {
                setMessage("Logout successfully✅");

                navigate("/login", { replace: true }); //redirect after logout and post status msg
            }, 200);
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {/* Mobile Top Bar hamburger icon */}
            <div className="md:hidden flex justify-between items-center p-4 bg-amber-300 text-gray-700">
                <span></span>
                <button onClick={() => setIsOpen(!isOpen)}>
                
                {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                className="fixed inset-0 bg-black/40 z-30 md:hidden"
                onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar menu */}
            <aside
                className={`fixed top-0 left-0 h-full 
                            bg-gradient-to-b from-amber-300 via-cyan-200 to-white backdrop-blur-md
                            transition-all duration-300 ease-in-out
                            z-40 shadow-lg
                ${collapsed ? "w-20" : "w-70" }
                ${isOpen ? "block" : "hidden" } md:block` }
            >

                {/* Header */}
                <div className="p-4 border-b flex justify-between items-center">

                     {!collapsed && (
                        <div>
                        <h2 className="text-xl text-bold text-gray-700">
                            Childcare placeholder
                        </h2>
                        <p className="text-xs text-gray-500">
                            Safe, Trusted, & Reliable
                        </p>
                        </div>
                    )}

                     <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-gray-500 p-2 cursor-pointer">
                        <Menu />
                    </button>
                </div>

                {/* navbar menu */}
                <nav className="flex flex-col justify-center h-[70vh] px-2 space-y-3">
                    <NavItem to="/" icon={<Home />} label="Home" collapsed={collapsed} onClick={handleNavClick} />
                    <NavItem to="/about" icon={<Info />} label="About" collapsed={collapsed} onClick={handleNavClick} />
                    <NavItem to="/location" icon={<MapPin />} label="Locations" collapsed={collapsed} onClick={handleNavClick} />
                    <NavItem to="/pricing" icon={<DollarSign />} label="Pricing" collapsed={collapsed} onClick={handleNavClick} />

                    {/* Member section */}
                    <div className="relative">
                        <button
                            onClick={() => setAuthOpen(!authOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 rounded-xl hover:bg-amber-200 transition"
                        >
                            <div className="flex items-center gap-3 cursor-pointer">
                            <User />
                                {!collapsed && <span>Get Started</span>}
                            </div>

                            {!collapsed && (
                            <X
                                size={16}
                                className={`transition-transform duration-300 ${
                                authOpen ? "rotate-180" : ""
                                }`}
                            />
                            )}
                        </button>

                        {authOpen && (
                            <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
                                <div className="flex flex-col gap-1">

                                    {!user ? (
                                        <>
                                            {/* login */}
                                            <NavLink
                                            to="/login"
                                            className="block px-4 py-2 hover:bg-amber-500 text-sm rounded-lg transition"
                                            onClick={() => {
                                                setAuthOpen(false);
                                                handleNavClick();
                                            }}
                                            >
                                            Login
                                            </NavLink>

                                            {/* signup */}
                                            <NavLink
                                            to="/signup"
                                            className="block px-4 py-2 hover:bg-amber-500 text-sm rounded-lg transition"
                                            onClick={() => {
                                                setAuthOpen(false);
                                                handleNavClick();
                                            }}
                                            >
                                            Signup
                                            </NavLink>
                                        </>
                                        ) : (
                                        <>
                                            {user && (
                                                <div className="px-4 py-2 text-sm text-gray-500">
                                                    {user?.name}
                                                </div>
                                            )}

                                            {/* Logout */}
                                            <button
                                                onClick={handleLogout}
                                                className="text-left px-4 py-2 
                                                hover:bg-cyan-500 hover:text-white 
                                                text-sm rounded-lg transition cursor-pointer"
                                                >
                                                    Logout
                                            </button>

                                            {/* dashboard */}
                                            <NavLink
                                            to="/dashboard"
                                            className="block px-4 py-2 
                                            hover:bg-amber-500 
                                            hover:text-white
                                            text-sm rounded-lg transition"
                                            onClick={() => {
                                                setAuthOpen(false);
                                                handleNavClick();
                                            }}
                                            >
                                                My Dashboard
                                            </NavLink>
                                            
                                        </>
                                    )}

                                    {/* contact page - always visible */}
                                    <NavLink
                                    to="/contact"
                                    className="block px-4 py-2 
                                    hover:bg-amber-500 hover:text-white 
                                    text-sm rounded-lg transition"
                                    onClick={() => {
                                        setAuthOpen(false);
                                        handleNavClick();
                                    }}
                                    >
                                        Contact
                                    </NavLink>
                            </div>
                        </div>
                        )}
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;