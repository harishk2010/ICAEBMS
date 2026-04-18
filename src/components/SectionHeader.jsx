import React from "react";

export default function SectionHeader({ badge, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 border border-amber-200">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 text-lg leading-relaxed ${center ? "max-w-2xl mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
