import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleCalendar from "./schedulecalendar";
import MessagePanel from "./messagepanel";
//custom css
import "../styling/qactionstyling.css";


type Stat = {
  label: string;
  value: number | string;
};

const dashboard = () => {
    //auth state
        const { user }  = useContext(AuthContext);

        const [currentDate, setCurrentDate] = useState("");

        //state mgt calendar
        //const [showSchedule, setShowSchedule] = useState(false);
        //state mgt message box
        //const[showMessages, setShowMessages] = useState(false);

        //for better UI state mgt control for quick actions
        const [activePanel, setActivePanel] = useState<
            "messages" | "schedule" | ""
        >("");

        const navigate = useNavigate();

        useEffect(() => {
        const date = new Date().toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        setCurrentDate(date);
  }, []);

  
    return (
        <>
            <div className="p-6 space-y-6 mx-auto min-h-screen">
                {/* Welcome */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h1 className="text-2xl font-semibold">
                    Welcome back, {user?.name} ✅
                    </h1>

                    <p className="text-gray-500 mt-2">
                    Emma is currently checked in at Sunshine Classroom.
                    </p>
                </div>

                {/* Child Status */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <p className="text-gray-500 text-sm">Status</p>
                        <h2 className="text-xl font-bold mt-2 text-green-600">
                            Checked In
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5">
                        <p className="text-gray-500 text-sm">Drop-off Time</p>
                        <h2 className="text-xl font-bold mt-2">
                            8:12 AM
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow p-5">
                        <p className="text-gray-500 text-sm">Pickup Time</p>
                        <h2 className="text-xl font-bold mt-2">
                            5:00 PM
                        </h2>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4">
                    Quick Actions
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button className="action-btn shadow-lg px-2 py-2 rounded-full
                                           cursor-pointer"
                                onClick={() => setActivePanel(activePanel === "messages" ? "" : "messages")}>
                            💬 Message Staff
                        </button>

                        <button className="action-btn shadow-lg px-2 py-2 rounded-full
                                            cursor-pointer" 
                                onClick={() => setActivePanel(activePanel === "schedule" ? "" : "schedule")}>
                            📅 Schedule
                        </button>
                        

                        <button className="action-btn shadow-lg px-2 py-2 rounded-full">
                            💳 Payments
                        </button>

                        <button className="action-btn shadow-lg px-2 py-2 rounded-full
                                cursor-pointer"
                                onClick={() => navigate("/location")}>
                            📍 Locations
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
                    Announcements
                    </h2>

                    <div className="space-y-3">
                        <div className="border rounded-xl p-4">
                            <p className="font-medium">
                            Pajama Day this Friday 🎉
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                            Don’t forget to bring comfy pajamas for the event.
                            </p>
                        </div>

                        <div className="border rounded-xl p-4">
                            <p className="font-medium">
                            Monthly Payments Reminder
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                            Payments are due on May 10.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default dashboard;