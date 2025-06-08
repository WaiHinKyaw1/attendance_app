"use client";

import { useState, useEffect } from "react";

type CheckInData = {
  time: string;
  date: string;
};

export default function Home() {
  const [checkIn, setCheckIn] = useState<CheckInData | null>(null);
const [currentTime, setCurrentTime] = useState("");

useEffect(() => {
  const now = new Date();
  setCurrentTime(
    `${now.toLocaleDateString()} — ${now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`
  );
}, []);

  useEffect(() => {
    const saved = localStorage.getItem("check-in");
    if (saved) {
      setCheckIn(JSON.parse(saved));
    }
  }, []);

  const handleCheckIn = () => {
    const now = new Date();
    const checkInData: CheckInData = {
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      date: now.toLocaleDateString(),
    };
    localStorage.setItem("check-in", JSON.stringify(checkInData));
    setCheckIn(checkInData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-6">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Attendance Check-In
        </h1>
        <p className="text-center text-gray-500 mb-6">{currentTime}</p>
        <div className="text-center mb-6">
          <button
            onClick={handleCheckIn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
          >
            Check In
          </button>
        </div>

        {checkIn && (
          <p className="text-center text-gray-700">
            ✅ You checked in at{" "}
            <span className="font-semibold">{checkIn.time}</span> on{" "}
            <span className="font-semibold">{checkIn.date}</span>
          </p>
        )}
      </div>
    </div>
  );
}
