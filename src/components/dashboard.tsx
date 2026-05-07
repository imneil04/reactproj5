import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleCalendar from "./schedulecalendar";
import MessagePanel from "./messagepanel";
//custom css
import "../styling/qactionstyling.css";
import { motion } from "motion/react";


const dashboard = () => {
    //auth state
    const { user }  = useContext(AuthContext);

    //const [currentDate, setCurrentDate] = useState("");

    //state mgt calendar
    //const [showSchedule, setShowSchedule] = useState(false);
    //state mgt message box
    //const[showMessages, setShowMessages] = useState(false);

    //for better UI state mgt control for quick actions
    const [activePanel, setActivePanel] = useState<
        "messages" | "schedule" | ""
    >("");

    const navigate = useNavigate();

     //const [checkedIn, setCheckedIn] = useState(true);
     //for status state
    const [status, setStatus] = useState<
        "checkin" | "checkout" | ""

    >(() => {
        return (
            (localStorage.getItem("childStatus") as | "checkin" | "checkout" | "") || ""
        );
    });

    //time state
    const [dropOffTime, setDropOffTime] = useState(() => {

        return localStorage.getItem("dropOffTime") || "08:00";
    });

    const [pickupTime, setPickupTime] = useState(() => {

        return localStorage.getItem("pickupTime") || "17:00";
    });

    //save when status change
    useEffect(() => {
        localStorage.setItem("childStatus", status);
    }, [status]);

    //save time change
    useEffect(() => {
        localStorage.setItem("dropOffTime", dropOffTime);
    }, [dropOffTime]);

    useEffect(() => {
        localStorage.setItem("pickupTime", pickupTime);
    }, [pickupTime]);

    return (
        <>
            <div className="p-6 space-y-6 mx-auto min-h-screen bg-gray-50 rounded-lg">
                {/* Welcome */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h1 className="text-2xl font-semibold">
                    Welcome to your Dashboard, {user?.name} <i className="fa-solid fa-chart-bar ml-1"></i>
                    </h1>

                    <p className="text-gray-500 mt-3">
                        {status === "checkin"
                            ? `Meir checked in at ${dropOffTime} AM and will be picked up at ${pickupTime} PM`
                            : status === "checkout"
                            ? `Meir checked out at ${pickupTime} PM`
                            : `Set today's attendance status and schedule.`
                        }
                    </p>
                </div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6">

                    {/* status section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* status */}
                        <div className="bg-white rounded-2xl shadow p-5">
                            <p className="text-gray-500 text-sm mb-3">
                                Status
                            </p>

                            {/* Status Indicator */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className={`
                                    w-4 h-4 rounded-full transition-all duration-300
                                    ${
                                        status === "checkin"
                                        ? "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"
                                        : status === "checkout"
                                        ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
                                        : "bg-gray-300"
                                    }
                                    `}
                                />

                                <span className="font-medium">
                                    {status === "checkin"
                                    ? "Checked In"
                                    : status === "checkout"
                                    ? "Checked Out"
                                    : "No Status Selected"}
                                </span>
                            </div>

                            {/* action buttons */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setStatus("checkin")}
                                    className={`
                                    flex-1 py-2 rounded-xl font-medium transition cursor-pointer
                                    hover:shadow-lg
                                    ${
                                        status === "checkin"
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }
                                    `}
                                >
                                    Check In
                                </button>

                                <button
                                    onClick={() => setStatus("checkout")}
                                    className={`
                                    flex-1 py-2 rounded-xl font-medium transition cursor-pointer
                                    hover:shadow-lg
                                    ${
                                        status === "checkout"
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-100 hover:bg-gray-200"
                                    }
                                    `}
                                >
                                    Check Out
                                </button>
                            </div>
                        </div>

                        {/* Drop-off Time */}
                        <div className="bg-white rounded-2xl shadow p-5">
                            <p className="text-gray-500 text-sm mb-3">
                            Drop-off Time
                            </p>

                            <input
                            type="time"
                            value={dropOffTime}
                            onChange={(e) => setDropOffTime(e.target.value)}
                            disabled={status === "checkin"}
                            className={`
                                w-full border rounded-xl p-2 outline-none transition
                                ${
                                status === "checkin"
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "focus:ring-2 focus:ring-blue-500"
                                }
                            `}
                            />
                        </div>

                        {/* Pickup Time */}
                        <div className="bg-white rounded-2xl shadow p-5">
                            <p className="text-gray-500 text-sm mb-3">
                            Pickup Time
                            </p>

                            <input
                                type="time"
                                value={pickupTime}
                                onChange={(e) => setPickupTime(e.target.value)}
                                disabled={status === "checkout"}
                                className={`
                                    w-full border rounded-xl p-2 outline-none transition
                                    ${
                                    status === "checkout"
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : "focus:ring-2 focus:ring-blue-500"
                                    }
                                `}
                            />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-lg font-semibold mb-4">
                        Quick Actions <i className="fa-solid fa-forward-fast ml-1"></i>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button className="action-btn shadow-lg px-3 py-3 rounded-full
                                            bg-gray-100
                                            hover:shadow-cyan-200 transition-all duration-200 ease-in-out
                                            cursor-pointer"
                                    onClick={() => setActivePanel(activePanel === "messages" ? "" : "messages")}>
                                <i className="fa-solid fa-paper-plane"></i> Message Staff
                            </button>

                            <button className="action-btn shadow-lg px-2 py-2 rounded-full
                                                bg-gray-100
                                                hover:shadow-cyan-200 transition-all duration-200 ease-in-out
                                                cursor-pointer" 
                                    onClick={() => setActivePanel(activePanel === "schedule" ? "" : "schedule")}>
                                <i className="fa-solid fa-calendar-check"></i> Schedule
                            </button>
                            

                            <button className="action-btn shadow-lg px-2 py-2 rounded-full
                                                bg-gray-100
                                                hover:shadow-cyan-200 transition-all duration-200 ease-in-out
                                                cursor-pointer">
                                <i className="fa-solid fa-credit-card"></i> Payments
                            </button>

                            <button className="action-btn shadow-lg px-2 py-2 rounded-full
                                                bg-gray-100
                                                hover:shadow-cyan-200 transition-all duration-200 ease-in-out
                                                cursor-pointer"
                                                onClick={() => navigate("/location")}>
                                <i className="fa-solid fa-compass"></i> Locations
                            </button>
                        </div>

                            {/**render quick action UI */}
                            <div className="mt-5">
        
                                {activePanel === "messages" && (
                                    <div className="animate-fade-slide">
                                        <MessagePanel />
                                    </div>
                                )}

                                {activePanel === "schedule" && (
                                    <div className="animate-fade-slide">
                                        <ScheduleCalendar />
                                    </div>
                                )}
                            </div>
                    </div>
                            
                        
                    {/* Announcements */}
                    <div className="bg-white rounded-2xl shadow p-6">
                        <h2 className="text-lg font-semibold mb-4">
                        Announcements <i className="fa-solid fa-bell ml-1"></i>
                        </h2>

                        <div className="space-y-3">
                            <div className="rounded-xl p-4 shadow-lg 
                                hover:shadow-amber-200 transition cursor-pointer">
                                <p className="font-medium">
                                    Pajama Day this Friday 🎉
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Dont forget to bring comfy pajamas for the event.
                                </p>
                            </div>

                            <div className="rounded-xl p-4 shadow-lg
                                hover:shadow-amber-200 transition cursor-pointer">
                                <p className="font-medium">
                                    Family Day 👨‍👩‍👧‍👦
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Spend this special day with love ones. Bring food.
                                </p>
                            </div>

                            <div className="rounded-xl p-4 shadow-lg
                                hover:shadow-amber-200 transition cursor-pointer">
                                <p className="font-medium">
                                    Summer outdoor picnic 🧺
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Great way to start summer, please ask staff for more details.
                                </p>
                            </div>

                            <div className="rounded-xl p-4 shadow-lg
                                hover:shadow-amber-200 transition cursor-pointer">
                                <p className="font-medium">
                                    Monthly Payments Reminder 💳
                                </p>

                                <p className="text-sm text-gray-500 mt-1">
                                    Payments are due on May 10.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </>
    );
}

export default dashboard;