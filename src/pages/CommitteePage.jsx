import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

const COMMITTEES = [
  {
    title: "Patron / Chief Patron",
    members: [
      { name: "To be announced", role: "Chief Patron", country: "TBA" },
    ],
  },
  {
    title: "General Chair",
    members: [
      { name: "To be announced", role: "General Chair", country: "TBA" },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "TBA", role: "Applied Sciences Chair", country: "" },
      { name: "TBA", role: "Engineering Chair", country: "" },
      { name: "TBA", role: "Education Chair", country: "" },
      { name: "TBA", role: "Business & Management Chair", country: "" },
      { name: "TBA", role: "Social Sciences Chair", country: "" },
      { name: "TBA", role: "Finance & Accountancy Chair", country: "" },
    ],
  },
];

export default function CommitteePage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-16 text-center">
        <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
          Organization
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Organizing Committee
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto px-4">
          ICAEBMS-2026 is organized by a distinguished panel of academics and professionals.
        </p>
      </div>

      <SectionWrapper bg="white">
        <SectionHeader
          badge="Committee"
          title="Conference Committee"
          subtitle="The committee details will be updated as confirmations are received."
        />
        <div className="space-y-10 max-w-4xl mx-auto">
          {COMMITTEES.map((committee, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-blue-900 border-b border-blue-100 pb-3 mb-5">
                {committee.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {committee.members.map((member, j) => (
                  <div key={j} className="card-hover border border-gray-100 rounded-xl p-5 text-center">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-700 font-bold text-xl">
                        {member.name === "To be announced" || member.name === "TBA"
                          ? "?"
                          : member.name[0]}
                      </span>
                    </div>
                    <p className="font-bold text-blue-900 text-sm">{member.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{member.role}</p>
                    {member.country && (
                      <p className="text-gray-400 text-xs mt-0.5">{member.country}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Interested in joining the Technical Program Committee?{" "}
            <a href="mailto:info@confworld.org" className="text-blue-700 hover:underline font-medium">
              Contact us
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
