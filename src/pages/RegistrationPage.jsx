import  { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { CheckCircle } from "lucide-react";

const PLANS = [
  {
    label: "Student / Research Scholar",
    inPerson: "$149",
    virtual: "$79",
    color: "blue",
    features: ["Conference Kit", "Certificate of Participation", "Proceedings Access", "1 Paper Presentation"],
  },
  {
    label: "Academic / Faculty",
    inPerson: "$249",
    virtual: "$129",
    color: "amber",
    featured: true,
    features: ["Conference Kit", "Certificate of Participation", "Proceedings Access", "1 Paper Presentation", "Networking Dinner"],
  },
  {
    label: "Industry Professional",
    inPerson: "$299",
    virtual: "$149",
    color: "indigo",
    features: ["Conference Kit", "Certificate of Participation", "Proceedings Access", "1 Paper Presentation", "Networking Dinner", "Workshop Access"],
  },
  {
    label: "Listener / Attendee",
    inPerson: "$99",
    virtual: "$49",
    color: "green",
    features: ["Certificate of Participation", "Proceedings Access", "All Sessions Access"],
  },
];

export default function RegistrationPage() {
  const [mode, setMode] = useState("inPerson");

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-16 text-center">
        <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
          Registration
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Register for ICAEBMS-2026
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto px-4">
          Choose your participation mode and category. Early bird rates available!
        </p>
      </div>

      <SectionWrapper bg="gray">
        {/* Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full shadow p-1 flex gap-1">
            {["inPerson", "virtual"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  mode === m
                    ? "bg-blue-800 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-800"
                }`}
              >
                {m === "inPerson" ? "🏨 In Person" : "💻 Virtual"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border-2 p-6 transition-all duration-200 bg-white ${
                plan.featured
                  ? "border-amber-400 shadow-xl scale-105"
                  : "border-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full text-center mb-4 -mt-2">
                  Most Popular
                </div>
              )}
              <h3 className="font-bold text-blue-900 text-sm mb-4 leading-snug min-h-[40px]">
                {plan.label}
              </h3>
              <div className="mb-5">
                <span className="text-3xl font-bold text-blue-900">
                  {mode === "inPerson" ? plan.inPerson : plan.virtual}
                </span>
                <span className="text-gray-400 text-xs ml-1">USD</span>
                <p className="text-xs text-gray-400 mt-1">
                  {mode === "inPerson" ? "In Person – Bangkok" : "Virtual Attendance"}
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-amber-500 hover:bg-amber-600 text-white"
                    : "bg-blue-800 hover:bg-blue-900 text-white"
                }`}
              >
                Register Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          <p>Group discounts available for 5+ registrations from the same institution.</p>
          <p className="mt-1">
            For queries: <a href="mailto:info@confworld.org" className="text-blue-700 hover:underline">info@confworld.org</a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
