"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar, Clock, Timer, Zap } from "lucide-react";

export default function Countdown() {
  const targetDate = useMemo(() => {
    if (typeof window === "undefined") {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      return date;
    }

    const cached = localStorage.getItem("nivithub_countdown_target");
    if (cached) {
      const parsed = new Date(cached);
      if (!isNaN(parsed.getTime())) {
        // If it's already expired, let's keep it as is or reset for demo
        const diff = parsed.getTime() - new Date().getTime();
        if (diff > 0) {
          return parsed;
        }
      }
    }

    // Set 30 days from now and cache it
    const date = new Date();
    date.setDate(date.getDate() + 30);
    localStorage.setItem("nivithub_countdown_target", date.toISOString());
    return date;
  }, []);

  const getTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: "Days", value: timeLeft.days, icon: Calendar },
    { label: "Hours", value: timeLeft.hours, icon: Clock },
    { label: "Minutes", value: timeLeft.minutes, icon: Timer },
    { label: "Seconds", value: timeLeft.seconds, icon: Zap },
  ];

  return (
    <div className="flex items-center justify-center select-none">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          {/* Countdown card */}
          <div className="flex h-14 w-13 sm:h-16 sm:w-15 md:h-18 md:w-16 flex-col items-center justify-between rounded-xl sm:rounded-2xl border border-[#e5e7eb] bg-white p-1.5 sm:p-2 shadow-[0_8px_30px_rgb(238,242,255,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)]">
            <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#818cf8]" />
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-[#4f46e5]">
              {item.value}
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-wider text-slate-400">
              {item.label}
            </span>
          </div>

          {/* Colon separator */}
          {index < items.length - 1 && (
            <span className="mx-1 sm:mx-2 md:mx-2.5 text-lg sm:text-xl md:text-2xl font-bold text-[#818cf8]/60">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}