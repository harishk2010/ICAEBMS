import { CheckCircle, Clock } from "lucide-react";

export default function DeadlineCard({ icon, label, date, done }) {
  return (
    <div
      className={`relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 ${
        done
          ? "bg-gray-50 border-gray-200 opacity-70"
          : "bg-white border-amber-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
          done ? "bg-gray-100" : "bg-amber-50"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-blue-900 text-sm leading-tight">{label}</p>
        <p className={`text-sm mt-0.5 ${done ? "text-gray-400 line-through" : "text-amber-600 font-medium"}`}>
          {date}
        </p>
      </div>
      <div className="flex-shrink-0">
        {done ? (
          <CheckCircle size={20} className="text-gray-400" />
        ) : (
          <Clock size={20} className="text-amber-500" />
        )}
      </div>
    </div>
  );
}
