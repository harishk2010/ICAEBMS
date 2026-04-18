import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Globe, BookOpen, Award } from "lucide-react";
import ScrollingBanner from "../components/ScrollingBanner";
import CountdownTimer from "../components/CountdownTimer";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import DeadlineCard from "../components/DeadlineCard";
import TrackCard from "../components/TrackCard";
import {
  CONFERENCE,
  DEADLINES,
  TRACKS,
  HIGHLIGHTS,
  BENEFITS,
} from "../data/conferenceData";

export default function HomePage() {
  return (
    <>
      {/* Scrolling Banner */}
      <ScrollingBanner
        text={`🌏 HYBRID EVENT – Participate IN PERSON at Bangkok, Thailand or VIRTUALLY from your home or office`}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1f5c 0%, #1e3a8a 50%, #1d4ed8 100%)",
        }}
      >
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-amber-400/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="bg-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow">
              Hybrid Conference
            </span>
            <span className="bg-white/10 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/20">
              Scopus + Web of Science
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {CONFERENCE.name}
            <span className="block text-amber-300 text-2xl sm:text-3xl md:text-4xl mt-2 font-semibold">
              2026
            </span>
          </h1>

          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-3">
            {CONFERENCE.fullName}
          </p>

          <p className="text-amber-300 font-semibold text-lg italic mb-8">
            "{CONFERENCE.theme}"
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap justify-center gap-4 text-blue-100 text-sm mb-10">
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-amber-300" />
              {CONFERENCE.date}
            </span>
            <span className="text-blue-400">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-amber-300" />
              {CONFERENCE.city}
            </span>
            <span className="text-blue-400">|</span>
            <span className="flex items-center gap-1.5">
              <Globe size={15} className="text-amber-300" />
              In Person + Online
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/submission" className="btn-primary text-base px-8 py-3.5">
              Submit Your Paper <ArrowRight size={18} />
            </Link>
            <Link to="/registration" className="btn-outline text-base px-8 py-3.5">
              Register Now
            </Link>
          </div>

          {/* Countdown */}
          <CountdownTimer targetDate="2026-08-10T09:00:00" />
        </div>
      </section>

      {/* ── WELCOME ── */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              badge="Welcome"
              title="Welcome to ICAEBMS-2026"
              center={false}
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              We warmly welcome you to the{" "}
              <span className="font-semibold text-blue-900">{CONFERENCE.fullName}</span>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              ICAEBMS serves as a global platform where researchers, academicians,
              professionals and students from around the world come together to exchange
              ideas, present findings and build collaborations across disciplines.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              This conference is a space for innovation, interchange and the creation of
              solutions that address real-world challenges. By bringing together experts
              in science, engineering, education, business, management, social sciences
              and humanities, ICAEBMS fosters interdisciplinary connections that pave
              the way for impactful change.
            </p>
            <Link to="/about" className="btn-primary">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "6+", label: "Session Tracks", icon: <BookOpen size={22} className="text-blue-500" /> },
              { value: "2", label: "Days of Events", icon: <Calendar size={22} className="text-amber-500" /> },
              { value: "50+", label: "Countries Expected", icon: <Globe size={22} className="text-green-500" /> },
              { value: "🏆", label: "Best Paper Awards", icon: <Award size={22} className="text-purple-500" /> },
            ].map((stat, i) => (
              <div
                key={i}
                className="card-hover border border-gray-100 rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── THEME ── */}
      <SectionWrapper bg="blue-light">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader
            badge="Conference Theme"
            title={`"${CONFERENCE.theme}"`}
            subtitle="The theme reflects the core vision of ICAEBMS — bringing together diverse fields of knowledge to address global challenges."
          />
          <div className="grid sm:grid-cols-2 gap-4 text-left mt-10">
            {[
              "Encourage interdisciplinary collaboration among researchers, academicians, industry experts and policymakers.",
              "Promote innovative research and practices that contribute to sustainable development.",
              "Bridge the gap between science, technology, business and society through knowledge-sharing.",
              "Empower future leaders and young scholars with insights and opportunities for global engagement.",
              "Foster solutions that are practical, inclusive and impactful in addressing real-world challenges.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <span className="text-amber-500 font-bold text-lg flex-shrink-0">✦</span>
                <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── KEY HIGHLIGHTS ── */}
      <SectionWrapper bg="white">
        <SectionHeader
          badge="Key Highlights"
          title="What Makes ICAEBMS Special"
          subtitle="A world-class platform designed to inspire, connect, and advance research across disciplines."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="card-hover border border-gray-100 rounded-2xl p-6 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {h.icon}
              </div>
              <h3 className="font-bold text-blue-900 mb-2 text-sm">{h.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── SESSION TRACKS ── */}
      <SectionWrapper bg="gray">
        <SectionHeader
          badge="Call for Papers"
          title="Session Tracks"
          subtitle="Submit your research to one of our six focused session tracks spanning all major disciplines."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((track) => (
            <TrackCard key={track.id} {...track} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/call-for-papers" className="btn-primary">
            View Full Call for Papers <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      {/* ── SUBMISSION DEADLINES ── */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              badge="Important Dates"
              title="Submission Deadlines"
              subtitle="Don't miss out — mark these dates in your calendar."
              center={false}
            />
            <div className="space-y-4">
              {DEADLINES.map((d, i) => (
                <DeadlineCard key={i} {...d} />
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-10 text-center shadow-2xl">
            <h3 className="text-white font-bold text-xl mb-2">Ready to Submit?</h3>
            <p className="text-blue-200 text-sm mb-8 leading-relaxed">
              Submit your abstract or full paper today. Authors of selected papers will
              be invited to present at ICAEBMS-2026.
            </p>
            <Link to="/submission" className="btn-primary block mb-4">
              Submit Paper Now <ArrowRight size={16} />
            </Link>
            <Link to="/call-for-papers" className="text-blue-300 hover:text-amber-300 text-sm transition-colors">
              View Submission Guidelines →
            </Link>
            <div className="mt-8 pt-6 border-t border-blue-700/50">
              <p className="text-blue-300 text-xs mb-1">ISBN</p>
              <p className="text-white font-mono text-sm">{CONFERENCE.isbn}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── WHY JOIN ── */}
      <SectionWrapper bg="blue">
        <SectionHeader
          badge="Why Attend"
          title={<span className="text-white">Why Join Us at ICAEBMS?</span>}
          subtitle={
            <span className="text-blue-200">
              ICAEBMS is more than just an academic event — it's a global platform for
              innovation, collaboration and growth.
            </span>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl p-5 transition-all duration-200 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {b.icon}
              </div>
              <h4 className="text-white font-bold text-sm mb-1.5">{b.title}</h4>
              <p className="text-blue-200 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── PROCEEDINGS ── */}
      <SectionWrapper bg="white">
        <div className="text-center">
          <SectionHeader
            badge="Proceedings & Publications"
            title="Get Your Research Published"
            subtitle="ICAEBMS-2026 proceedings will be submitted to Web of Science Book Citation Index (BkCI) and Scopus for evaluation and indexing."
          />
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {["Scopus", "Web of Science", "Clarivate", "SCIE"].map((pub) => (
              <div
                key={pub}
                className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-4 font-bold text-blue-900 text-sm shadow-sm hover:shadow-md transition-shadow"
              >
                {pub}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 max-w-xl mx-auto">
            * Terms & Conditions apply. Indexing is subject to acceptance by respective bodies.
          </p>
        </div>
      </SectionWrapper>

      {/* ── CTA BANNER ── */}
      <div className="bg-amber-500 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Us in Shaping the Future
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Together, we can drive progress for a more sustainable and inclusive world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/registration"
              className="bg-white text-amber-600 font-bold px-8 py-3.5 rounded-full hover:bg-amber-50 transition-colors shadow-lg"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
