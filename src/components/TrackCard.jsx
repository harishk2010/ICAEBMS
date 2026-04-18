
const colorMap = {
  blue: "from-blue-500 to-blue-700 bg-blue-50 text-blue-900 border-blue-100",
  indigo: "from-indigo-500 to-indigo-700 bg-indigo-50 text-indigo-900 border-indigo-100",
  purple: "from-purple-500 to-purple-700 bg-purple-50 text-purple-900 border-purple-100",
  green: "from-emerald-500 to-emerald-700 bg-emerald-50 text-emerald-900 border-emerald-100",
  orange: "from-orange-400 to-orange-600 bg-orange-50 text-orange-900 border-orange-100",
  teal: "from-teal-500 to-teal-700 bg-teal-50 text-teal-900 border-teal-100",
};

export default function TrackCard({ id, title, icon, color, description }) {
  const [bg, textBg, textColor, border] = colorMap[color]?.split(" ") ?? [];

  return (
    <div className={`card-hover p-6 border ${border ?? "border-gray-100"} rounded-2xl group`}>
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bg ?? ""} ${textBg ?? ""} flex items-center justify-center text-2xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Session {id}
          </span>
          <h3 className={`font-bold mt-0.5 text-base leading-snug ${textColor ?? "text-blue-900"}`}>
            {title}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mt-3">{description}</p>
    </div>
  );
}
