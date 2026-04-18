import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";
import TrackCard from "../components/TrackCard";
import DeadlineCard from "../components/DeadlineCard";
import { TRACKS, DEADLINES } from "../data/conferenceData";

export default function CallForPapersPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-16 text-center">
        <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
          Submissions Open
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Call for Papers
        </h1>
        <p className="text-blue-200 max-w-2xl mx-auto px-4">
          We invite researchers, academicians and professionals to submit their papers.
          Topics of interest include, but are not limited to:
        </p>
      </div>

      {/* Session Tracks */}
      <SectionWrapper bg="white">
        <SectionHeader
          badge="Session Tracks"
          title="Topics of Interest"
          subtitle="Submit your research to one of our six interdisciplinary session tracks."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((track) => (
            <TrackCard key={track.id} {...track} />
          ))}
        </div>
      </SectionWrapper>

      {/* Submission Guidelines */}
      <SectionWrapper bg="blue-light">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="Guidelines" title="Submission Guidelines" center={false} />
          <div className="space-y-6">
            {[
              {
                title: "Abstract Submission",
                desc: "Submit a 250–300 word abstract clearly stating the research objective, methodology, findings, and significance. Abstracts should be submitted via the online submission portal.",
              },
              {
                title: "Full Paper Submission",
                desc: "Full papers must be 4–8 pages in IEEE/APA format. All papers must be original, unpublished work not currently under review elsewhere.",
              },
              {
                title: "Review Process",
                desc: "All submissions undergo double-blind peer review. Reviewers are selected based on their expertise in the relevant session track.",
              },
              {
                title: "Publication",
                desc: "Accepted papers will be published in the conference proceedings submitted to Scopus and Web of Science (BkCI) for indexing evaluation. T&C apply.",
              },
              {
                title: "Presentation Formats",
                desc: "Authors may present in-person at Bangkok or virtually via the online platform. Both oral and poster presentations are available.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
                <h3 className="font-bold text-blue-900 mb-2">
                  {i + 1}. {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Deadlines */}
      <SectionWrapper bg="white">
        <SectionHeader
          badge="Important Dates"
          title="Submission Deadlines"
          subtitle="Plan your submission schedule carefully to avoid missing critical deadlines."
        />
        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          {DEADLINES.map((d, i) => (
            <DeadlineCard key={i} {...d} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/submission" className="btn-primary">
            Submit Your Paper Now <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
