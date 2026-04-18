import React, { useState } from "react";
import { Mail, Globe, MapPin, Phone } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeader from "../components/SectionHeader";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 py-16 text-center">
        <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30 mb-4 inline-block">
          Get in Touch
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">Contact Us</h1>
        <p className="text-blue-200 max-w-xl mx-auto px-4">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <SectionWrapper bg="gray">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <SectionHeader badge="Contact Info" title="Reach Out" center={false} />
            <div className="space-y-6">
              {[
                { icon: <Mail className="text-amber-500" size={20} />, label: "Email", value: "info@confworld.org", href: "mailto:info@confworld.org" },
                { icon: <Globe className="text-amber-500" size={20} />, label: "Website", value: "confworld.org", href: "https://confworld.org" },
                { icon: <Globe className="text-amber-500" size={20} />, label: "Conference Site", value: "icaebms.com", href: "https://icaebms.com" },
                { icon: <MapPin className="text-amber-500" size={20} />, label: "Venue", value: "Bangkok, Thailand (Venue TBA)" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-blue-800 font-medium hover:text-amber-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Organizer */}
            <div className="mt-8 bg-blue-900 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-2">Organized by</h4>
              <p className="text-blue-200 text-sm">Confworld Educational Research and Development Association</p>
              <a href="https://cerada.in" target="_blank" rel="noreferrer" className="text-amber-300 text-sm hover:underline mt-1 block">
                cerada.in →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">We'll get back to you within 2 business days.</p>
                <button onClick={() => setSent(false)} className="mt-6 btn-primary text-sm">
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-blue-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Subject *</label>
                    <input required name="subject" value={form.subject} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                    <textarea required name="message" value={form.message} onChange={handleChange}
                      rows={5} placeholder="Your message..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message ✉️
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
