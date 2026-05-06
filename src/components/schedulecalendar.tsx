import { useState } from "react";

const ScheduleCalendar = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (number | null)[] = [];

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Actual month days
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full max-w-md">
      
      <div className="flex items-center justify-between mb-4">
            <button
                onClick={() =>
                setCurrentDate(
                    new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1
                    )
                )
                }
                className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
                ←
            </button>

            <h2 className="text-xl font-semibold">
                {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
                })}
            </h2>

            <button
                onClick={() =>
                setCurrentDate(
                        new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth() + 1,
                        1
                    ))}
                className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
                →
            </button>
        </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-sm font-medium text-gray-500">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`
              h-10 flex items-center justify-center rounded-lg
              ${day ? "bg-gray-100 hover:bg-blue-100 cursor-pointer" : ""}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleCalendar;