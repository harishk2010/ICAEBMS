
export default function SectionWrapper({
  children,
  className = "",
  id = "",
  bg = "white",
}) {
  const bgMap = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-900",
    "blue-light": "bg-blue-50",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgMap[bg] || ""} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
