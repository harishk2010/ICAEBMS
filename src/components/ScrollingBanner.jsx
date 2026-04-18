

export default function ScrollingBanner({ text, className = "" }) {
  // Duplicate text for seamless loop
  const repeated = Array(4).fill(text).join("   ·   ");

  return (
    <div
      className={`bg-amber-500 text-white py-2.5 overflow-hidden ${className}`}
    >
      <div className="marquee-wrapper">
        <div className="marquee-content text-sm font-semibold tracking-wide">
          {repeated}&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;{repeated}
        </div>
      </div>
    </div>
  );
}
