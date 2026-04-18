import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import { CONFERENCE, HIGHLIGHTS } from "../data/conferenceData";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-16 text-center">
        <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
          About the Conference
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          About ICAEBMS-2026
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto px-4">
          Learn about our vision, mission, and what makes ICAEBMS a premier global conference.
        </p>
      </div>

      {/* Welcome section */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Overview" title="Welcome to ICAEBMS" center={false} />
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We warmly welcome you to the <strong className="text-blue-900">{CONFERENCE.fullName} ({CONFERENCE.name})</strong>.
            </p>
            <p>
              Theme: <em className="text-amber-600 font-semibold">"{CONFERENCE.theme}"</em>
            </p>
            <p>
              ICAEBMS serves as a global platform where researchers, academicians,
              professionals and students from around the world come together to exchange
              ideas, present findings and build collaborations across disciplines.
            </p>
            <p>
              This conference is not just an academic gathering — it is a space for
              innovation, interchange and the creation of solutions that address
              real-world challenges. By bringing together experts in science,
              engineering, education, business, management, social sciences and
              humanities, ICAEBMS fosters interdisciplinary connections that pave the
              way for impactful change.
            </p>
            <p>
              Join us in shaping the future through knowledge, research and
              collaboration. Together, we can drive progress for a more sustainable and
              inclusive world.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Theme */}
      <SectionWrapper bg="blue-light">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            badge="Conference Theme"
            title={`"${CONFERENCE.theme}"`}
            subtitle="The theme reflects the core vision of ICAEBMS — bringing together diverse fields of knowledge to address global challenges."
          />
          <p className="text-gray-600 leading-relaxed">
            By uniting applied science, engineering, education, business, management,
            social sciences and humanities, the conference aims to foster creativity,
            collaboration and sustainable solutions that transcend traditional boundaries.
          </p>
        </div>
      </SectionWrapper>

      {/* Key Highlights */}
      <SectionWrapper bg="white">
        <SectionHeader
          badge="Key Highlights"
          title="Conference Highlights"
          subtitle="Everything you need to make the most of ICAEBMS-2026."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} className="card-hover border border-gray-100 rounded-2xl p-6 text-center group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
              <h3 className="font-bold text-blue-900 text-sm mb-2">{h.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Organizer */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            badge="Organizer"
            title="About CERADA"
            subtitle="Confworld Educational Research and Development Association"
          />
          <p className="text-gray-600 leading-relaxed mb-6">
            CERADA is a leading educational research organization dedicated to fostering
            academic excellence and international collaboration. Through Confworld, CERADA
            hosts a network of prestigious international conferences spanning multiple disciplines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://cerada.in" target="_blank" rel="noreferrer" className="btn-primary">
              Visit CERADA <ArrowRight size={16} />
            </a>
            <a href="https://confworld.org" target="_blank" rel="noreferrer" className="btn-outline bg-blue-900 rounded-full">
              confworld.org <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
