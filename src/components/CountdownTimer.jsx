import  { useState, useEffect } from "react";

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate) - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-white/20 shadow-inner">
        <span className="text-2xl md:text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-blue-200 text-xs mt-1.5 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({ targetDate, label = "Conference Starts In" }) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <p className="text-blue-200 text-sm uppercase tracking-widest mb-4 font-medium">{label}</p>
      <div className="flex items-end justify-center gap-3 md:gap-4">
        <Unit value={time.days} label="Days" />
        <span className="text-white/50 text-2xl font-thin mb-4">:</span>
        <Unit value={time.hours} label="Hours" />
        <span className="text-white/50 text-2xl font-thin mb-4">:</span>
        <Unit value={time.minutes} label="Mins" />
        <span className="text-white/50 text-2xl font-thin mb-4">:</span>
        <Unit value={time.seconds} label="Secs" />
      </div>
    </div>
  );
}
