
import { Link } from "react-router-dom";
import { Mail, MapPin, ExternalLink, Globe } from "lucide-react";
import { CONFERENCE, NAV_LINKS } from "../data/conferenceData";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white">{CONFERENCE.name}-2026</div>
                <div className="text-blue-300 text-sm">{CONFERENCE.city}</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4 max-w-sm">
              {CONFERENCE.fullName}. Theme: "{CONFERENCE.theme}"
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-500/30">
                Scopus Indexed
              </span>
              <span className="bg-blue-500/20 text-blue-200 text-xs px-3 py-1 rounded-full border border-blue-400/30">
                Web of Science
              </span>
              <span className="bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full border border-green-500/30">
                Hybrid Conference
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-amber-300 text-sm transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin size={14} className="mt-0.5 text-amber-300 flex-shrink-0" />
                <span>Bangkok, Thailand (Venue TBA)</span>
              </li>
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <Mail size={14} className="mt-0.5 text-amber-300 flex-shrink-0" />
                <a href="mailto:info@confworld.org" className="hover:text-amber-300 transition-colors">
                  info@confworld.org
                </a>
              </li>
              <li className="flex items-start gap-2 text-blue-200 text-sm">
                <Globe size={14} className="mt-0.5 text-amber-300 flex-shrink-0" />
                <a
                  href={CONFERENCE.primaryWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  confworld.org <ExternalLink size={10} />
                </a>
              </li>
            </ul>

            {/* Organizer */}
            <div className="mt-6 pt-4 border-t border-blue-700/50">
              <p className="text-xs text-blue-400 mb-1">Organized by</p>
              <a
                href={CONFERENCE.organizerUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-200 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                {CONFERENCE.organizerShort}
              </a>
              <p className="text-xs text-blue-400 mt-0.5">ISBN: {CONFERENCE.isbn}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © 2026 {CONFERENCE.name}. All rights reserved. Organized by{" "}
            <a href={CONFERENCE.organizerUrl} target="_blank" rel="noreferrer" className="hover:text-amber-300">
              CERADA
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href={CONFERENCE.primaryWebsite} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-amber-300 text-xs transition-colors">
              confworld.org
            </a>
            <span className="text-blue-700">|</span>
            <a href="https://icaebms.com" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-amber-300 text-xs transition-colors">
              icaebms.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
