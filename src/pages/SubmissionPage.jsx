import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

export default function SubmissionPage() {
  const [form, setForm] = useState({
    name: "", email: "", affiliation: "", country: "",
    track: "", title: "", abstract: "", type: "abstract",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-16 text-center">
        <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
          Paper Submission
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
          Submit Your Paper
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto px-4">
          Submit your abstract or full paper for ICAEBMS-2026.
        </p>
      </div>

      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Submission Received!</h2>
              <p className="text-gray-600 mb-4">
                Thank you, <strong>{form.name}</strong>. We've received your submission titled:
              </p>
              <p className="italic text-blue-700 font-medium mb-6">"{form.title}"</p>
              <p className="text-gray-500 text-sm">
                A confirmation email will be sent to <strong>{form.email}</strong> shortly.
                Reviewers will be in touch within 2–4 weeks.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:"",email:"",affiliation:"",country:"",track:"",title:"",abstract:"",type:"abstract" }); }}
                className="mt-8 btn-primary"
              >
                Submit Another Paper
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <SectionHeader badge="Submission Form" title="Paper Submission Form" center={false} />
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Submission Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Submission Type *</label>
                  <div className="flex gap-4">
                    {["abstract", "full-paper"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio" name="type" value={type}
                          checked={form.type === type}
                          onChange={handleChange}
                          className="accent-blue-700"
                        />
                        <span className="text-sm capitalize text-gray-700">
                          {type === "abstract" ? "Abstract Only" : "Full Paper"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name / Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      required name="name" value={form.name} onChange={handleChange}
                      placeholder="Dr. / Prof. / Mr. / Ms."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@university.edu"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Affiliation / Country */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Institution / Affiliation *</label>
                    <input
                      required name="affiliation" value={form.affiliation} onChange={handleChange}
                      placeholder="University / Organization"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country *</label>
                    <input
                      required name="country" value={form.country} onChange={handleChange}
                      placeholder="Your country"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Track */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Session Track *</label>
                  <select
                    required name="track" value={form.track} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">-- Select a track --</option>
                    <option>Session 1: Applied Science</option>
                    <option>Session 2: Engineering & Technological Advancements</option>
                    <option>Session 3: Education & Pedagogical Innovations</option>
                    <option>Session 4: Business & Management Studies</option>
                    <option>Session 5: Social Science and Humanities</option>
                    <option>Session 6: Finance, Accountancy and Marketing</option>
                  </select>
                </div>

                {/* Paper Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Paper Title *</label>
                  <input
                    required name="title" value={form.title} onChange={handleChange}
                    placeholder="Full title of your paper"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Abstract */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Abstract * (250–300 words)</label>
                  <textarea
                    required name="abstract" value={form.abstract} onChange={handleChange}
                    rows={6}
                    placeholder="Paste your abstract here..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                  Submit Paper 🚀
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By submitting, you confirm that this work is original and not under review elsewhere.
                </p>
              </form>
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
